import { Exercise } from "@/types/exercise";
import drillBasic from "@/assets/drill-basic.jpg";
import drillCrossover from "@/assets/drill-crossover.jpg";
import drillBetweenLegs from "@/assets/drill-between-legs.jpg";
import drillBehindBack from "@/assets/drill-behind-back.jpg";

export const exercises: Exercise[] = [
  {
    id: "basic-control",
    title: "Contrôle de base",
    description: "Maîtrise les fondamentaux du dribble avec les deux mains",
    difficulty: "Débutant",
    duration: "10 min",
    videoUrl: "https://www.youtube.com/embed/MRrNi7uHmaY",
    imageUrl: drillBasic,
    instructions: [
      "Commence en position athlétique, genoux légèrement fléchis",
      "Dribble le ballon à hauteur de taille avec ta main dominante",
      "Garde les yeux levés, ne regarde pas le ballon",
      "Pratique pendant 2 minutes, puis change de main",
      "Augmente progressivement la vitesse en gardant le contrôle"
    ],
    tips: [
      "Utilise le bout de tes doigts, pas la paume",
      "Fléchis bien les genoux pour rester stable",
      "Garde ta main non-dribbleuse protectrice"
    ]
  },
  {
    id: "crossover",
    title: "Crossover",
    description: "Apprends le mouvement de crossover pour changer de direction",
    difficulty: "Intermédiaire",
    duration: "15 min",
    videoUrl: "https://www.youtube.com/embed/rgBYwuK3I2k",
    imageUrl: drillCrossover,
    instructions: [
      "Commence en dribblant avec ta main droite",
      "Fais un grand pas vers la gauche avec ton pied gauche",
      "Fais passer le ballon rapidement devant toi vers ta main gauche",
      "Protège le ballon avec ton corps pendant le transfert",
      "Continue en dribblant avec la main gauche",
      "Répète l'exercice dans l'autre sens"
    ],
    tips: [
      "Le mouvement doit être rapide et bas",
      "Utilise ton corps pour protéger le ballon",
      "Pratique lentement au début, puis accélère"
    ]
  },
  {
    id: "between-legs",
    title: "Entre les jambes",
    description: "Technique avancée pour passer le ballon entre tes jambes",
    difficulty: "Intermédiaire",
    duration: "15 min",
    videoUrl: "https://www.youtube.com/embed/juEjjdGdVU4",
    imageUrl: drillBetweenLegs,
    instructions: [
      "Commence en position de pas chassé, jambe droite devant",
      "Dribble avec ta main droite à côté de ta jambe droite",
      "Fais passer le ballon entre tes jambes vers ta main gauche",
      "Attrape le ballon avec ta main gauche derrière toi",
      "Continue le dribble et répète le mouvement",
      "Alterne les directions"
    ],
    tips: [
      "Écarte bien les jambes pour faire passer le ballon",
      "Reste bas sur tes appuis",
      "Le mouvement doit être fluide, pas haché"
    ]
  },
  {
    id: "behind-back",
    title: "Dans le dos",
    description: "Maîtrise le dribble dans le dos pour surprendre les défenseurs",
    difficulty: "Avancé",
    duration: "20 min",
    videoUrl: "https://www.youtube.com/embed/Ze9QKvjZxYQ",
    imageUrl: drillBehindBack,
    instructions: [
      "Commence en dribblant avec ta main droite sur le côté",
      "Tourne ton poignet pour envoyer le ballon derrière ton dos",
      "Le ballon doit rebondir légèrement sur le côté",
      "Attrape-le avec ta main gauche de l'autre côté",
      "Continue le dribble et répète",
      "Pratique des deux côtés"
    ],
    tips: [
      "Utilise la force du poignet, pas du bras",
      "Le ballon doit rester près de ton corps",
      "Commence en marchant, puis ajoute de la vitesse"
    ]
  }
];
