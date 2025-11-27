"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    {/* Dumbbell zooming in smoothly from distance */}
                    <motion.div
                        initial={{
                            scale: 0.05,
                            opacity: 0,
                            y: -800,
                            rotateZ: -45
                        }}
                        animate={{
                            scale: [0.05, 0.8, 1],
                            opacity: [0, 1, 1],
                            y: [-800, -100, 0],
                            rotateZ: [-45, 180, 360]
                        }}
                        transition={{
                            duration: 1.8,
                            ease: "easeOut",
                            times: [0, 0.6, 1]
                        }}
                        className="relative w-64 h-64 md:w-96 md:h-96"
                    >
                        <Image
                            src="/dumbbell.png"
                            alt="Loading..."
                            fill
                            className="object-contain drop-shadow-[0_0_60px_rgba(59,130,246,0.7)]"
                            priority
                        />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                        className="absolute bottom-20 text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 tracking-tighter"
                    >
                        FITPULSE
                    </motion.h1>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
