import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { getProduct, type Product } from "./products";

type Line = { id: string; qty: number };
type Ctx = {
  lines: (Line & { product: Product })[];
  count: number;
  total: number;
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (id: string, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
};

const CartCtx = createContext<Ctx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [raw, setRaw] = useState<Line[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const s = localStorage.getItem("g8-cart");
      if (s) setRaw(JSON.parse(s));
    } catch {
      // Ignore localStorage parse errors
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("g8-cart", JSON.stringify(raw));
  }, [raw]);

  const lines = raw.flatMap((l) => {
    const product = getProduct(l.id);
    return product ? [{ ...l, product }] : [];
  });

  const setQty = (id: string, qty: number) =>
    setRaw((r) =>
      qty <= 0 ? r.filter((l) => l.id !== id) : r.map((l) => (l.id === id ? { ...l, qty } : l)),
    );

  const add = (id: string, qty = 1) => {
    setRaw((r) => {
      const ex = r.find((l) => l.id === id);
      return ex
        ? r.map((l) => (l.id === id ? { ...l, qty: l.qty + qty } : l))
        : [...r, { id, qty }];
    });
    setOpen(true);
  };

  return (
    <CartCtx.Provider
      value={{
        lines,
        count: lines.reduce((a, l) => a + l.qty, 0),
        total: lines.reduce((a, l) => a + l.qty * l.product.price, 0),
        open,
        setOpen,
        add,
        setQty,
        clear: () => setRaw([]),
      }}
    >
      {children}
    </CartCtx.Provider>
  );
}

export const useCart = () => {
  const c = useContext(CartCtx);
  if (!c) throw new Error("useCart outside provider");
  return c;
};
