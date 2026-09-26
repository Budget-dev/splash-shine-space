import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Green8 Naturals" },
      {
        name: "description",
        content: "Call, email or WhatsApp Green8 Naturals in Visakhapatnam for orders and support.",
      },
      { property: "og:title", content: "Contact Green8 Naturals" },
      {
        property: "og:description",
        content: "We're here to help on your journey to a healthier life.",
      },
    ],
  }),
  component: Contact,
});

const cards = [
  { icon: Phone, t: "Call Us", d: "8331851456 · 9848493098", s: "Mon–Sat, 9 AM – 7 PM" },
  { icon: Mail, t: "Email Us", d: "green8naturals@gmail.com", s: "Reply within 24 hours" },
  { icon: MapPin, t: "Our Location", d: "Visakhapatnam, Andhra Pradesh", s: "India" },
  { icon: MessageCircle, t: "WhatsApp", d: "Chat with us", s: "Quick replies" },
];

const faqs: [string, string][] = [
  [
    "How can I place an order?",
    "Add products to your cart and tap Checkout — your order is sent to us on WhatsApp for confirmation.",
  ],
  ["Do you offer Cash on Delivery?", "Yes, COD is available across India."],
  ["How long does delivery take?", "Usually 3–7 working days depending on your location."],
  [
    "Are your products tested?",
    "Yes. Every product is our own and every batch is lab tested for purity and safety.",
  ],
];

function Contact() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-12">
      <h1 className="text-5xl md:text-6xl">
        Contact <span className="text-gold-gradient">Us</span>
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        We are here to help on your journey towards a healthier, greener life.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c, i) => (
          <motion.div
            key={c.t}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="flex gap-4 rounded-2xl border bg-card p-5 shadow-soft"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
              <c.icon className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="font-display text-lg">{c.t}</p>
              <p className="break-words text-sm font-medium">{c.d}</p>
              <p className="text-xs text-muted-foreground">{c.s}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            toast.success("Thanks! We'll get back to you soon.");
            e.currentTarget.reset();
          }}
          className="space-y-4 rounded-3xl border bg-card p-6 shadow-soft md:p-8"
        >
          <h2 className="text-3xl">Send Us a Message</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Input required placeholder="Your name" />
            <Input required type="email" placeholder="Email address" />
          </div>
          <Input placeholder="Phone number" />
          <Textarea required rows={5} placeholder="Write your message here..." />
          <Button type="submit" className="h-12 w-full rounded-full text-base">
            Send Message
          </Button>
        </form>
        <div className="space-y-4">
          <div className="overflow-hidden rounded-3xl border shadow-soft">
            <iframe
              title="Map"
              src="https://www.google.com/maps?q=Visakhapatnam&output=embed"
              className="h-72 w-full"
              loading="lazy"
            />
          </div>
          <div className="flex gap-3 rounded-2xl bg-secondary p-5">
            <Clock className="h-5 w-5 text-primary" />
            <div className="text-sm">
              <p className="font-display text-lg">Business Hours</p>Mon – Sat: 9:00 AM – 7:00 PM ·
              Sunday closed
            </div>
          </div>
        </div>
      </div>

      <h2 className="mb-4 mt-14 text-3xl">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="rounded-2xl border bg-card px-5">
        {faqs.map(([q, a]) => (
          <AccordionItem key={q} value={q}>
            <AccordionTrigger className="text-left">{q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
