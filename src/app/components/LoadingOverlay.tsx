"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "loading-overlay-shown";

export default function LoadingOverlay() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<"visible" | "exiting" | "gone">("visible");
  const initialPathname = useRef<string | null>(null);

  const startExit = useCallback(() => {
    setPhase("exiting");
  }, []);

  // Never show overlay on internal navigation – only on initial document load
  useEffect(() => {
    if (initialPathname.current === null) {
      initialPathname.current = pathname;
    } else if (pathname !== initialPathname.current) {
      // User navigated to a different page – hide overlay immediately
      if (typeof window !== "undefined") {
        sessionStorage.setItem(STORAGE_KEY, "1");
      }
      setPhase("gone");
    }
  }, [pathname]);

  useEffect(() => {
    // Already navigated – don't show
    if (initialPathname.current !== null && pathname !== initialPathname.current) {
      setPhase("gone");
      return;
    }

    // Only show on first visit this session (full page load)
    if (typeof window !== "undefined" && sessionStorage.getItem(STORAGE_KEY)) {
      setPhase("gone");
      return;
    }

    const minDisplayTime = 800;
    const start = Date.now();

    const tryHide = () => {
      const elapsed = Date.now() - start;
      if (elapsed >= minDisplayTime) {
        if (typeof window !== "undefined") {
          sessionStorage.setItem(STORAGE_KEY, "1");
        }
        startExit();
      } else {
        setTimeout(tryHide, minDisplayTime - elapsed);
      }
    };

    if (document.readyState === "complete") {
      tryHide();
    } else {
      window.addEventListener("load", tryHide);
      const t = setTimeout(tryHide, 2000);
      return () => {
        window.removeEventListener("load", tryHide);
        clearTimeout(t);
      };
    }
  }, [pathname, startExit]);

  const handleTransitionEnd = (e: React.TransitionEvent) => {
    if (e.propertyName === "opacity" && phase === "exiting") {
      setPhase("gone");
    }
  };

  if (phase === "gone") return null;

  return (
    <div
      className={`loading-overlay fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white ${
        phase === "exiting" ? "loading-overlay--exiting" : ""
      }`}
      aria-hidden={phase === "exiting"}
      onTransitionEnd={handleTransitionEnd}
    >
      
      <div className="mt-8 flex items-center gap-2">
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
    </div>
  );
}
