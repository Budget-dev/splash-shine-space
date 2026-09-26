import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ChevronRight, Home, Info, Menu, Phone, Search, ShoppingCart, Store, UserRound } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png.asset.json";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/lib/cart";

const nav = [{ to: "/", label: "Home", icon: Home }, { to: "/shop", label: "Shop", icon: Store }, { to: "/about", label: "About Us", icon: Info }, { to: "/contact", label: "Contact", icon: Phone }] as const;

export function Header() {
  const { count, setOpen } = useCart();
  const [menu, setMenu] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-background">
      <div className="bg-forest text-primary-foreground"><div className="mx-auto grid h-9 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 text-xs"><span className="truncate">🍃 Free Shipping on all orders above ₹499</span><ChevronRight className="h-4 w-4 shrink-0" /></div></div>
      <div className="border-b bg-background/95 backdrop-blur-xl">
        <div className="mx-auto grid h-[70px] max-w-7xl grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 px-3 sm:px-4">
          <Sheet open={menu} onOpenChange={setMenu}>
            <SheetTrigger asChild><Button variant="ghost" size="icon" aria-label="Open menu" className="shrink-0 rounded-full md:hidden"><Menu className="h-6 w-6" /></Button></SheetTrigger>
            <SheetContent side="left" className="w-[82vw] max-w-sm border-r-0 bg-cream p-0"><SheetTitle className="sr-only">Menu</SheetTitle><div className="bg-forest p-7"><div className="rounded-md bg-background p-3"><img src={logo.url} alt="Green8 Naturals" width={280} height={140} className="mx-auto h-20 w-auto object-contain" /></div></div><nav className="flex flex-col gap-1 p-4">{nav.map((n, i) => <motion.div key={n.to} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.06 * i }}><Link to={n.to} onClick={() => setMenu(false)} className="flex items-center gap-4 rounded-md px-4 py-3.5 font-medium hover:bg-secondary" activeProps={{ className: "bg-primary text-primary-foreground" }} activeOptions={{ exact: true }}><n.icon className="h-5 w-5" /> {n.label}</Link></motion.div>)}</nav></SheetContent>
          </Sheet>
          <Link to="/" className="min-w-0 justify-self-center md:justify-self-start"><img src={logo.url} alt="Green8 Naturals" width={280} height={140} className="h-[52px] w-auto max-w-[150px] object-contain sm:max-w-[185px]" /></Link>
          <nav className="hidden items-center justify-center gap-8 md:flex">{nav.map((n) => <Link key={n.to} to={n.to} className="text-sm font-medium hover:text-primary" activeProps={{ className: "text-primary" }} activeOptions={{ exact: true }}>{n.label}</Link>)}</nav>
          <div className="flex shrink-0 items-center">
            <Button variant="ghost" size="icon" aria-label="Search" className="hidden rounded-full sm:inline-flex"><Search /></Button>
            <Button variant="ghost" size="icon" aria-label="Account" className="hidden rounded-full sm:inline-flex"><UserRound /></Button>
            <Button onClick={() => setOpen(true)} variant="ghost" size="icon" aria-label="Open cart" className="relative rounded-full"><ShoppingCart className="h-5 w-5" />{count > 0 && <motion.span key={count} initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute right-0 top-0 grid h-4 min-w-4 place-items-center rounded-full bg-gold px-1 text-[9px] font-bold text-gold-foreground">{count}</motion.span>}</Button>
          </div>
        </div>
      </div>
    </header>
  );
}