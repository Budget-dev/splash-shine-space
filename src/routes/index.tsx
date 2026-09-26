import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, FlaskConical, HeartPulse, Leaf, ShieldCheck, Sparkles, Truck, Zap } from "lucide-react";
import hero from "@/assets/hero.jpg";
import farmer from "@/assets/farmer.jpg";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Green8 Naturals — Pure Moringa, Lab Tested" },
      { name: "description", content: "Shop our own scientifically tested moringa powder, tea and capsules. Free shipping above ₹499, COD available." },
      { property: "og:title", content: "Green8 Naturals — Pure Moringa, Lab Tested" },
      { property: "og:description", content: "Our own scientifically tested moringa products. Pure Nature, Infinite Wellness." },
    ],
  }),
  component: Index,
});

const words = ["Pure", "Nature.", "Infinite", "Wellness."];

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <motion.img
        src={hero}
        alt="Moringa powder and moringa tea"
        width={1920}
        height={1024}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[70%_center]"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: "easeOut" }}
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-forest via-forest/60 to-forest/10 md:bg-linear-to-r md:from-background md:via-background/80 md:to-transparent" />

      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute text-leaf/70"
          style={{ left: `${15 + i * 22}%`, top: -40 }}
          animate={{ y: ["0vh", "110vh"], rotate: [0, 360], x: [0, 30, -20, 0] }}
          transition={{ duration: 9 + i * 2, repeat: Infinity, delay: i * 1.8, ease: "linear" }}
        >
          <Leaf className="h-5 w-5" />
        </motion.div>
      ))}

      <div className="mx-auto flex min-h-[88svh] max-w-7xl flex-col justify-end px-5 pb-12 pt-24 md:min-h-[640px] md:justify-center md:pb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-background/90 px-3 py-1.5 text-xs font-medium text-primary shadow-soft"
        >
          <FlaskConical className="h-3.5 w-3.5 text-gold" /> Our own scientifically tested products
        </motion.span>
        <h1 className="max-w-2xl text-5xl font-bold leading-[1.02] text-primary-foreground sm:text-6xl md:text-7xl md:text-foreground">
          {words.map((w, i) => (
            <motion.span
              key={w}
              className={`mr-3 inline-block ${i % 2 === 1 ? "text-gold-gradient" : ""}`}
              initial={{ opacity: 0, y: 40, rotateX: -60 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            >
              {w}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-4 max-w-md text-base text-primary-foreground/85 md:text-lg md:text-muted-foreground"
        >
          Farm-fresh moringa powder, tea and capsules — lab tested, no additives, delivered across India.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mt-7 flex flex-col gap-3 sm:flex-row"
        >
          <Link to="/shop" className="shimmer group relative inline-flex h-14 items-center justify-center gap-2 rounded-full bg-gold-gradient px-8 text-base font-semibold text-gold-foreground shadow-gold">
            <motion.span
              className="absolute inset-0 rounded-full border-2 border-gold"
              animate={{ scale: [1, 1.12], opacity: [0.8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            />
            Shop Now <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <a href="https://wa.me/918331851456" className="inline-flex h-14 items-center justify-center rounded-full border border-primary-foreground/40 bg-background/10 px-8 text-base font-medium text-primary-foreground backdrop-blur md:border-primary md:text-primary">
            Order on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}

const badges = [
  { icon: Leaf, label: "100% Natural" },
  { icon: FlaskConical, label: "Lab Tested" },
  { icon: ShieldCheck, label: "Boosts Immunity" },
  { icon: Zap, label: "Energy Booster" },
  { icon: HeartPulse, label: "Detox & Cleanse" },
  { icon: Truck, label: "PAN India Delivery" },
];

function Index() {
  return (
    <>
      <Hero />

      <section className="overflow-hidden border-y bg-cream py-5">
        <motion.div
          className="flex w-max gap-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {[...badges, ...badges].map((b, i) => (
            <div key={i} className="flex items-center gap-3 whitespace-nowrap">
              <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-primary text-primary"><b.icon className="h-5 w-5" /></span>
              <span className="font-medium">{b.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="font-script text-2xl text-gold">Bestsellers</p>
            <h2 className="text-3xl md:text-4xl">Our Moringa Range</h2>
          </div>
          <Link to="/shop" className="hidden items-center gap-1 text-sm font-medium text-primary sm:flex">View all <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => <ProductCard key={p.id} p={p} i={i} />)}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 md:grid-cols-2">
        <motion.img
          src={farmer}
          alt="Farmer harvesting moringa"
          loading="lazy"
          width={1280}
          height={960}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft"
        />
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="font-script text-2xl text-gold">From farm to home</p>
          <h2 className="text-3xl md:text-4xl">Grown with care, tested with science</h2>
          <p className="mt-4 text-muted-foreground">
            We source moringa from trusted local farms, process it hygienically to preserve nutrients, and test every batch in the lab for purity and safety — so every product you receive is genuinely ours and genuinely pure.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            {[["10K+", "Happy customers"], ["100%", "Natural"], ["3+", "Years of trust"]].map(([n, l]) => (
              <div key={l} className="rounded-2xl bg-secondary p-4">
                <p className="font-display text-2xl text-primary">{n}</p>
                <p className="text-xs text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>
          <Link to="/about" className="mt-6 inline-flex items-center gap-2 font-medium text-primary">Our story <ArrowRight className="h-4 w-4" /></Link>
        </motion.div>
      </section>

      <section className="px-5 pb-16">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-forest-gradient px-6 py-12 text-center text-primary-foreground md:py-16">
          <Sparkles className="mx-auto h-8 w-8 text-gold" />
          <h2 className="mt-3 text-3xl md:text-4xl">Healthy Today, <span className="text-gold-gradient">Better Tomorrow</span></h2>
          <p className="mx-auto mt-3 max-w-md text-primary-foreground/75">Call or WhatsApp us to order: 8331851456 · 9848493098</p>
          <Link to="/shop" className="shimmer mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-gold-gradient px-8 font-semibold text-gold-foreground">Start Shopping <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </>
  );
}
