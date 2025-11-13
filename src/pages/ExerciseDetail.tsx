import { useParams, Link } from "react-router-dom";
import { exercises } from "@/data/exercises";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle2, Lightbulb, Play } from "lucide-react";
import { useState } from "react";

const difficultyColors = {
  "Débutant": "bg-accent text-accent-foreground",
  "Intermédiaire": "bg-secondary text-secondary-foreground",
  "Avancé": "bg-primary text-primary-foreground"
};

const ExerciseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const exercise = exercises.find((ex) => ex.id === id);
  const [completed, setCompleted] = useState(false);

  if (!exercise) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Exercice non trouvé</h1>
          <Link to="/exercises">
            <Button variant="hero">Retour aux exercices</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <Link to="/exercises">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux exercices
          </Button>
        </Link>

        <div className="animate-slide-up">
          <div className="flex items-start justify-between mb-6 gap-4 flex-wrap">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{exercise.title}</h1>
              <p className="text-lg text-muted-foreground">{exercise.description}</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Badge className={difficultyColors[exercise.difficulty]}>
                {exercise.difficulty}
              </Badge>
              <Badge variant="outline" className="border-primary text-primary">
                {exercise.duration}
              </Badge>
            </div>
          </div>

          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-elevated mb-8">
            <iframe
              width="100%"
              height="100%"
              src={exercise.videoUrl}
              title={exercise.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="w-5 h-5 text-primary" />
                  Instructions
                </CardTitle>
                <CardDescription>Suis ces étapes pour maîtriser l'exercice</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3">
                  {exercise.instructions.map((instruction, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      <span className="text-foreground">{instruction}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  Conseils
                </CardTitle>
                <CardDescription>Points clés pour réussir</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {exercise.tips.map((tip, index) => (
                    <li key={index} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center">
            <Button
              variant={completed ? "secondary" : "hero"}
              size="lg"
              onClick={() => setCompleted(!completed)}
              className="min-w-[200px]"
            >
              {completed ? (
                <>
                  <CheckCircle2 className="w-5 h-5 mr-2" />
                  Exercice complété !
                </>
              ) : (
                "Marquer comme complété"
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetail;
