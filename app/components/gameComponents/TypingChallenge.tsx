"use client";

import { useEffect, useState, useRef } from "react";

const SAMPLE_TEXT =
  "Designing intelligent systems requires clarity patience and deep focus.";

export function TypingChallenge() {
  const [input, setInput] = useState("");
  const [started, setStarted] = useState(false);
  const [time, setTime] = useState(0);
  const [finished, setFinished] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Start timer on first keystroke
  useEffect(() => {
    if (started && !finished) {
      intervalRef.current = setInterval(() => {
        setTime((t) => t + 1);
      }, 1000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [started, finished]);

  // Finish detection
  useEffect(() => {
    if (input === SAMPLE_TEXT) {
      setFinished(true);
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
  }, [input]);

  const resetGame = () => {
    setInput("");
    setStarted(false);
    setFinished(false);
    setTime(0);
  };

  const handleChange = (value: string) => {
    if (!started) setStarted(true);
    setInput(value);
  };

  // Metrics
  const words = SAMPLE_TEXT.trim().split(" ").length;
  const minutes = time / 60 || 1 / 60;
  const wpm = Math.round(words / minutes);

  const correctChars = input
    .split("")
    .filter((char, i) => char === SAMPLE_TEXT[i]).length;

  const accuracy = Math.round(
    (correctChars / (input.length || 1)) * 100,
  );

  return (
    <div className="w-full max-w-xl rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black p-5 text-left font-mono">
      {/* Header */}
      <div className="mb-4 text-xs text-gray-500">
        <div>&gt; typing_challenge.exe</div>
        <div className="text-gray-400">Test your speed ✨</div>
      </div>

      {/* Text */}
      <div className="mb-4 leading-relaxed text-sm sm:text-base">
        {SAMPLE_TEXT.split("").map((char, i) => {
          let color = "text-gray-500";

          if (i < input.length) {
            color =
              input[i] === char
                ? "text-green-500"
                : "text-red-500";
          }

          return (
            <span key={i} className={color}>
              {char}
            </span>
          );
        })}
      </div>

      {/* Input */}
      <textarea
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Start typing..."
        className="w-full h-24 resize-none rounded-lg border border-gray-200 dark:border-gray-800 bg-transparent p-3 text-sm outline-none focus:border-gray-400 dark:focus:border-gray-600"
      />

      {/* Stats */}
      <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-500">
        <div>Time: {time}s</div>
        <div>WPM: {started ? wpm : 0}</div>
        <div>Accuracy: {started ? accuracy : 100}%</div>
      </div>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between">
        {finished ? (
          <div className="text-green-500 text-xs">
            Challenge completed ✔
          </div>
        ) : (
          <div className="text-gray-500 text-xs">
            {started ? "Typing…" : "Awaiting input"}
          </div>
        )}

        <button
          onClick={resetGame}
          className="text-xs text-gray-400 hover:text-black dark:hover:text-white transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  );
}