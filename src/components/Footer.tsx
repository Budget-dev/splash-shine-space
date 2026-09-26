import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";

export function Footer() {
  return (
    <footer className="bg-forest text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="inline-block rounded-2xl bg-background p-3">
            <img src={logo.url} alt="Green8 Naturals" className="h-16" />
          </div>
          <p className="mt-4 max-w-sm text-sm text-primary-foreground/70">
            Bringing you the goodness of nature through pure, natural and lab-tested moringa products for a healthier, happier tomorrow.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-lg text-gold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/75">
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-lg text-gold">Contact</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/75">
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0" /> 8331851456 / 9848493098</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0" /> green8naturals@gmail.com</li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0" /> Visakhapatnam, Andhra Pradesh, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-5 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Green8 Naturals · Pure Nature · Infinite Wellness
      </div>
    </footer>
  );
}
