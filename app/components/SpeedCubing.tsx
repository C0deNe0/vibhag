"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import {
    PerspectiveCamera,
    OrbitControls,
    Float,
    Environment,
    ContactShadows,
} from "@react-three/drei";
import * as THREE from "three";
import {
    Trophy,
    TimerReset,
    Gauge,
    Sparkles,
    X,
} from "lucide-react";

/* ===================================================
   REAL 3D RUBIK'S CUBE (27 CUBIES)
=================================================== */

function Sticker({
    position,
    rotation = [0, 0, 0],
    color,
}: {
    position: [number, number, number];
    rotation?: [number, number, number];
    color: string;
}) {
    return (
        <mesh position={position} rotation={rotation}>
            <planeGeometry args={[0.72, 0.72]} />
            <meshStandardMaterial
                color={color}
                metalness={0.1}
                roughness={0.35}
            />
        </mesh>
    );
}

function Cubie({
    position,
}: {
    position: [number, number, number];
}) {
    const [x, y, z] = position;

    return (
        <group position={position}>
            {/* Base plastic body */}
            <mesh castShadow receiveShadow>
                <boxGeometry args={[0.92, 0.92, 0.92]} />
                <meshPhysicalMaterial
                    color="#0f0f10"
                    roughness={0.35}
                    metalness={0.05}
                    clearcoat={1}
                    clearcoatRoughness={0.15}
                />
            </mesh>

            {/* Stickers */}
            {x === 1 && (
                <Sticker
                    position={[0.47, 0, 0]}
                    rotation={[0, Math.PI / 2, 0]}
                    color="#22c55e"
                />
            )}
            {x === -1 && (
                <Sticker
                    position={[-0.47, 0, 0]}
                    rotation={[0, -Math.PI / 2, 0]}
                    color="#3b82f6"
                />
            )}

            {y === 1 && (
                <Sticker
                    position={[0, 0.47, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    color="#ffffff"
                />
            )}
            {y === -1 && (
                <Sticker
                    position={[0, -0.47, 0]}
                    rotation={[Math.PI / 2, 0, 0]}
                    color="#facc15"
                />
            )}

            {z === 1 && (
                <Sticker position={[0, 0, 0.47]} color="#ef4444" />
            )}
            {z === -1 && (
                <Sticker
                    position={[0, 0, -0.47]}
                    rotation={[0, Math.PI, 0]}
                    color="#f97316"
                />
            )}
        </group>
    );
}

function RealRubiksCube() {
    const group = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        if (!group.current) return;

        group.current.rotation.y += delta * 0.42;
        group.current.rotation.x =
            Math.sin(state.clock.elapsedTime * 0.9) * 0.22;
    });

    const cubies = [];

    for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
            for (let z = -1; z <= 1; z++) {
                cubies.push(
                    <Cubie
                        key={`${x}-${y}-${z}`}
                        position={[
                            x * 0.98,
                            y * 0.98,
                            z * 0.98,
                        ]}
                    />
                );
            }
        }
    }

    return (
        <Float speed={2} floatIntensity={0.7} rotationIntensity={0.18}>
            <group ref={group}>{cubies}</group>
        </Float>
    );
}

/* ===================================================
   MAIN COMPONENT
=================================================== */

