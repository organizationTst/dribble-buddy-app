import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Trophy, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-basketball.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Basketball training"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
              Deviens un pro du{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                dribble
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Programme d'entraînement complet avec vidéos de démonstration pour améliorer ton dribble au basket
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link to="/exercises">
                <Button variant="hero" size="lg" className="text-lg">
                  Commencer l'entraînement
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                En savoir plus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground animate-slide-up">
            Pourquoi notre programme ?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-card hover:shadow-elevated transition-all duration-300 animate-scale-in">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>Programme structuré</CardTitle>
                <CardDescription>
                  Progression logique du débutant à l'avancé
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  4 exercices soigneusement sélectionnés pour développer toutes les facettes de ton dribble
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elevated transition-all duration-300 animate-scale-in" style={{ animationDelay: "100ms" }}>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-gradient-secondary flex items-center justify-center mb-4">
                  <Trophy className="w-6 h-6 text-secondary-foreground" />
                </div>
                <CardTitle>Vidéos de qualité</CardTitle>
                <CardDescription>
                  Apprends avec des démonstrations claires
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  Chaque exercice est accompagné d'une vidéo détaillée pour bien comprendre les mouvements
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elevated transition-all duration-300 animate-scale-in" style={{ animationDelay: "200ms" }}>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-accent-foreground" />
                </div>
                <CardTitle>Suivi de progression</CardTitle>
                <CardDescription>
                  Reste motivé avec ton tableau de bord
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  Visualise ta progression et célèbre chaque exercice complété
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-bounce-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary-foreground">
              Prêt à améliorer ton dribble ?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Rejoins notre programme d'entraînement et deviens imbattable sur le terrain
            </p>
            <Link to="/exercises">
              <Button 
                variant="secondary" 
                size="lg" 
                className="text-lg shadow-elevated hover:scale-105 transition-transform duration-300"
              >
                Accéder aux exercices
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
