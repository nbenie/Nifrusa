import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { FeaturedProducts } from "@/components/sections/featured-products";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <HeroSection />
      <FeaturesSection />
      <FeaturedProducts />
    </div>
  );
}