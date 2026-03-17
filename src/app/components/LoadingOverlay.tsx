"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "loading-overlay-shown";
const SKIP_AFTER_MS = 1200;
const FALLBACK_MS = 1500;

const CUBE_SIZE = 56;

export default function LoadingOverlay() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<"visible" | "exiting" | "gone">("visible");
  const [showSkip, setShowSkip] = useState(false);
  const initialPathname = useRef<string | null>(null);

  const startExit = useCallback(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(STORAGE_KEY, "1");
    }
    setPhase("exiting");
  }, []);

  useEffect(() => {
    if (initialPathname.current === null) {
      initialPathname.current = pathname;
    } else if (pathname !== initialPathname.current) {
      if (typeof window !== "undefined") {
        sessionStorage.setItem(STORAGE_KEY, "1");
      }
      setPhase("gone");
    }
  }, [pathname]);

  useEffect(() => {
    if (initialPathname.current !== null && pathname !== initialPathname.current) {
      setPhase("gone");
      return;
    }
    if (typeof window !== "undefined" && sessionStorage.getItem(STORAGE_KEY)) {
      setPhase("gone");
      return;
    }

    const minDisplayTime = 800;
    const start = Date.now();
    const tryHide = () => {
      const elapsed = Date.now() - start;
      if (elapsed >= minDisplayTime) {
        startExit();
      } else {
        setTimeout(tryHide, minDisplayTime - elapsed);
      }
    };

    const skipTimer = setTimeout(() => setShowSkip(true), SKIP_AFTER_MS);

    if (document.readyState === "complete") {
      tryHide();
    } else {
      window.addEventListener("load", tryHide);
      const t = setTimeout(tryHide, FALLBACK_MS);
      return () => {
        window.removeEventListener("load", tryHide);
        clearTimeout(t);
        clearTimeout(skipTimer);
      };
    }
    return () => clearTimeout(skipTimer);
  }, [pathname, startExit]);

  const handleTransitionEnd = useCallback(
    (e: React.TransitionEvent) => {
      try {
        if (e?.propertyName === "opacity" && phase === "exiting") {
          setPhase("gone");
        }
      } catch {
        /* ignore */
      }
    },
    [phase]
  );

  if (phase === "gone") return null;

  const half = CUBE_SIZE / 2;

  return (
    <div
      className={`loading-overlay fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden ${
        phase === "exiting" ? "loading-overlay--exiting" : ""
      }`}
      style={{
        background: "linear-gradient(135deg, #fffef9 0%, #FFF8E7 40%, #FFEDAC 100%)",
      }}
      aria-hidden={phase === "exiting"}
      onTransitionEnd={handleTransitionEnd}
    >
      {/* Subtle grid effect */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* 3D rotating cube */}
      <div
        className="relative flex items-center justify-center"
        style={{
          width: CUBE_SIZE * 1.8,
          height: CUBE_SIZE * 1.8,
          perspective: "320px",
        }}
      >
        <div
          className="loading-cube absolute"
          style={{
            width: CUBE_SIZE,
            height: CUBE_SIZE,
            transformStyle: "preserve-3d",
          }}
        >
          {/* front */}
          <div
            className="absolute flex items-center justify-center rounded-lg border-2 border-primary/20 shadow-lg"
            style={{
              width: CUBE_SIZE,
              height: CUBE_SIZE,
              background: "var(--tertiary)",
              transform: `translateZ(${half}px)`,
            }}
          >
            <span className="text-primary font-mono text-lg font-bold">M</span>
          </div>
          {/* back */}
          <div
            className="absolute flex items-center justify-center rounded-lg border-2 border-primary/20"
            style={{
              width: CUBE_SIZE,
              height: CUBE_SIZE,
              background: "var(--secondary)",
              transform: `rotateY(180deg) translateZ(${half}px)`,
            }}
          />
          {/* right */}
          <div
            className="absolute rounded-lg border-2 border-primary/20"
            style={{
              width: CUBE_SIZE,
              height: CUBE_SIZE,
              background: "var(--primary)",
              transform: `rotateY(90deg) translateZ(${half}px)`,
            }}
          />
          {/* left */}
          <div
            className="absolute rounded-lg border-2 border-primary/20"
            style={{
              width: CUBE_SIZE,
              height: CUBE_SIZE,
              background: "var(--primary)",
              transform: `rotateY(-90deg) translateZ(${half}px)`,
            }}
          />
          {/* top */}
          <div
            className="absolute rounded-lg border-2 border-primary/20"
            style={{
              width: CUBE_SIZE,
              height: CUBE_SIZE,
              background: "var(--secondary)",
              transform: `rotateX(90deg) translateZ(${half}px)`,
            }}
          />
          {/* bottom */}
          <div
            className="absolute rounded-lg border-2 border-primary/20"
            style={{
              width: CUBE_SIZE,
              height: CUBE_SIZE,
              background: "var(--primary)",
              transform: `rotateX(-90deg) translateZ(${half}px)`,
            }}
          />
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <span
            className="loading-dot h-2 w-2 rounded-full bg-primary"
            style={{ animationDelay: "0ms" }}
          />
          <span
            className="loading-dot h-2 w-2 rounded-full bg-primary"
            style={{ animationDelay: "150ms" }}
          />
          <span
            className="loading-dot h-2 w-2 rounded-full bg-primary"
            style={{ animationDelay: "300ms" }}
          />
        </div>
        {showSkip && (
          <button
            type="button"
            onClick={() => startExit()}
            className="text-sm font-mono text-primary/70 hover:text-primary underline transition-colors"
          >
            Skip
          </button>
        )}
      </div>
    </div>
  );
}
