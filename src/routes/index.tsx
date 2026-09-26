import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  FlaskConical,
  Headphones,
  Heart,
  Leaf,
  Mail,
  PackageCheck,
  RotateCcw,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Sprout,
  Truck,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import powder from "@/assets/p-powder.jpg";
import tea from "@/assets/p-tea.jpg";
import caps from "@/assets/p-caps.jpg";
import leaves from "@/assets/moringa-leaves.jpg";
import teaLifestyle from "@/assets/lifestyle-tea.jpg";
import yogaLifestyle from "@/assets/lifestyle-yoga.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Green8 Naturals — Pure Moringa Wellness" },
      { name: "description", content: "Shop Green8 Naturals moringa powder, herbal tea and capsules, made for everyday natural wellness." },
      { property: "og:title", content: "Green8 Naturals — Pure Moringa Wellness" },
      { property: "og:description", content: "Pure, carefully tested moringa products for everyday wellness." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};

const categories = [
  { name: "Moringa Powder", image: powder, to: "/product/moringa-powder" },
  { name: "Moringa Tea", image: tea, to: "/product/moringa-tea" },
  { name: "Daily Wellness", image: caps, to: "/product/moringa-capsules" },
] as const;

function Hero() {
  return (
    <section className="relative isolate min-h-[660px] overflow-hidden md:min-h-[700px]">
      <motion.img
        src={hero}
        alt="Green8 Naturals moringa powder and tea surrounded by fresh moringa leaves"
        width={1920}
        height={1024}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[67%_center]"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-background/90 via-background/60 to-transparent md:bg-linear-to-r md:from-background md:via-background/75 md:to-transparent" />
      <div className="mx-auto flex min-h-[660px] max-w-7xl flex-col px-5 pb-8 pt-14 md:min-h-[700px] md:justify-center md:pb-16 md:pt-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="max-w-xl">
          <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <Leaf className="h-4 w-4 fill-leaf text-leaf" /> Pure nature
          </p>
          <h1 className="text-[3.2rem] leading-[0.97] text-foreground sm:text-6xl md:text-7xl">
            Infinite <span className="text-gold-gradient">Wellness.</span>
          </h1>
          <p className="mt-4 max-w-sm text-base leading-relaxed text-foreground/80 md:text-lg">
            Discover the goodness of moringa and nature’s finest herbs for a healthier, happier you.
          </p>
          <div className="mt-6 grid max-w-sm grid-cols-2 gap-3">
            <Button asChild className="h-12 rounded-md px-4 text-sm shadow-soft">
              <Link to="/shop">Shop Moringa <ArrowRight /></Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-md border-primary bg-background/75 px-4 text-sm text-primary backdrop-blur">
              <Link to="/about">Explore Wellness</Link>
            </Button>
          </div>
          <div className="mt-6 grid max-w-md grid-cols-3 gap-2 text-center text-[11px] font-medium sm:text-xs">
            {[
              [Leaf, "100% Natural"],
              [FlaskConical, "Lab Tested"],
              [ShieldCheck, "Secure Checkout"],
            ].map(([Icon, label]) => (
              <div key={label as string} className="flex flex-col items-center gap-1.5 sm:flex-row sm:text-left">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-primary bg-background/80 text-primary"><Icon className="h-5 w-5" /></span>
                <span>{label as string}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex justify-center gap-1.5 pb-3">
        <span className="h-2 w-2 rounded-full bg-primary" /><span className="h-2 w-2 rounded-full bg-background/70" /><span className="h-2 w-2 rounded-full bg-background/70" />
      </div>
    </section>
  );
}

function SectionTitle({ children, link = "/shop" }: { children: string; link?: "/shop" | "/about" }) {
  return (
    <div className="mb-5 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
      <h2 className="min-w-0 text-2xl sm:text-3xl">{children}</h2>
      <Link to={link} className="flex shrink-0 items-center gap-1 text-xs font-semibold text-primary sm:text-sm">View all <ArrowRight className="h-3.5 w-3.5" /></Link>
    </div>
  );
}

function Index() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-5 md:py-16">
        <SectionTitle>Shop by Category</SectionTitle>
        <div className="grid grid-cols-3 gap-2.5 sm:gap-5">
          {categories.map((category, i) => (
            <motion.div key={category.name} {...reveal} transition={{ duration: 0.5, delay: i * 0.08 }}>
              <Link to={category.to} className="group block overflow-hidden rounded-md border bg-card shadow-soft">
                <div className="aspect-[1/0.88] overflow-hidden bg-cream">
                  <img src={category.image} alt={category.name} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="grid min-h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-1 px-2.5 py-2">
                  <span className="min-w-0 text-xs font-semibold leading-tight sm:text-base">{category.name}</span>
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-primary" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-5 md:pb-16">
        <SectionTitle>Shop Bestsellers</SectionTitle>
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
          {products.map((p, i) => <ProductCard key={p.id} p={p} i={i} />)}
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-forest py-12 text-primary-foreground md:py-20">
        <img src={leaves} alt="Fresh moringa leaves" loading="lazy" width={1536} height={1024} className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-60" />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-forest via-forest/90 to-forest/20" />
        <motion.div {...reveal} className="mx-auto max-w-7xl px-6">
          <h2 className="max-w-xs text-4xl leading-none">The Power<br />of Moringa</h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/85 sm:text-base">A natural source of essential nutrients and plant compounds, moringa supports your everyday wellness journey.</p>
          <Button asChild variant="secondary" className="mt-6 h-11 rounded-md bg-background px-5 text-primary">
            <Link to="/about">Learn More <ArrowRight /></Link>
          </Button>
          <div className="mt-9 grid max-w-lg grid-cols-4 gap-2">
            {[[Sprout, "Rich in Nutrients"], [Leaf, "Natural Ingredients"], [Sparkles, "Daily Wellness"], [Heart, "Detox & Cleanse"]].map(([Icon, label]) => (
              <div key={label as string} className="text-center text-[10px] leading-tight sm:text-xs">
                <span className="mx-auto mb-2 grid h-11 w-11 place-items-center rounded-full bg-background text-primary"><Icon className="h-5 w-5" /></span>
                {label as string}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="bg-cream px-4 py-12 sm:px-5 md:py-20">
        <motion.div {...reveal} className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl">Why Green8 Naturals</h2>
          <p className="mt-1 text-sm text-muted-foreground">Pure ingredients. Trusted quality. A healthier tomorrow.</p>
          <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-7 md:grid-cols-4">
            {[
              [Leaf, "Responsibly Sourced", "Selected from trusted farms"],
              [Award, "Premium Quality", "Carefully processed for nutrition"],
              [Sprout, "Fresh & Natural", "No artificial additives"],
              [CheckCircle2, "Transparent Ingredients", "What you see is what you get"],
            ].map(([Icon, title, copy]) => (
              <div key={title as string} className="flex gap-3 text-left md:flex-col md:items-center md:text-center">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold text-gold"><Icon className="h-5 w-5" /></span>
                <div><h3 className="font-sans text-sm font-semibold">{title as string}</h3><p className="mt-1 text-xs leading-relaxed text-muted-foreground">{copy as string}</p></div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-5 md:py-20">
        <div className="text-center"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Real people. Real wellness.</p><h2 className="mt-1 text-3xl">Our Natural Lifestyle</h2><p className="text-sm text-muted-foreground">Bring wellness into your everyday.</p></div>
        <div className="mt-7 grid grid-cols-2 gap-2.5 md:grid-cols-4">
          <img src={teaLifestyle} alt="Woman enjoying moringa tea" loading="lazy" width={1024} height={1280} className="aspect-[4/5] w-full rounded-md object-cover" />
          <img src={powder} alt="Green8 Naturals moringa powder" loading="lazy" width={1024} height={1024} className="aspect-[4/5] w-full rounded-md object-cover" />
          <img src={yogaLifestyle} alt="Woman meditating at sunrise" loading="lazy" width={1024} height={1280} className="aspect-[4/5] w-full rounded-md object-cover" />
          <img src={tea} alt="Green8 Naturals moringa tea" loading="lazy" width={1024} height={1024} className="aspect-[4/5] w-full rounded-md object-cover" />
        </div>
      </section>

      <section className="bg-cream px-4 py-12 sm:px-5 md:py-20">
        <motion.div {...reveal} className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl">What Our Customers Say</h2>
          <div className="mt-6 rounded-md border bg-card p-6 text-left shadow-soft sm:p-8">
            <div className="flex items-center gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-secondary text-xl font-semibold text-primary">PS</div>
              <div className="min-w-0"><div className="text-gold">★★★★★</div><p className="font-semibold">Priya S.</p><p className="text-xs text-muted-foreground">Hyderabad</p></div>
            </div>
            <p className="mt-5 text-base leading-relaxed text-foreground/80">“The moringa powder quality is excellent. I feel more energetic and focused throughout the day.”</p>
          </div>
          <div className="mt-4 flex justify-center gap-1.5"><span className="h-2 w-2 rounded-full bg-primary" /><span className="h-2 w-2 rounded-full bg-border" /><span className="h-2 w-2 rounded-full bg-border" /></div>
        </motion.div>
      </section>

      <section className="relative isolate min-h-[320px] overflow-hidden py-12 text-primary-foreground md:min-h-[400px] md:py-20">
        <img src={hero} alt="A fresh cup of moringa tea" loading="lazy" width={1920} height={1024} className="absolute inset-0 -z-20 h-full w-full object-cover object-[72%_center]" />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-forest via-forest/90 to-transparent" />
        <div className="mx-auto max-w-7xl px-6"><h2 className="max-w-xs text-4xl leading-none">Natural Goodness for a Healthier You</h2><Button asChild variant="secondary" className="mt-7 h-11 rounded-md bg-background px-5 text-primary"><Link to="/shop">Shop Now <ArrowRight /></Link></Button></div>
      </section>

      <section className="bg-primary px-5 py-10 text-primary-foreground">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-sans text-lg font-medium">Subscribe for exclusive offers, wellness tips and new product launches.</h2>
          <form className="mt-5 flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <label className="relative flex-1"><Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><span className="sr-only">Email address</span><Input type="email" placeholder="Enter your email address" className="h-12 rounded-md bg-background pl-10 text-foreground" /></label>
            <Button type="submit" variant="outline" className="h-12 rounded-md border-primary-foreground/50 bg-primary text-primary-foreground sm:px-8">Subscribe <ArrowRight /></Button>
          </form>
        </div>
      </section>

      <section className="bg-background px-4 py-9 sm:px-5">
        <div className="mx-auto grid max-w-3xl grid-cols-4 gap-2 text-center text-[10px] font-semibold sm:text-sm">
          {[[Truck, "Free Shipping"], [ShieldCheck, "Secure Payments"], [Headphones, "Easy Support"], [RotateCcw, "Easy Returns"]].map(([Icon, label]) => (
            <div key={label as string} className="flex flex-col items-center gap-2"><Icon className="h-7 w-7 text-primary" /><span>{label as string}</span></div>
          ))}
        </div>
      </section>
    </>
  );
}