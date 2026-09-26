import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Plus, Star } from "lucide-react";
import { useCart } from "@/lib/cart";
import { inr, type Product } from "@/lib/products";

export function ProductCard({ p, i = 0 }: { p: Product; i?: number }) {
  const { add } = useCart();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1, duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-2xl border bg-card shadow-soft"
    >
      <Link to="/product/$id" params={{ id: p.id }} className="relative block aspect-square overflow-hidden bg-cream">
        <img src={p.image} alt={p.name} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <span className="absolute left-3 top-3 rounded-full bg-gold px-2.5 py-1 text-xs font-semibold text-gold-foreground">
          {Math.round((1 - p.price / p.mrp) * 100)}% OFF
        </span>
      </Link>
      <div className="p-4">
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Star className="h-3.5 w-3.5 fill-gold text-gold" /> {p.rating} · {p.size}
        </div>
        <Link to="/product/$id" params={{ id: p.id }}>
          <h3 className="mt-1 text-xl">{p.name}</h3>
        </Link>
        <p className="text-sm text-muted-foreground">{p.tagline}</p>
        <div className="mt-3 flex items-center justify-between">
          <div>
            <span className="font-display text-xl text-primary">{inr(p.price)}</span>
            <span className="ml-2 text-sm text-muted-foreground line-through">{inr(p.mrp)}</span>
          </div>
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={() => add(p.id)}
            aria-label={`Add ${p.name} to cart`}
            className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground"
          >
            <Plus className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
