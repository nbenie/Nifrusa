import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-background pt-16 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Bienvenue sur Nifrusa
          </h1>
          <div className="mt-6">
            <span className="text-lg text-muted-foreground">
              Votre destination shopping ultime avec des prix imbattables et un service exceptionnel.
              Rejoignez notre communauté grandissante de clients satisfaits aujourd'hui.
            </span>
          </div>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button size="lg">Acheter Maintenant</Button>
            <Button size="lg" variant="outline">
              En Savoir Plus
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}