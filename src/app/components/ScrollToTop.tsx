"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ChevronUp } from "lucide-react";

const SHOW_AFTER_PX = 400;

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setVisible(v > SHOW_AFTER_PX);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 md:bottom-24 z-40 flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-primary text-white shadow-lg hover:bg-secondary hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 cta-lift"
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.8,
        pointerEvents: visible ? "auto" : "none",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      aria-label="Scroll to top"
    >
      <ChevronUp className="h-5 w-5" />
    </motion.button>
  );
}
