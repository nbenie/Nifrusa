import { TrendingUp, Truck, Shield, Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: TrendingUp,
    title: "Meilleurs Prix",
    description: "Commissions les plus basses du marché, garantissant les meilleures offres",
  },
  {
    icon: Truck,
    title: "Livraison Rapide",
    description: "Expédition rapide et fiable à votre porte",
  },
  {
    icon: Shield,
    title: "Achats Sécurisés",
    description: "Transactions sûres et protégées pour votre tranquillité d'esprit",
  },
  {
    icon: Star,
    title: "Produits de Qualité",
    description: "Sélection soignée d'articles de haute qualité de vendeurs de confiance",
  },
];

export function FeaturesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <feature.icon className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <span className="text-muted-foreground">{feature.description}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}