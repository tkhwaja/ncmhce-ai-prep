import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useExamTrack } from "@/contexts/ExamTrackContext";
import { supabase } from "@/integrations/supabase/client";
import { Flashcard, FlashcardDeck } from "@/data/flashcards";
import { getActiveFlashcardDecks } from "@/lib/exam-content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import {
  ArrowLeft, RotateCcw, Check, Minus, X, Sparkles, Layers, ChevronLeft, ChevronRight
} from "lucide-react";
import TceIcon, { TceIconName } from "@/components/icons/TceIcon";

const DECK_HUE: Record<string, string> = {
  "flash-dsm": "text-violet-400",
  "flash-modalities": "text-fuchsia-400",
  "flash-ethical-codes": "text-emerald-400",
  "flash-theories": "text-amber-400",
  "flash-assessment": "text-cyan-400",
  "flash-crisis": "text-red-400",
};

interface ProgressMap {
  [cardId: string]: { status: string; next_review: string | null };
}

const Flashcards = () => {
  const { user, session } = useAuth();
  const { track, config } = useExamTrack();
  const { toast } = useToast();
  const location = useLocation();
  const navigate = useNavigate();
  const flashcardDecks = getActiveFlashcardDecks(track);
  const [selectedDeck, setSelectedDeck] = useState<FlashcardDeck | null>(null);
  const [studyMode, setStudyMode] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [progress, setProgress] = useState<ProgressMap>({});
  const [extraCards, setExtraCards] = useState<Record<string, Flashcard[]>>({});
  const [generating, setGenerating] = useState(false);

  useEffect(() => {
    const deckId = new URLSearchParams(location.search).get("deck");
    if (!deckId) return;
    const deck = flashcardDecks.find((item) => item.id === deckId);
    if (deck) setSelectedDeck(deck);
  }, [location.search, flashcardDecks]);

  useEffect(() => {
    if (!user) return;
    supabase
      .from("flashcard_progress")
      .select("card_id, status, next_review")
      .eq("user_id", user.id)
      .eq("exam_track", track)
      .then(({ data }) => {
        if (!data) return;
        const map: ProgressMap = {};
        data.forEach((d) => { map[d.card_id] = { status: d.status, next_review: d.next_review }; });
        setProgress(map);
      });
  }, [user, track]);

  const getAllCards = (deck: FlashcardDeck) => {
    return [...deck.cards, ...(extraCards[deck.id] || [])];
  };

  const getDeckStats = (deck: FlashcardDeck) => {
    const cards = getAllCards(deck);
    const total = cards.length;
    const mastered = cards.filter((c) => progress[c.id]?.status === "got_it").length;
    const lastReview = cards.reduce((latest, c) => {
      const p = progress[c.id];
      if (!p?.next_review) return latest;
      return !latest || p.next_review > latest ? p.next_review : latest;
    }, "" as string);
    return { total, mastered, masteryPct: total > 0 ? Math.round((mastered / total) * 100) : 0, lastReview };
  };

  const getStudyCards = (deck: FlashcardDeck) => {
    const all = getAllCards(deck);
    const now = new Date().toISOString();
    // Sort: missed first, then unseen, then almost, then due for review
    return [...all].sort((a, b) => {
      const pa = progress[a.id]?.status || "unseen";
      const pb = progress[b.id]?.status || "unseen";
      const order: Record<string, number> = { missed: 0, unseen: 1, almost: 2, got_it: 3 };
      return (order[pa] ?? 1) - (order[pb] ?? 1);
    });
  };

  const rateCard = async (cardId: string, deckId: string, status: "got_it" | "almost" | "missed") => {
    if (!user) return;
    const now = new Date();
    const intervals = { got_it: 7, almost: 3, missed: 1 };
    const nextReview = new Date(now.getTime() + intervals[status] * 24 * 60 * 60 * 1000).toISOString();

    setProgress((prev) => ({ ...prev, [cardId]: { status, next_review: nextReview } }));

    // Upsert
    const { error } = await supabase.from("flashcard_progress").upsert(
      { user_id: user.id, card_id: cardId, deck_id: deckId, status, last_reviewed: now.toISOString(), next_review: nextReview, exam_track: track },
      { onConflict: "user_track_card_deck" }
    );

    if (error) console.error("Failed to save progress:", error);

    // Move to next card
    setFlipped(false);
    if (selectedDeck) {
      const cards = getStudyCards(selectedDeck);
      if (currentIndex < cards.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        toast({ title: "Deck complete!", description: "You've reviewed all cards in this deck." });
        setStudyMode(false);
      }
    }
  };

  const generateMore = async (deck: FlashcardDeck) => {
    setGenerating(true);
    try {
      const resp = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/counselor-chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.access_token ?? ""}`,
        },
        body: JSON.stringify({
          messages: [{
            role: "user",
            content: `Generate 5 flashcards for the category "${deck.name}" for ${config.label} exam preparation. Return ONLY a JSON array with objects having "front" and "back" fields. Make them high-yield, clinically relevant, and distinct from basic concepts. Focus on ${track === "nce" ? "frequently tested concepts, definitions, and application to counseling scenarios" : "differential diagnosis, nuanced clinical scenarios, and frequently tested concepts"}.

Example format: [{"front":"Question here?","back":"Detailed answer here"}]

Return ONLY valid JSON, no markdown or explanation.`
          }],
          context: `Flashcards - ${deck.name}`,
        }),
      });

      if (!resp.ok) throw new Error("Failed to generate");

      const reader = resp.body!.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let fullText = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        let idx: number;
        while ((idx = buffer.indexOf("\n")) !== -1) {
          let line = buffer.slice(0, idx);
          buffer = buffer.slice(idx + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (!line.startsWith("data: ")) continue;
          const json = line.slice(6).trim();
          if (json === "[DONE]") break;
          try {
            const p = JSON.parse(json);
            const c = p.choices?.[0]?.delta?.content;
            if (c) fullText += c;
          } catch { break; }
        }
      }

      const match = fullText.match(/\[[\s\S]*\]/);
      if (!match) throw new Error("Invalid format");

      const newCards: Flashcard[] = JSON.parse(match[0]).map((c: any, i: number) => ({
        id: `${deck.id}-ai-${Date.now()}-${i}`,
        front: c.front,
        back: c.back,
      }));

      setExtraCards((prev) => ({
        ...prev,
        [deck.id]: [...(prev[deck.id] || []), ...newCards],
      }));

      toast({ title: `${newCards.length} new cards added!` });
    } catch (e: any) {
      toast({ title: "Error", description: e.message, variant: "destructive" });
    } finally {
      setGenerating(false);
    }
  };

  // Study mode
  if (studyMode && selectedDeck) {
    const cards = getStudyCards(selectedDeck);
    const card = cards[currentIndex];
    if (!card) {
      setStudyMode(false);
      return null;
    }

    return (
      <div className="p-4 sm:p-6 max-w-2xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <Button variant="ghost" onClick={() => { setStudyMode(false); setFlipped(false); }}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Deck
          </Button>
          <span className="text-sm text-muted-foreground">{currentIndex + 1} / {cards.length}</span>
        </div>

        <Progress value={((currentIndex + 1) / cards.length) * 100} className="h-1.5" />

        <Card
          className="card-elevated cursor-pointer min-h-[300px] flex items-center justify-center transition-all hover:border-primary/20"
          onClick={() => setFlipped(!flipped)}
        >
          <CardContent className="p-8 text-center">
            {!flipped ? (
              <>
                <Badge variant="outline" className="mb-4">Question</Badge>
                <p className="text-lg font-medium text-foreground">{card.front}</p>
                <p className="text-xs text-muted-foreground mt-4">Click to reveal answer</p>
              </>
            ) : (
              <>
                <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/30">Answer</Badge>
                <p className="text-sm text-foreground whitespace-pre-line leading-relaxed text-left">{card.back}</p>
              </>
            )}
          </CardContent>
        </Card>

        {flipped && (
          <div className="flex justify-center gap-3">
            <Button
              variant="outline"
              className="border-red-500/30 text-red-400 hover:bg-red-500/10"
              onClick={() => rateCard(card.id, selectedDeck.id, "missed")}
            >
              <X className="mr-2 h-4 w-4" /> Missed
            </Button>
            <Button
              variant="outline"
              className="border-amber-500/30 text-amber-400 hover:bg-amber-500/10"
              onClick={() => rateCard(card.id, selectedDeck.id, "almost")}
            >
              <Minus className="mr-2 h-4 w-4" /> Almost
            </Button>
            <Button
              variant="outline"
              className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10"
              onClick={() => rateCard(card.id, selectedDeck.id, "got_it")}
            >
              <Check className="mr-2 h-4 w-4" /> Got it
            </Button>
          </div>
        )}

        {!flipped && (
          <div className="flex justify-between">
            <Button variant="ghost" disabled={currentIndex === 0} onClick={() => { setCurrentIndex(currentIndex - 1); setFlipped(false); }}>
              <ChevronLeft className="mr-1 h-4 w-4" /> Previous
            </Button>
            <Button variant="ghost" disabled={currentIndex >= cards.length - 1} onClick={() => { setCurrentIndex(currentIndex + 1); setFlipped(false); }}>
              Next <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    );
  }

  // Deck detail view
  if (selectedDeck) {
    const stats = getDeckStats(selectedDeck);
    const cards = getAllCards(selectedDeck);

    return (
      <div className="p-4 sm:p-6 max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <Button variant="ghost" onClick={() => { setSelectedDeck(null); navigate("/flashcards"); }}>
            <ArrowLeft className="mr-2 h-4 w-4" /> All Decks
          </Button>
        </div>

        <div className="flex items-center gap-3">
          <TceIcon name={selectedDeck.icon as TceIconName} size={32} className={DECK_HUE[selectedDeck.icon] || "text-primary"} />
          <div>
            <h1 className="text-2xl font-bold text-foreground">{selectedDeck.name}</h1>
            <p className="text-muted-foreground">{stats.total} cards • {stats.masteryPct}% mastered</p>
          </div>
        </div>

        <div className="flex gap-3">
          <Button onClick={() => { setStudyMode(true); setCurrentIndex(0); setFlipped(false); }}>
            <Layers className="mr-2 h-4 w-4" /> Study Now
          </Button>
          {stats.mastered > 0 && (
            <Button variant="outline" onClick={async () => {
              if (!user) return;
              const cards = getAllCards(selectedDeck);
              const cardIds = cards.map(c => c.id);
              await supabase
                .from("flashcard_progress")
                .delete()
                .eq("user_id", user.id)
                .eq("deck_id", selectedDeck.id);
              setProgress((prev) => {
                const next = { ...prev };
                cardIds.forEach(id => delete next[id]);
                return next;
              });
              toast({ title: "Progress reset!", description: "All cards in this deck have been reset to unseen." });
            }}>
              <RotateCcw className="mr-2 h-4 w-4" /> Retake Deck
            </Button>
          )}
          <Button variant="outline" onClick={() => generateMore(selectedDeck)} disabled={generating}>
            <Sparkles className="mr-2 h-4 w-4" />
            {generating ? "Generating..." : "AI Generate More"}
          </Button>
        </div>

        <Progress value={stats.masteryPct} className="h-2" />

        <div className="grid gap-3">
          {cards.map((card) => {
            const p = progress[card.id];
            const statusColor = !p ? "text-muted-foreground" : p.status === "got_it" ? "text-emerald-400" : p.status === "almost" ? "text-amber-400" : "text-red-400";
            return (
              <Card key={card.id} className="card-elevated">
                <CardContent className="p-4 flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{card.front}</p>
                  </div>
                  <Badge variant="outline" className={statusColor}>
                    {!p ? "Unseen" : p.status === "got_it" ? "Mastered" : p.status === "almost" ? "Almost" : "Missed"}
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }

  // Deck list view
  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Flashcards</h1>
      <p className="text-muted-foreground">Review key NCMHCE concepts with spaced repetition</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {flashcardDecks.map((deck) => {
          const stats = getDeckStats(deck);
          return (
            <Card
              key={deck.id}
              className="card-elevated cursor-pointer hover:border-primary/30 transition-all group"
              onClick={() => setSelectedDeck(deck)}
            >
              <CardContent className="p-6">
                <TceIcon name={deck.icon as TceIconName} size={32} className={`mb-3 block ${DECK_HUE[deck.icon] || "text-primary"}`} />
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{deck.name}</h3>
                <div className="mt-3 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{stats.total} cards</span>
                    <span className="text-muted-foreground">{stats.masteryPct}% mastered</span>
                  </div>
                  <Progress value={stats.masteryPct} className="h-1.5" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Flashcards;
