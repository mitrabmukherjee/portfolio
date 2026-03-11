"use client";

import { motion } from "framer-motion";

const DIRECTIONS = [
  { x: 0, y: -120, rotateX: -45, rotateY: 0, rotateZ: 0 },
  { x: 0, y: 120, rotateX: 45, rotateY: 0, rotateZ: 0 },
  { x: -120, y: 0, rotateX: 0, rotateY: 45, rotateZ: 0 },
  { x: 120, y: 0, rotateX: 0, rotateY: -45, rotateZ: 0 },
  { x: -100, y: -100, rotateX: -35, rotateY: -35, rotateZ: 25 },
  { x: 100, y: 100, rotateX: 35, rotateY: 35, rotateZ: -25 },
];

function getCardVariants(index: number) {
  const dir = DIRECTIONS[index % DIRECTIONS.length];
  return {
    hidden: {
      x: dir.x,
      y: dir.y,
      rotateX: dir.rotateX,
      rotateY: dir.rotateY,
      rotateZ: dir.rotateZ,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.9,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0,
    },
  },
};

interface FlyInCardsProps {
  children: React.ReactNode;
  className?: string;
}

export default function FlyInCards({ children, className = "" }: FlyInCardsProps) {
  const childArray = Array.isArray(children) ? children : [children];
  return (
    <motion.div
      className={className}
      style={{ perspective: "1200px" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px", amount: 0.2 }}
      variants={containerVariants}
    >
      {childArray.map((child, index) => (
        <motion.div
          key={index}
          variants={getCardVariants(index)}
          style={{ transformOrigin: "50% 50%", transformStyle: "preserve-3d" }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
