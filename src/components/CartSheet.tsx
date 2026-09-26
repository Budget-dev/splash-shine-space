import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/lib/cart";
import { inr } from "@/lib/products";

export function CartSheet() {
  const { lines, total, open, setOpen, setQty, clear } = useCart();

  const checkout = () => {
    const msg = encodeURIComponent(
      `Hello Green8 Naturals, I'd like to order:\n${lines
        .map((l) => `• ${l.product.name} x${l.qty} = ${inr(l.qty * l.product.price)}`)
        .join("\n")}\nTotal: ${inr(total)}`,
    );
    window.open(`https://wa.me/918331851456?text=${msg}`, "_blank");
    toast.success("Order sent! We'll confirm on WhatsApp.");
    clear();
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="flex w-full flex-col bg-cream sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="font-display text-2xl">Your Cart</SheetTitle>
        </SheetHeader>
        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 text-muted-foreground">
            <ShoppingBag className="h-12 w-12" />
            Your cart is empty
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-3 overflow-y-auto px-4">
              {lines.map((l) => (
                <div key={l.id} className="flex gap-3 rounded-xl bg-card p-3 shadow-soft">
                  <img src={l.product.image} alt={l.product.name} className="h-20 w-20 rounded-lg object-cover" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-display text-lg">{l.product.name}</p>
                    <p className="text-sm text-muted-foreground">{inr(l.product.price)} · {l.product.size}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <button onClick={() => setQty(l.id, l.qty - 1)} className="rounded-full border p-1"><Minus className="h-3 w-3" /></button>
                      <span className="w-6 text-center text-sm">{l.qty}</span>
                      <button onClick={() => setQty(l.id, l.qty + 1)} className="rounded-full border p-1"><Plus className="h-3 w-3" /></button>
                      <button onClick={() => setQty(l.id, 0)} className="ml-auto text-muted-foreground hover:text-destructive"><Trash2 className="h-4 w-4" /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t p-4">
              <div className="mb-1 flex justify-between text-sm text-muted-foreground">
                <span>Shipping</span><span>{total >= 499 ? "Free" : inr(49)}</span>
              </div>
              <div className="mb-4 flex justify-between font-display text-xl">
                <span>Total</span><span>{inr(total + (total >= 499 ? 0 : 49))}</span>
              </div>
              <Button onClick={checkout} className="h-12 w-full rounded-full text-base">Checkout via WhatsApp</Button>
              <p className="mt-2 text-center text-xs text-muted-foreground">Cash on Delivery available</p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