export function SpeedCubing() {
    const [open, setOpen] = useState(false);

    const stats = [
        {
            icon: Trophy,
            label: "Personal Best",
            value: "18.42s",
            color: "text-yellow-500",
        },
        {
            icon: TimerReset,
            label: "Average of 5",
            value: "21.03s",
            color: "text-blue-500",
        },
        {
            icon: Gauge,
            label: "TPS",
            value: "5.9",
            color: "text-emerald-500",
        },
    ];

    return (
        <div className="mb-4 w-full py-6">
            {!open ? (
                <button
                    onClick={() => setOpen(true)}
                    className="group flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-300"
                >
                    <span className="text-sm sm:text-base underline underline-offset-8 decoration-gray-200 dark:decoration-zinc-800 group-hover:decoration-blue-500 transition-all">
                        side feature: speedcubing
                    </span>
                </button>
            ) : (

                <motion.div
                    initial={{ opacity: 0, scale: 0.98, y: 14 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="
    relative w-full max-w-5xl overflow-hidden rounded-3xl
    border border-gray-200/70 bg-white/60
    p-5 sm:p-7 lg:p-8
    backdrop-blur-xl

    dark:border-zinc-800/70
    dark:bg-black/40
  "
                >
                    {/* Glow */}
                    <div className="pointer-events-none absolute -top-20 right-0 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-20 left-0 h-60 w-60 rounded-full bg-purple-500/10 blur-3xl" />

                    {/* Header */}
                    <div className="mb-6 flex items-start justify-between gap-4">
                        <div className="min-w-0">
                            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-gray-400 dark:text-zinc-500">
                                Speedcubing
                            </p>

                            <h2 className="mt-2 text-xl sm:text-2xl font-semibold text-black dark:text-white leading-tight">
                                Rubik’s Cube Solver
                            </h2>
                        </div>

                        <button
                            onClick={() => setOpen(false)}
                            className="
        flex h-9 w-9 shrink-0 items-center justify-center rounded-full
        border border-gray-200 bg-white/70 text-gray-500
        transition-all duration-300
        hover:rotate-90 hover:text-red-500

        dark:border-zinc-800
        dark:bg-zinc-900/70
      "
                        >
                            <X size={15} />
                        </button>
                    </div>

                    {/* Main Layout */}
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-10 xl:gap-14 items-center">
                        {/* LEFT */}
                        <div className="order-2 lg:order-1 flex h-full flex-col justify-center">
                            <p className="max-w-md text-sm sm:text-[15px] leading-7 text-gray-600 dark:text-zinc-400">
                                I enjoy a competitive hobby that sharpens decision-making,
                                memory, pattern recognition, and reaction speed while teaching
                                calm execution under pressure.
                            </p>

                            {/* Stats */}
                            <div className="mt-6 space-y-3">
                                {stats.map((item, i) => {
                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={i}
                                            className="
                flex items-center justify-between gap-4
                rounded-2xl border border-gray-200/70
                bg-white/60 px-4 py-3

                dark:border-zinc-800
                dark:bg-zinc-900/40
              "
                                        >
                                            <div className="flex min-w-0 items-center gap-3">
                                                <Icon className={`h-4 w-4 shrink-0 ${item.color}`} />

                                                <span className="truncate text-sm text-gray-600 dark:text-zinc-300">
                                                    {item.label}
                                                </span>
                                            </div>

                                            <span className="shrink-0 text-sm font-semibold text-black dark:text-white">
                                                {item.value}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="mt-6 flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-gray-400 dark:text-zinc-500">
                                <Sparkles size={12} />
                                speed • logic • focus
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="order-1 lg:order-2">
                            <div
                                className="
          relative h-[280px] sm:h-[340px] lg:h-[420px] w-full
          overflow-hidden rounded-3xl
          border border-gray-200/70
          bg-gradient-to-b from-white/80 to-gray-100/70

          dark:border-zinc-800
          dark:from-zinc-900/80
          dark:to-black/40
        "
                            >
                                <Canvas shadows dpr={[1, 2]}>
                                    <PerspectiveCamera
                                        makeDefault
                                        position={[5, 4, 6]}
                                        fov={38}
                                    />

                                    <ambientLight intensity={1.4} />

                                    <directionalLight
                                        position={[8, 8, 8]}
                                        intensity={2.5}
                                        castShadow
                                    />

                                    <pointLight
                                        position={[-6, -2, 5]}
                                        intensity={1.5}
                                    />

                                    <Environment preset="city" />

                                    <RealRubiksCube />

                                    <ContactShadows
                                        position={[0, -2.4, 0]}
                                        opacity={0.45}
                                        scale={10}
                                        blur={2.8}
                                        far={4}
                                    />

                                    <OrbitControls
                                        enablePan={false}
                                        enableZoom={false}
                                        autoRotate={false}
                                    />
                                </Canvas>

                                <div className="pointer-events-none absolute bottom-4 left-0 right-0 text-center text-[10px] font-mono uppercase tracking-[0.32em] text-gray-400 dark:text-zinc-500">
                                    drag • rotate • inspect
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
}