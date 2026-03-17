"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface TypewriterTextProps {
  text: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: "p" | "span" | "div";
  showCursor?: boolean;
  cursorChar?: string;
  /** Skip animation and show text instantly */
  instant?: boolean;
}

export default function TypewriterText({
  text,
  className = "",
  duration = 3,
  delay = 0,
  as: Tag = "p",
  showCursor = true,
  cursorChar = "|",
  instant = false,
}: TypewriterTextProps) {
  const [display, setDisplay] = useState(instant ? text : "");
  const [done, setDone] = useState(instant);
  const reduceMotion = useReducedMotion();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (reduceMotion || instant) {
      setDisplay(text);
      setDone(true);
      return;
    }

    const startAfter = setTimeout(() => {
      const len = text.length;
      if (len === 0) {
        setDone(true);
        return;
      }
      const stepMs = Math.max(20, (duration * 1000) / len);
      let i = 0;

      intervalRef.current = setInterval(() => {
        i += 1;
        setDisplay(text.slice(0, i));
        if (i >= len) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          intervalRef.current = null;
          setDone(true);
        }
      }, stepMs);
    }, delay);

    return () => {
      clearTimeout(startAfter);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text, duration, delay, reduceMotion, instant]);

  return (
    <span className={className ? `inline ${className}` : "inline"}>
      <Tag className="inline font-mono" style={{ fontFamily: "var(--font-geist-mono), monospace", lineHeight: 1.8 }}>
        {display}
      </Tag>
      {showCursor && (
        <span
          className="typewriter-cursor inline animate-typewriter-cursor"
          aria-hidden
          style={{ opacity: done ? 0 : 1 }}
        >
          {cursorChar}
        </span>
      )}
    </span>
  );
}
