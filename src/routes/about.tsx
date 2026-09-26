import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Eye, FlaskConical, Leaf, Package, Sprout, Target, Truck } from "lucide-react";
import hero from "@/assets/hero.jpg";
import farmer from "@/assets/farmer.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Green8 Naturals" },
      { name: "description", content: "Our story, mission and farm-to-home process for pure, lab-tested moringa." },
      { property: "og:title", content: "About Green8 Naturals" },
      { property: "og:description", content: "Pure Nature. Infinite Wellness. A Greener Tomorrow." },
    ],
  }),
  component: About,
});

const steps = [
  { icon: Sprout, t: "Sourcing", d: "Naturally grown moringa from trusted farms" },
  { icon: Leaf, t: "Careful Processing", d: "Hygienic, nutrient-preserving methods" },
  { icon: FlaskConical, t: "Quality Testing", d: "Lab tested for purity and safety" },
  { icon: Package, t: "Packaging", d: "Eco-friendly, hygienic packaging" },
  { icon: Truck, t: "Delivery", d: "Straight to your doorstep across India" },
];

function About() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img src={hero} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-right" />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-background via-background/85 to-background/20" />
        <div className="mx-auto max-w-7xl px-5 py-20 md:py-28">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl">
            About <br /><span className="text-primary">Green</span><span className="text-gold-gradient">8</span> <span className="text-primary">Naturals</span>
          </motion.h1>
          <p className="mt-4 max-w-lg text-lg text-muted-foreground">
            Pure Nature. Infinite Wellness. A Greener Tomorrow. We bring the incredible benefits of moringa to every home.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-14 md:grid-cols-2">
        {[
          { icon: Target, t: "Our Mission", d: "To make natural and healthy living accessible with pure, high-quality moringa products." },
          { icon: Eye, t: "Our Vision", d: "To be a trusted brand in natural wellness, known for quality and sustainability." },
        ].map((c, i) => (
          <motion.div key={c.t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-3xl border bg-card p-8 shadow-soft">
            <c.icon className="h-10 w-10 text-primary" />
            <h2 className="mt-4 text-2xl">{c.t}</h2>
            <p className="mt-2 text-muted-foreground">{c.d}</p>
          </motion.div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-14">
        <h2 className="text-3xl md:text-4xl">From Farm to Your Home</h2>
        <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-5">
          {steps.map((s, i) => (
            <motion.div key={s.t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border-2 border-primary text-primary"><s.icon className="h-7 w-7" /></div>
              <p className="mt-3 font-display text-lg">{i + 1}. {s.t}</p>
              <p className="text-sm text-muted-foreground">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        <img src={farmer} alt="Farmer with moringa" loading="lazy" className="h-72 w-full object-cover md:h-full" />
        <div className="bg-forest px-8 py-14 text-primary-foreground">
          <h2 className="text-3xl">Sustainable & Responsible</h2>
          <p className="mt-4 text-primary-foreground/75">
            We support local farmers, use eco-friendly practices, and never add artificial additives or preservatives. Every purchase helps create a greener, healthier planet.
          </p>
        </div>
      </section>
    </>
  );
}
