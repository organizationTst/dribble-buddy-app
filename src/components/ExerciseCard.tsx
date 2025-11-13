import { Exercise } from "@/types/exercise";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface ExerciseCardProps {
  exercise: Exercise;
}

const difficultyColors = {
  "Débutant": "bg-accent text-accent-foreground",
  "Intermédiaire": "bg-secondary text-secondary-foreground",
  "Avancé": "bg-primary text-primary-foreground"
};

export const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  return (
    <Link to={`/exercise/${exercise.id}`}>
      <Card className="group overflow-hidden transition-all duration-300 hover:shadow-elevated hover:scale-[1.02] cursor-pointer">
        <div className="aspect-square overflow-hidden">
          <img 
            src={exercise.imageUrl} 
            alt={exercise.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <CardHeader>
          <div className="flex items-start justify-between gap-2 mb-2">
            <CardTitle className="text-xl">{exercise.title}</CardTitle>
            <Badge className={difficultyColors[exercise.difficulty]}>
              {exercise.difficulty}
            </Badge>
          </div>
          <CardDescription className="flex items-center gap-2 text-muted-foreground">
            <Clock className="w-4 h-4" />
            {exercise.duration}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-foreground">{exercise.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};
