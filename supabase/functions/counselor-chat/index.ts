import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are CounselorAI, an expert NCMHCE exam tutor. Follow these rules:

1. BE CONCISE BY DEFAULT. Give short, focused answers (3-6 sentences or a short bullet list). Only elaborate when the user explicitly asks for more detail, says "explain more", or asks "why".
2. Ground clinical responses in DSM-5-TR criteria. Reference specific criteria only when directly relevant.
3. In simulations, guide with brief Socratic questions — don't give away answers.
4. Use markdown sparingly: bold key terms, short bullet lists. Avoid long headers and multi-section responses unless asked.
5. Stay within NCMHCE scope. Redirect off-topic questions.
6. Be encouraging but direct. This is exam prep.
7. When the user asks a simple question, give a simple answer. Match response length to question complexity.
8. If the user asks what to study, give 1-2 specific recommendations, not an exhaustive list.`;

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    // Auth check
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseAnon = Deno.env.get("SUPABASE_ANON_KEY")!;
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    const userClient = createClient(supabaseUrl, supabaseAnon, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: userData, error: userErr } = await userClient.auth.getUser();
    if (userErr || !userData?.user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const user = userData.user;

    const { messages, context, previewTesting } = await req.json();

    // Subscription check (service role to bypass RLS for the RPC + legacy paid check)
    const admin = createClient(supabaseUrl, serviceKey);
    const { data: profile } = await admin
      .from("profiles")
      .select("payment_status")
      .eq("id", user.id)
      .maybeSingle();
    const legacyPaid = profile?.payment_status === "paid";

    let hasActive = legacyPaid;
    if (!hasActive) {
      const { data: sandboxActive } = await admin.rpc("has_active_subscription", {
        user_uuid: user.id,
        check_env: "sandbox",
      });
      const { data: liveActive } = await admin.rpc("has_active_subscription", {
        user_uuid: user.id,
        check_env: "live",
      });
      hasActive = !!sandboxActive || !!liveActive;
    }

    if (!hasActive && !previewTesting) {
      return new Response(
        JSON.stringify({ error: "Active subscription required to use CounselorAI." }),
        { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const systemMessage = `${SYSTEM_PROMPT}\n\nCurrent user context: ${context || "General browsing"}`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemMessage },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted. Please contact support." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI service unavailable" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
