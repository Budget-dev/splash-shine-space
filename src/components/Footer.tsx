import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const groups = [
  {
    title: "Shop",
    links: [
      { label: "Moringa Powder", to: "/product/$id", id: "moringa-powder" },
      { label: "Moringa Tea", to: "/product/$id", id: "moringa-tea" },
      { label: "Moringa Capsules", to: "/product/$id", id: "moringa-capsules" },
    ],
  },
  {
    title: "Help & Support",
    links: [
      { label: "Contact Us", to: "/contact" },
      { label: "Shipping", to: "/contact" },
      { label: "Returns", to: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Our Products", to: "/shop" },
    ],
  },
] as const;

function FooterLink({ link }: { link: (typeof groups)[number]["links"][number] }) {
  if (link.to === "/product/$id" && "id" in link)
    return (
      <Link to="/product/$id" params={{ id: link.id }}>
        {link.label}
      </Link>
    );
  return <Link to={link.to}>{link.label}</Link>;
}

export function Footer() {
  return (
    <footer className="bg-forest text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-12">
        <div className="mx-auto w-fit rounded-md bg-background p-3">
          <img
            src={logo.url}
            alt="Green8 Naturals"
            width={280}
            height={140}
            className="h-20 w-auto object-contain"
          />
        </div>
        <div className="mt-7 md:hidden">
          <Accordion type="multiple">
            {groups.map((group) => (
              <AccordionItem
                key={group.title}
                value={group.title}
                className="border-primary-foreground/20"
              >
                <AccordionTrigger className="text-base hover:no-underline">
                  {group.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-sm text-primary-foreground/70">
                    {group.links.map((link) => (
                      <li key={link.label}>
                        <FooterLink link={link} />
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
            <AccordionItem value="follow" className="border-primary-foreground/20">
              <AccordionTrigger className="text-base hover:no-underline">
                Follow Us
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com"
                    aria-label="Instagram"
                    className="grid h-10 w-10 place-items-center rounded-full bg-background text-primary"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://youtube.com"
                    aria-label="YouTube"
                    className="grid h-10 w-10 place-items-center rounded-full bg-background text-primary"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                  <a
                    href="https://facebook.com"
                    aria-label="Facebook"
                    className="grid h-10 w-10 place-items-center rounded-full bg-background text-primary"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="mt-10 hidden grid-cols-4 gap-8 md:grid">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="font-sans text-base font-semibold text-gold">{group.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink link={link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="font-sans text-base font-semibold text-gold">Follow Us</h3>
            <div className="mt-4 flex gap-3">
              <Instagram />
              <Youtube />
              <Facebook />
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-6 text-center text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Green8 Naturals. All rights reserved.</p>
          <p className="mt-2">
            Privacy Policy&nbsp;&nbsp; | &nbsp;&nbsp;Terms & Conditions&nbsp;&nbsp; |
            &nbsp;&nbsp;Shipping Policy
          </p>
        </div>
      </div>
    </footer>
  );
}
