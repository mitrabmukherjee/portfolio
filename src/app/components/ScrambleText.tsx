"use client";

import { useState, useEffect } from "react";

const CHARS = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

interface ScrambleTextProps {
  text: string;
  className?: string;
  as?: "span" | "h1" | "h2" | "p";
  scrambleDuration?: number;
  stepMs?: number;
  delay?: number;
  enabled?: boolean;
}

export default function ScrambleText({
  text,
  className = "",
  as: Tag = "span",
  scrambleDuration = 1400,
  stepMs = 50,
  delay = 0,
  enabled = true,
}: ScrambleTextProps) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (!enabled) return;
    const startTime = Date.now() + delay;
    const len = text.length;

    const id = setInterval(() => {
      const elapsed = Date.now() - startTime;
      if (elapsed < 0) return;
      const progress = Math.min(elapsed / scrambleDuration, 1);

      if (progress >= 1) {
        setDisplay(text);
        clearInterval(id);
        return;
      }

      const next = text
        .split("")
        .map((c, i) => {
          const charReveal = (i + 1) / len;
          if (progress >= charReveal * 0.95) return c;
          if (c === " ") return " ";
          return randomChar();
        })
        .join("");
      setDisplay(next);
    }, stepMs);

    const cleanup = setTimeout(() => setDisplay(text), delay + scrambleDuration + 100);
    return () => {
      clearInterval(id);
      clearTimeout(cleanup);
    };
  }, [enabled, text, delay, scrambleDuration, stepMs]);

  const lineClass = `${className} whitespace-nowrap`.trim();
  return <Tag className={lineClass}>{display}</Tag>;
}
