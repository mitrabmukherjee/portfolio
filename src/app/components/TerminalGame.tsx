"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal, X, Minimize2, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TerminalGame() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [history, setHistory] = useState<string[]>(["Welcome to SteoraOS. Type 'help' to see available commands."]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle with Ctrl + `
      if (e.ctrlKey && e.key === "`") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        if (isMinimized) setIsMinimized(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMinimized]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, isOpen, isMinimized]);

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const newHistory = [...history, `> ${cmd}`];

    switch (trimmedCmd) {
      case "help":
        newHistory.push("Available commands:", " - about: Who am I?", " - skills: My technical stack", " - gui: Return to the visual world", " - clear: Clear the terminal");
        break;
      case "about":
        newHistory.push("I am an AI-ML Developer and Innovator. Currently a Research Intern at Texas A&M and Junior AI Engineer at Steora Systems.");
        break;
      case "skills":
        newHistory.push("Languages: Python, JavaScript/TypeScript, SQL");
        newHistory.push("Frameworks: PyTorch, TensorFlow, React, Next.js");
        break;
      case "gui":
      case "exit":
        setIsOpen(false);
        break;
      case "clear":
        setHistory(["Welcome to SteoraOS. Type 'help' to see available commands."]);
        return;
      case "sudo":
        newHistory.push("Nice try, user. This incident will be reported.");
        break;
      case "":
        break;
      default:
        newHistory.push(`Command not found: ${trimmedCmd}. Type 'help' for available commands.`);
    }

    setHistory(newHistory);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput("");
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 lg:bottom-10 right-4 lg:right-10 z-50 p-3 bg-secondary/50 backdrop-blur border border-primary/20 text-primary hover:text-blue-500 rounded-full transition-all hover:scale-110 shadow-xl group"
        title="Open Developer Terminal (Ctrl+`)"
      >
        <Terminal className="w-5 h-5" />
        <span className="absolute -top-10 right-0 bg-background/90 text-primary px-3 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
           Developer Terminal (Ctrl+`)
        </span>
      </button>
    );
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          className={`fixed z-[100] ${isMinimized ? 'bottom-4 right-4 w-64 h-12' : 'bottom-4 right-4 w-full md:w-[500px] h-80'} md:bottom-10 md:right-10 bg-background/80 backdrop-blur-xl border border-primary/20 rounded-xl shadow-2xl overflow-hidden flex flex-col font-mono text-sm`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-primary/20 bg-primary/5 cursor-move">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-primary/70" />
              <span className="text-primary/70 font-semibold select-none">steora@portfolio:~</span>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => setIsMinimized(!isMinimized)} className="text-primary/50 hover:text-primary transition-colors">
                {isMinimized ? <Maximize2 className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
              </button>
              <button onClick={() => setIsOpen(false)} className="text-primary/50 hover:text-red-500 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Body */}
          {!isMinimized && (
            <div className="flex-1 p-4 overflow-y-auto" ref={scrollRef}>
              {history.map((line, i) => (
                <div key={i} className={`mb-1 ${line.startsWith('>') ? 'text-blue-400' : 'text-primary/80'}`}>
                  {line}
                </div>
              ))}
              
              <form onSubmit={onSubmit} className="flex mt-2 items-center gap-2">
                <span className="text-green-500 font-bold">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-primary caret-blue-500"
                  autoFocus
                  autoComplete="off"
                  spellCheck="false"
                />
              </form>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
