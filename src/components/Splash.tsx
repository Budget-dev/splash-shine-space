import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png.asset.json";

export function Splash() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setShow(false);
    }, 2400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream"
          exit={{ opacity: 0, scale: 1.08, filter: "blur(8px)" }}
          transition={{ duration: 0.7, ease: [0.7, 0, 0.3, 1] }}
        >
          <motion.div
            className="absolute h-[70vmin] w-[70vmin] rounded-full bg-accent/60 blur-3xl"
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4 }}
          />
          <div className="relative">
            <svg
              viewBox="0 0 200 200"
              className="absolute -inset-10 h-[calc(100%+5rem)] w-[calc(100%+5rem)]"
            >
              <motion.circle
                cx="100"
                cy="100"
                r="92"
                fill="none"
                stroke="var(--gold)"
                strokeWidth="1.5"
                initial={{ pathLength: 0, rotate: -90 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
              />
            </svg>
            <motion.img
              src={logo.url}
              alt="Green8 Naturals"
              className="relative w-[68vw] max-w-sm"
              initial={{ opacity: 0, scale: 0.7, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            />
          </div>
          <motion.div
            className="relative mt-10 h-0.5 w-40 overflow-hidden rounded-full bg-border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div
              className="h-full bg-gold-gradient"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.9, duration: 1.7, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
