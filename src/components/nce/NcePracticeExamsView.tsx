import { useNavigate } from "react-router-dom";
import { ncePracticeExams } from "@/data/nce/practice-exams";
import { NCE_ENABLED } from "@/config/exam-tracks";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Lock, Clock, ListChecks, Coffee, Eye } from "lucide-react";

/**
 * NCE practice exam hub.
 *
 * The NCE exams are multiple-choice and full-length, so they use their own
 * runner instead of the NCMHCE narrative-based flow. Exam 1 is authored but
 * still locked; the design is previewable in development only.
 */
const NcePracticeExamsView = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto space-y-6 sm:space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Practice Exams</h1>
        <p className="text-muted-foreground">
          Full-length, timed NCE-style exams. 200 questions, four options each, one question at a
          time — exactly the format you will meet on test day.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ncePracticeExams.map((exam) => {
          const fmt = exam.format;
          const authored = exam.questionIds.length > 0;

          return (
            <Card key={exam.id} className="card-elevated relative overflow-hidden">
              <CardContent className="p-6">
                {exam.comingSoon && (
                  <span className="absolute top-3 right-3 z-10 px-2.5 py-1 text-[10px] font-bold tracking-wider rounded-full bg-muted text-muted-foreground border border-border">
                    COMING SOON
                  </span>
                )}

                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg flex items-center justify-center shrink-0 bg-primary/10">
                    {exam.comingSoon ? (
                      <Lock className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <Brain className="h-5 w-5 text-primary" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0 pr-16">
                    <h3 className="font-semibold text-foreground">{exam.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{exam.description}</p>
                  </div>
                </div>

                {fmt ? (
                  <div className="grid grid-cols-3 gap-3 mt-5 pt-5 border-t border-border">
                    <div>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <ListChecks className="h-3 w-3" /> Questions
                      </p>
                      <p className="text-lg font-semibold text-foreground">{fmt.totalItems}</p>
                      <p className="text-[11px] text-muted-foreground">
                        {fmt.scoredItems} scored • {fmt.fieldTestItems} field-test
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" /> Time
                      </p>
                      <p className="text-lg font-semibold text-foreground">{fmt.testingMinutes} min</p>
                      <p className="text-[11px] text-muted-foreground">Timer pauses on break</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Coffee className="h-3 w-3" /> Break
                      </p>
                      <p className="text-lg font-semibold text-foreground">
                        Q{fmt.breakAfterQuestion}
                      </p>
                      <p className="text-[11px] text-muted-foreground">{fmt.breakMinutes} minutes</p>
                    </div>
                  </div>
                ) : (
                  <div className="mt-5 pt-5 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Item writing in progress. Format will match Exam 1.
                    </p>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mt-5">
                  <Button className="flex-1 min-w-[140px]" disabled>
                    <Lock className="h-4 w-4 mr-1" /> Coming Soon
                  </Button>
                  {import.meta.env.DEV && NCE_ENABLED && authored && (
                    <Button
                      variant="outline"
                      onClick={() => navigate(`/nce-practice-exam/${exam.id}`)}
                    >
                      <Eye className="h-4 w-4 mr-1" /> Preview design
                    </Button>
                  )}
                </div>

                {authored && (
                  <p className="text-[11px] text-muted-foreground mt-3">
                    Item set authored and imported • in subject-matter review
                  </p>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="card-elevated border-primary/30">
        <CardContent className="p-5 space-y-2">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="border-primary/40 text-primary">
              How scoring works
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            Only scored items count toward your raw score — field-test questions are mixed in
            invisibly, just like the real exam. You will see correctness, full rationales and a
            per-domain breakdown after you submit, never during the attempt.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default NcePracticeExamsView;
