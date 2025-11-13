import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trophy, Target, Flame } from "lucide-react";

export const ProgressTracker = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <Card className="shadow-card hover:shadow-elevated transition-all duration-300">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Exercices complétés</CardTitle>
          <Trophy className="w-4 h-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground">2 / 4</div>
          <Progress value={50} className="mt-2" />
          <p className="text-xs text-muted-foreground mt-2">50% du programme</p>
        </CardContent>
      </Card>

      <Card className="shadow-card hover:shadow-elevated transition-all duration-300">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Série actuelle</CardTitle>
          <Flame className="w-4 h-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground">5 jours</div>
          <p className="text-xs text-muted-foreground mt-2">Continue comme ça !</p>
        </CardContent>
      </Card>

      <Card className="shadow-card hover:shadow-elevated transition-all duration-300">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Temps d'entraînement</CardTitle>
          <Target className="w-4 h-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground">45 min</div>
          <p className="text-xs text-muted-foreground mt-2">Cette semaine</p>
        </CardContent>
      </Card>
    </div>
  );
};
