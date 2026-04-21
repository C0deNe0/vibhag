"use client";

import { useEffect, useRef, useState } from "react";
import {
    Trophy,
    Gamepad2,
    RotateCcw,
    Sparkles,
} from "lucide-react";

export function SnakeGame() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const [score, setScore] = useState(0);
    const [best, setBest] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;

        const grid = 20;
        const tileCountX = canvas.width / grid;
        const tileCountY = canvas.height / grid;

        let count = 0;
        let animationId = 0;

        let snake = {
            x: 200,
            y: 200,
            dx: grid,
            dy: 0,
            cells: [] as { x: number; y: number }[],
            maxCells: 4,
        };

        let apple = {
            x: 300,
            y: 200,
        };

        function getRandomInt(min: number, max: number) {
            return Math.floor(Math.random() * (max - min)) + min;
        }

        function resetGame() {
            snake = {
                x: 200,
                y: 200,
                dx: grid,
                dy: 0,
                cells: [],
                maxCells: 4,
            };

            apple = {
                x: getRandomInt(0, tileCountX) * grid,
                y: getRandomInt(0, tileCountY) * grid,
            };

            setScore(0);
            setGameOver(false);
        }

        function drawRoundedRect(
            x: number,
            y: number,
            w: number,
            h: number,
            r: number
        ) {
            ctx.beginPath();
            ctx.moveTo(x + r, y);
            ctx.arcTo(x + w, y, x + w, y + h, r);
            ctx.arcTo(x + w, y + h, x, y + h, r);
            ctx.arcTo(x, y + h, x, y, r);
            ctx.arcTo(x, y, x + w, y, r);
            ctx.closePath();
            ctx.fill();
        }

        function loop() {
            animationId = requestAnimationFrame(loop);

            if (++count < 6) return;
            count = 0;

            // Background
            ctx.fillStyle = "#09090b";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Grid lines
            ctx.strokeStyle = "rgba(255,255,255,0.04)";
            for (let i = 0; i < canvas.width; i += grid) {
                ctx.beginPath();
                ctx.moveTo(i, 0);
                ctx.lineTo(i, canvas.height);
                ctx.stroke();
            }

            for (let i = 0; i < canvas.height; i += grid) {
                ctx.beginPath();
                ctx.moveTo(0, i);
                ctx.lineTo(canvas.width, i);
                ctx.stroke();
            }

            snake.x += snake.dx;
            snake.y += snake.dy;

            // Wrap around walls
            if (snake.x < 0) snake.x = canvas.width - grid;
            else if (snake.x >= canvas.width) snake.x = 0;

            if (snake.y < 0) snake.y = canvas.height - grid;
            else if (snake.y >= canvas.height) snake.y = 0;

            snake.cells.unshift({ x: snake.x, y: snake.y });

            if (snake.cells.length > snake.maxCells) {
                snake.cells.pop();
            }

            // Apple glow
            ctx.shadowColor = "#ef4444";
            ctx.shadowBlur = 18;
            ctx.fillStyle = "#ef4444";
            drawRoundedRect(apple.x + 2, apple.y + 2, grid - 4, grid - 4, 8);
            ctx.shadowBlur = 0;

            // Snake
            snake.cells.forEach((cell, index) => {
                const isHead = index === 0;

                ctx.shadowColor = isHead ? "#22c55e" : "#16a34a";
                ctx.shadowBlur = isHead ? 18 : 8;

                ctx.fillStyle = isHead ? "#22c55e" : "#16a34a";
                drawRoundedRect(cell.x + 1, cell.y + 1, grid - 2, grid - 2, 6);

                ctx.shadowBlur = 0;

                // Eat apple
                if (cell.x === apple.x && cell.y === apple.y) {
                    snake.maxCells++;
                    const newScore = snake.maxCells - 4;

                    setScore(newScore);
                    setBest((prev) => Math.max(prev, newScore));

                    apple.x = getRandomInt(0, tileCountX) * grid;
                    apple.y = getRandomInt(0, tileCountY) * grid;
                }

                // Self collision
                for (let i = index + 1; i < snake.cells.length; i++) {
                    if (
                        cell.x === snake.cells[i].x &&
                        cell.y === snake.cells[i].y
                    ) {
                        setGameOver(true);
                        resetGame();
                    }
                }
            });
        }

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "a" && snake.dx === 0) {
                snake.dx = -grid;
                snake.dy = 0;
            } else if (e.key === "w" && snake.dy === 0) {
                snake.dy = -grid;
                snake.dx = 0;
            } else if (e.key === "d" && snake.dx === 0) {
                snake.dx = grid;
                snake.dy = 0;
            } else if (e.key === "s" && snake.dy === 0) {
                snake.dy = grid;
                snake.dx = 0;
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        animationId = requestAnimationFrame(loop);

        return () => {
            cancelAnimationFrame(animationId);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <div
            className="
      absolute top-13 left-1/2 -translate-x-1/2 w-fit
      rounded-3xl border border-zinc-800 bg-zinc-950 p-5
      shadow-[0_20px_80px_rgba(0,0,0,0.45)]
    "
        >
            {/* Header */}
            <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                    <h2 className="flex items-center gap-2 text-xl font-bold text-white">
                        <Gamepad2 className="h-5 w-5 text-green-400" />
                        Snake Game
                    </h2>
                    <p className="text-sm text-zinc-400">
                        Use arrow keys to move
                    </p>
                </div>

                <div className="flex gap-3">
                    <div className="rounded-2xl bg-zinc-900 px-4 py-2 text-center">
                        <p className="text-xs text-zinc-500">Score</p>
                        <p className="font-bold text-white">{score}</p>
                    </div>

                    <div className="rounded-2xl bg-zinc-900 px-4 py-2 text-center">
                        <p className="flex items-center justify-center gap-1 text-xs text-zinc-500">
                            <Trophy className="h-3 w-3" />
                            Best
                        </p>
                        <p className="font-bold text-yellow-400">{best}</p>
                    </div>
                </div>
            </div>

            {/* Canvas */}
            <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-black">
                <canvas
                    ref={canvasRef}
                    width={600}
                    height={480}
                    className="block"
                />

                {gameOver && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm">
                        <div className="rounded-2xl border border-zinc-700 bg-zinc-900 px-6 py-5 text-center">
                            <Sparkles className="mx-auto mb-2 h-6 w-6 text-red-400" />
                            <h3 className="text-lg font-bold text-white">
                                Game Over
                            </h3>
                            <p className="mt-1 text-sm text-zinc-400">
                                Try again and beat your score.
                            </p>
                        </div>
                    </div>
                )}
            </div>

            {/* Footer */}
            <div className="mt-4 flex items-center justify-between text-sm text-zinc-500">
                <span>Eat apples 🍎 Grow longer 🐍</span>

                <button
                    onClick={() => window.location.reload()}
                    className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2 text-white transition hover:bg-zinc-800"
                >
                    <RotateCcw className="h-4 w-4" />
                    Restart
                </button>
            </div>
        </div>
    );

}