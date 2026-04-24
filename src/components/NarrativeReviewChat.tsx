import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Send, BookOpen, HelpCircle, GraduationCap } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";

interface ReviewQuestion {
  id: string;
  question: string;
  options: string[];
  userAnswerIndex: number | undefined;
  correctIndex: number;
  explanation: string;
}

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface Props {
  narrativeTitle: string;
  questions: ReviewQuestion[];
}

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/counselor-chat`;

const NarrativeReviewChat = ({ narrativeTitle, questions }: Props) => {
  const { session } = useAuth();
  const wrong = questions.filter((q) => q.userAnswerIndex !== q.correctIndex);

  const reviewContext =
    `The user just completed the narrative "${narrativeTitle}".\n\n` +
    `Questions answered incorrectly:\n` +
    (wrong.length === 0
      ? "(none — they got everything right)"
      : wrong
          .map(
            (q, i) =>
              `${i + 1}. ${q.question}\n   - Their answer: ${
                q.userAnswerIndex !== undefined ? q.options[q.userAnswerIndex] : "(unanswered)"
              }\n   - Correct: ${q.options[q.correctIndex]}\n   - Explanation: ${q.explanation}`,
          )
          .join("\n\n"));

  const quickActions = [
    { label: "Why was I wrong?", icon: HelpCircle, prompt: "Walk me through each question I got wrong and explain the clinical reasoning behind the correct answer." },
    { label: "Explain the diagnosis", icon: BookOpen, prompt: "Explain the diagnostic reasoning for this case, including DSM-5-TR criteria and key differential diagnoses I should rule out." },
    { label: "Study tips", icon: GraduationCap, prompt: "Based on what I missed, what should I focus on studying next? Give me 3 concrete topics with DSM-5-TR section references." },
  ];

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;
    const userMsg: Message = { role: "user", content: text.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    let assistantSoFar = "";
    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.access_token ?? ""}`,
        },
        body: JSON.stringify({
          messages: newMessages,
          context: `Narrative review: ${narrativeTitle}\n\n${reviewContext}`,
        }),
      });

      if (!resp.ok || !resp.body) throw new Error("Chat unavailable");

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        let nl: number;
        while ((nl = buffer.indexOf("\n")) !== -1) {
          let line = buffer.slice(0, nl);
          buffer = buffer.slice(nl + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;
          const json = line.slice(6).trim();
          if (json === "[DONE]") break;
          try {
            const p = JSON.parse(json);
            const c = p.choices?.[0]?.delta?.content;
            if (c) {
              assistantSoFar += c;
              setMessages((prev) => {
                const last = prev[prev.length - 1];
                if (last?.role === "assistant") {
                  return prev.map((m, i) => (i === prev.length - 1 ? { ...m, content: assistantSoFar } : m));
                }
                return [...prev, { role: "assistant", content: assistantSoFar }];
              });
            }
          } catch {
            buffer = line + "\n" + buffer;
            break;
          }
        }
      }
    } catch (e) {
      setMessages((prev) => [...prev, { role: "assistant", content: "Sorry, I couldn't connect just now. Try again in a moment." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="card-elevated border-primary/20">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <CardTitle className="text-base flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" />
          Review with CounselorAI
        </CardTitle>
        {wrong.length > 0 && (
          <Badge variant="outline" className="text-xs">
            {wrong.length} question{wrong.length === 1 ? "" : "s"} to review
          </Badge>
        )}
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-xs text-muted-foreground">
          Ask follow-up questions about the case, the questions you missed, or anything else you'd like to understand.
        </p>

        {/* Quick actions */}
        <div className="flex flex-wrap gap-2">
          {quickActions.map((a) => (
            <Button
              key={a.label}
              variant="outline"
              size="sm"
              className="h-7 text-xs"
              onClick={() => sendMessage(a.prompt)}
              disabled={isLoading}
            >
              <a.icon className="h-3 w-3 mr-1" />
              {a.label}
            </Button>
          ))}
        </div>

        {/* Messages */}
        {messages.length > 0 && (
          <ScrollArea className="max-h-[360px] rounded-md border border-border p-3" ref={scrollRef}>
            <div className="space-y-3">
              {messages.map((m, i) => (
                <div key={i} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
                  <div
                    className={cn(
                      "max-w-[85%] rounded-lg px-3 py-2 text-sm",
                      m.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground",
                    )}
                  >
                    {m.role === "assistant" ? (
                      <div className="prose prose-sm prose-invert max-w-none [&>p]:m-0 [&>ul]:my-1 [&>ol]:my-1">
                        <ReactMarkdown>{m.content}</ReactMarkdown>
                      </div>
                    ) : (
                      m.content
                    )}
                  </div>
                </div>
              ))}
              {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
                <div className="flex justify-start">
                  <div className="bg-muted rounded-lg px-3 py-2 text-sm">
                    <span className="inline-flex gap-1">
                      <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" />
                      <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </span>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
        )}

        {/* Input */}
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage(input);
              }
            }}
            placeholder="Ask about a question, diagnosis, or treatment plan…"
            disabled={isLoading}
            className="flex-1"
          />
          <Button size="icon" onClick={() => sendMessage(input)} disabled={isLoading || !input.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default NarrativeReviewChat;
