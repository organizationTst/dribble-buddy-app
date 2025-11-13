export type DifficultyLevel = "Débutant" | "Intermédiaire" | "Avancé";

export interface Exercise {
  id: string;
  title: string;
  description: string;
  difficulty: DifficultyLevel;
  duration: string;
  videoUrl: string;
  imageUrl: string;
  instructions: string[];
  tips: string[];
}
