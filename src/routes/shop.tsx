import { createFileRoute } from "@tanstack/react-router";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop Moringa Products — Green8 Naturals" },
      { name: "description", content: "Buy lab-tested moringa powder, moringa tea and moringa capsules online." },
      { property: "og:title", content: "Shop Moringa Products — Green8 Naturals" },
      { property: "og:description", content: "Lab-tested moringa powder, tea and capsules." },
    ],
  }),
  component: Shop,
});

function Shop() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-12">
      <p className="font-script text-2xl text-gold">Pure & natural</p>
      <h1 className="text-4xl md:text-5xl">Shop</h1>
      <p className="mt-2 text-muted-foreground">Every product is our own, scientifically tested for purity.</p>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p, i) => <ProductCard key={p.id} p={p} i={i} />)}
      </div>
    </div>
  );
}
