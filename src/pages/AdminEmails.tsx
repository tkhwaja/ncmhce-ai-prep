import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ADMIN_EMAILS = ["tahahareb18@gmail.com", "tahahareb7@gmail.com"];

type LogRow = {
  id: string;
  message_id: string | null;
  template_name: string;
  recipient_email: string;
  status: string;
  error_message: string | null;
  created_at: string;
};

const statusVariant = (s: string): "default" | "secondary" | "destructive" | "outline" => {
  if (s === "sent") return "default";
  if (s === "pending" || s === "rate_limited") return "secondary";
  if (s === "suppressed") return "outline";
  return "destructive";
};

const AdminEmails = () => {
  const { user, loading: authLoading } = useAuth();
  const [rows, setRows] = useState<LogRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "failed" | "sent">("all");

  const isAdmin = user && user.email && ADMIN_EMAILS.includes(user.email.toLowerCase());

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase.functions.invoke("admin-email-stats", {
      body: { filter },
    });
    if (!error && data?.rows) setRows(data.rows);
    setLoading(false);
  };

  useEffect(() => {
    if (isAdmin) load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAdmin, filter]);

  if (authLoading) return null;
  if (!user) return <Navigate to="/login" replace />;
  if (!isAdmin) return <Navigate to="/dashboard" replace />;

  const counts = rows.reduce(
    (acc, r) => {
      acc.total += 1;
      if (r.status === "sent") acc.sent += 1;
      else if (["failed", "dlq", "bounced", "complained"].includes(r.status)) acc.failed += 1;
      else if (r.status === "suppressed") acc.suppressed += 1;
      return acc;
    },
    { total: 0, sent: 0, failed: 0, suppressed: 0 }
  );

  return (
    <div className="min-h-screen bg-background p-6">
      <Helmet>
        <title>Email Monitor | Admin</title>
      </Helmet>
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Email monitor</h1>
          <div className="flex gap-2">
            <Button
              variant="default"
              size="sm"
              onClick={async () => {
                const ok = window.confirm(
                  "Rebuild the Brevo founders list and create the 'Founders Offer — Final Week Feature Tour' draft campaign?"
                );
                if (!ok) return;
                const { data, error } = await supabase.functions.invoke("sync-brevo-second-blast", { body: {} });
                if (error) {
                  alert("Failed: " + error.message);
                } else {
                  alert(
                    `Done.\nList: ${data?.listName}\nContacts refreshed: ${data?.contactsRefreshed}\nDraft campaign ID: ${data?.campaignId}\n\nOpen Brevo to review and send.`
                  );
                }
              }}
            >
              Draft 2nd blast in Brevo
            </Button>
            <Button variant="outline" size="sm" onClick={load} disabled={loading}>
              Refresh
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="rounded-lg border border-border p-4"><div className="text-xs text-muted-foreground">Total (latest 200)</div><div className="text-2xl font-semibold">{counts.total}</div></div>
          <div className="rounded-lg border border-border p-4"><div className="text-xs text-muted-foreground">Sent</div><div className="text-2xl font-semibold text-emerald-600">{counts.sent}</div></div>
          <div className="rounded-lg border border-border p-4"><div className="text-xs text-muted-foreground">Failed</div><div className="text-2xl font-semibold text-destructive">{counts.failed}</div></div>
          <div className="rounded-lg border border-border p-4"><div className="text-xs text-muted-foreground">Suppressed</div><div className="text-2xl font-semibold">{counts.suppressed}</div></div>
        </div>

        <div className="flex gap-2">
          {(["all", "failed", "sent"] as const).map((f) => (
            <Button key={f} variant={filter === f ? "default" : "outline"} size="sm" onClick={() => setFilter(f)}>
              {f}
            </Button>
          ))}
        </div>

        <div className="rounded-lg border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="text-left p-3">When</th>
                <th className="text-left p-3">Template</th>
                <th className="text-left p-3">Recipient</th>
                <th className="text-left p-3">Status</th>
                <th className="text-left p-3">Error</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={5} className="p-6 text-center text-muted-foreground">Loading…</td></tr>
              ) : rows.length === 0 ? (
                <tr><td colSpan={5} className="p-6 text-center text-muted-foreground">No emails yet</td></tr>
              ) : (
                rows.map((r) => (
                  <tr key={r.id} className="border-t border-border">
                    <td className="p-3 whitespace-nowrap text-muted-foreground">{new Date(r.created_at).toLocaleString()}</td>
                    <td className="p-3">{r.template_name}</td>
                    <td className="p-3">{r.recipient_email}</td>
                    <td className="p-3"><Badge variant={statusVariant(r.status)}>{r.status}</Badge></td>
                    <td className="p-3 text-xs text-muted-foreground max-w-[300px] truncate" title={r.error_message ?? ""}>{r.error_message}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminEmails;
