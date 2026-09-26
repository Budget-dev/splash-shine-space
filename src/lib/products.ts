import powder from "@/assets/p-powder.jpg";
import tea from "@/assets/p-tea.jpg";
import caps from "@/assets/p-caps.jpg";

export type Product = {
  id: string;
  name: string;
  tagline: string;
  price: number;
  mrp: number;
  size: string;
  image: string;
  rating: number;
  benefits: string[];
  description: string;
};

export const products: Product[] = [
  {
    id: "moringa-powder",
    name: "Moringa Powder",
    tagline: "100% pure leaf powder",
    price: 349,
    mrp: 449,
    size: "100 g",
    image: powder,
    rating: 4.8,
    benefits: ["Rich in nutrients", "Boosts immunity", "Energy booster"],
    description:
      "Shade-dried moringa leaves, gently milled into a fine vibrant powder. Our own lab-tested product — no additives, no preservatives. Mix a teaspoon into smoothies, juice or warm water.",
  },
  {
    id: "moringa-tea",
    name: "Moringa Leaf Tea",
    tagline: "Caffeine-free herbal tea",
    price: 299,
    mrp: 399,
    size: "50 g",
    image: tea,
    rating: 4.7,
    benefits: ["Detox & cleanse", "Caffeine free", "Calming ritual"],
    description:
      "Hand-picked moringa leaves, carefully dried to keep their natural goodness. Brews a light, earthy cup — perfect for mornings or winding down. Lab tested for purity.",
  },
  {
    id: "moringa-capsules",
    name: "Moringa Capsules",
    tagline: "Daily wellness, on the go",
    price: 499,
    mrp: 649,
    size: "120 capsules",
    image: caps,
    rating: 4.9,
    benefits: ["Plant based", "Easy daily dose", "Rich in nutrients"],
    description:
      "Pure moringa leaf powder in plant-based capsules for an effortless daily routine. Our own scientifically tested formulation, made in small batches.",
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
export const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;
