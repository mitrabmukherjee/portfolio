"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-40 origin-left pointer-events-none h-0.5 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.4 }}
    >
      <motion.div
        className="h-full bg-secondary shadow-[0_0_10px_var(--secondary)]"
        style={{ scaleX: scrollYProgress }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      />
    </motion.div>
  );
}

