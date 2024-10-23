import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <ShoppingBag className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Nifrusa</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Votre destination shopping premium avec les commissions les plus basses et le meilleur service.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Shopping</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/deals" className="text-muted-foreground hover:text-primary">
                  Offres du Jour
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-muted-foreground hover:text-primary">
                  Catégories
                </Link>
              </li>
              <li>
                <Link href="/brands" className="text-muted-foreground hover:text-primary">
                  Marques
                </Link>
              </li>
              <li>
                <Link href="/gift-cards" className="text-muted-foreground hover:text-primary">
                  Cartes Cadeaux
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Aide & Support</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Nous Contacter
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-muted-foreground hover:text-primary">
                  Livraison
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-muted-foreground hover:text-primary">
                  Retours
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Légal</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary">
                  Conditions d'Utilisation
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground hover:text-primary">
                  Politique des Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t py-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nifrusa. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}