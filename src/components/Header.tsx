import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Home, Info, Leaf, Menu, Phone, ShoppingBag, Store, Truck } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png.asset.json";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/lib/cart";

const nav = [
  { to: "/", label: "Home", icon: Home },
  { to: "/shop", label: "Shop", icon: Store },
  { to: "/about", label: "About", icon: Info },
  { to: "/contact", label: "Contact", icon: Phone },
] as const;

export function Header() {
  const { count, setOpen } = useCart();
  const [menu, setMenu] = useState(false);

  return (
    <header className="sticky top-0 z-40">
      <div className="bg-forest py-1.5 text-center text-[11px] tracking-wide text-primary-foreground sm:text-xs">
        <Truck className="mr-1.5 inline h-3.5 w-3.5 text-gold" />
        Free shipping above ₹499 · 100% Natural · COD available
      </div>
      <div className="border-b bg-background/85 backdrop-blur-xl">
        <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-2 md:grid-cols-[auto_1fr_auto]">
          <Sheet open={menu} onOpenChange={setMenu}>
            <SheetTrigger asChild>
              <button aria-label="Open menu" className="rounded-full p-2 hover:bg-secondary md:hidden">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[82vw] max-w-sm border-r-0 bg-cream p-0">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="bg-forest-gradient px-6 pb-6 pt-10">
                <div className="rounded-2xl bg-background p-3">
                  <img src={logo.url} alt="Green8 Naturals" className="mx-auto h-20" />
                </div>
              </div>
              <nav className="flex flex-col gap-1 p-4">
                {nav.map((n, i) => (
                  <motion.div key={n.to} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08 * i }}>
                    <Link
                      to={n.to}
                      onClick={() => setMenu(false)}
                      className="flex items-center gap-4 rounded-xl px-4 py-3.5 text-lg font-medium transition-colors hover:bg-secondary"
                      activeProps={{ className: "bg-primary text-primary-foreground hover:bg-primary" }}
                      activeOptions={{ exact: true }}
                    >
                      <n.icon className="h-5 w-5" /> {n.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mx-4 mt-4 rounded-2xl bg-secondary p-5">
                <Leaf className="h-6 w-6 text-leaf" />
                <p className="mt-2 font-display text-lg">Order on WhatsApp</p>
                <a href="https://wa.me/918331851456" className="mt-1 block text-sm text-muted-foreground">+91 83318 51456</a>
              </div>
            </SheetContent>
          </Sheet>

          <Link to="/" className="justify-self-center md:justify-self-start">
            <img src={logo.url} alt="Green8 Naturals" className="h-12 md:h-14" />
          </Link>

          <nav className="hidden items-center justify-center gap-8 md:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="relative py-1 text-sm font-medium text-foreground/80 hover:text-primary"
                activeProps={{ className: "text-primary after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:bg-gold" }}
                activeOptions={{ exact: true }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <button onClick={() => setOpen(true)} aria-label="Open cart" className="relative rounded-full p-2 hover:bg-secondary">
            <ShoppingBag className="h-6 w-6" />
            {count > 0 && (
              <motion.span
                key={count}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -right-0.5 -top-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-gold px-1 text-[10px] font-bold text-gold-foreground"
              >
                {count}
              </motion.span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
