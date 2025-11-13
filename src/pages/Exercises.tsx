import { exercises } from "@/data/exercises";
import { ExerciseCard } from "@/components/ExerciseCard";
import { ProgressTracker } from "@/components/ProgressTracker";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Exercises = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>
        </Link>
        
        <div className="mb-8 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Tous les exercices
          </h1>
          <p className="text-lg text-muted-foreground">
            Progresse à ton rythme avec notre programme complet
          </p>
        </div>

        <ProgressTracker />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {exercises.map((exercise, index) => (
            <div 
              key={exercise.id} 
              className="animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ExerciseCard exercise={exercise} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exercises;
