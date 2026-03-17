"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function PageTransitionBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const isFirstMount = useRef(true);

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    setVisible(true);
    const timer = setTimeout(() => setVisible(false), 400);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[9998] h-0.5 bg-secondary origin-left"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{
        duration: 0.35,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      style={{ transformOrigin: "left" }}
    />
  );
}
