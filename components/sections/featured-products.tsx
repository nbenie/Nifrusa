import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ui/product-card";

const featuredProducts = [
  {
    id: 1,
    name: "Casque Sans Fil Premium",
    price: 199.99,
    rating: 4.8,
    reviews: 456,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    category: "Électronique",
  },
  {
    id: 2,
    name: "T-Shirt en Coton Bio",
    price: 29.99,
    rating: 4.5,
    reviews: 289,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80",
    category: "Mode",
  },
  {
    id: 3,
    name: "Caméra de Sécurité Intelligente",
    price: 149.99,
    rating: 4.7,
    reviews: 673,
    image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=500&q=80",
    category: "Électronique",
  },
  {
    id: 4,
    name: "Bouteille d'Eau Écologique",
    price: 24.99,
    rating: 4.9,
    reviews: 892,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80",
    category: "Style de Vie",
  },
];

export function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">Produits Vedettes</h2>
        <Button variant="outline">Voir Tout</Button>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}