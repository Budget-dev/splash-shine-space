import { createFileRoute, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, FlaskConical, Minus, Plus, Star, Truck } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { useCart } from "@/lib/cart";
import { getProduct, inr, products } from "@/lib/products";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const p = getProduct(params.id);
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} — Green8 Naturals` },
          { name: "description", content: loaderData.description },
          { property: "og:title", content: `${loaderData.name} — Green8 Naturals` },
          { property: "og:description", content: loaderData.description },
        ]
      : [{ title: "Not found" }, { name: "robots", content: "noindex" }],
  }),
  notFoundComponent: () => <p className="p-20 text-center">Product not found.</p>,
  component: ProductPage,
});

function ProductPage() {
  const p = Route.useLoaderData();
  const { add } = useCart();
  const [qty, setQty] = useState(1);

  return (
    <div className="mx-auto max-w-7xl px-5 py-10">
      <div className="grid gap-10 md:grid-cols-2">
        <motion.img
          key={p.id}
          src={p.image}
          alt={p.name}
          width={1024}
          height={1024}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="aspect-square w-full rounded-3xl bg-cream object-cover shadow-soft"
        />
        <div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Star className="h-4 w-4 fill-gold text-gold" /> {p.rating} rating
          </div>
          <h1 className="mt-1 text-4xl md:text-5xl">{p.name}</h1>
          <p className="mt-1 text-muted-foreground">
            {p.tagline} · {p.size}
          </p>
          <div className="mt-4 flex items-baseline gap-3">
            <span className="font-display text-3xl text-primary">{inr(p.price)}</span>
            <span className="text-muted-foreground line-through">{inr(p.mrp)}</span>
          </div>
          <p className="mt-5 text-foreground/80">{p.description}</p>
          <ul className="mt-5 space-y-2">
            {p.benefits.map((b) => (
              <li key={b} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-leaf" /> {b}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex items-center gap-3">
            <div className="flex items-center rounded-full border">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-3">
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-8 text-center">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="p-3">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <Button onClick={() => add(p.id, qty)} className="h-12 flex-1 rounded-full text-base">
              Add to Cart
            </Button>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2 rounded-xl bg-secondary p-3">
              <FlaskConical className="h-4 w-4 text-primary" /> Lab tested
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-secondary p-3">
              <Truck className="h-4 w-4 text-primary" /> COD available
            </div>
          </div>
        </div>
      </div>
      <h2 className="mb-6 mt-16 text-3xl">You may also like</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {products
          .filter((x) => x.id !== p.id)
          .map((x, i) => (
            <ProductCard key={x.id} p={x} i={i} />
          ))}
      </div>
    </div>
  );
}
