import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { inr, type Product } from "@/lib/products";

export function ProductCard({ p, i = 0 }: { p: Product; i?: number }) {
  const { add } = useCart();
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08, duration: 0.45 }}
      className="group overflow-hidden rounded-md border bg-card shadow-soft"
    >
      <Link
        to="/product/$id"
        params={{ id: p.id }}
        className="relative block aspect-square overflow-hidden bg-cream"
      >
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          width={1024}
          height={1024}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-0 top-0 rounded-br-md bg-gold px-2.5 py-1.5 text-[10px] font-bold text-gold-foreground sm:text-xs">
          {Math.round((1 - p.price / p.mrp) * 100)}% OFF
        </span>
      </Link>
      <div className="p-3 sm:p-4">
        <Link to="/product/$id" params={{ id: p.id }}>
          <h3 className="min-h-10 font-sans text-sm font-semibold leading-tight sm:min-h-0 sm:text-lg">
            {p.name}
          </h3>
        </Link>
        <div className="mt-1 flex items-center gap-1 text-[10px] text-muted-foreground sm:text-xs">
          <Star className="h-3 w-3 fill-gold text-gold" /> {p.rating} · {p.size}
        </div>
        <div className="mt-2 flex items-baseline gap-1.5">
          <span className="text-base font-bold text-foreground sm:text-xl">{inr(p.price)}</span>
          <span className="text-xs text-muted-foreground line-through sm:text-sm">
            {inr(p.mrp)}
          </span>
        </div>
        <Button
          onClick={() => add(p.id)}
          className="mt-3 h-10 w-full rounded-md px-2 text-xs sm:text-sm"
        >
          <ShoppingCart /> Add to Cart
        </Button>
      </div>
    </motion.article>
  );
}
