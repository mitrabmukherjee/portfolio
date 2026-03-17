"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const TILT_MAX_DEFAULT = 8;
const TILT_PERSPECTIVE = 1000;

/** Softer curve: less tilt near center so buttons stay clickable */
function easeTilt(norm: number) {
  return norm * Math.abs(norm);
}

export default function TiltCard({
  children,
  className,
  maxTilt = TILT_MAX_DEFAULT,
}: {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}) {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [frozen, setFrozen] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(y, { stiffness: 180, damping: 25 });
  const rotateY = useSpring(x, { stiffness: 180, damping: 25 });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const handler = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reduceMotion || frozen) return;
      const el = e.currentTarget;
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const normX = (e.clientX - centerX) / (rect.width / 2);
      const normY = (e.clientY - centerY) / (rect.height / 2);
      x.set(easeTilt(normX) * maxTilt);
      y.set(-easeTilt(normY) * maxTilt);
    },
    [reduceMotion, frozen, maxTilt, x, y]
  );

  const onMouseLeave = useCallback(() => {
    if (!frozen) {
      x.set(0);
      y.set(0);
    }
  }, [frozen, x, y]);

  const onMouseDown = useCallback(() => setFrozen(true), []);
  const onMouseUp = useCallback(() => setFrozen(false), []);

  useEffect(() => {
    const onGlobalMouseUp = () => setFrozen(false);
    window.addEventListener("mouseup", onGlobalMouseUp);
    return () => window.removeEventListener("mouseup", onGlobalMouseUp);
  }, []);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      style={{
        rotateX,
        rotateY,
        transformPerspective: TILT_PERSPECTIVE,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </motion.div>
  );
}
