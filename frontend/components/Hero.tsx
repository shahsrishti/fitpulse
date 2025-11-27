"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-background">
            {/* Background Gradient/Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background z-10" />
                {/* Placeholder for hero image - using a gradient for now, but could be an image */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
            </div>

            <div className="relative z-20 text-center px-4 max-w-5xl mx-auto perspective-1000">
                <motion.h1
                    initial={{ opacity: 0, rotateX: 90, y: 50 }}
                    animate={{ opacity: 1, rotateX: 0, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 2.5 }} // Delay for preloader
                    className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-6 transform-style-3d"
                >
                    Transform Your Body. <br />
                    <span className="text-primary">Transform Your Life.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.8 }}
                    className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto"
                >
                    Join FitPulse today and get access to state-of-the-art equipment, expert trainers, and a community that motivates you.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotateX: 45 }}
                    animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                    transition={{ duration: 0.8, delay: 3.1 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link
                        href="/#contact"
                        className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-bold hover:bg-primary/90 transition-all hover:scale-110 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                    >
                        Join Now
                    </Link>
                    <Link
                        href="/membership"
                        className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full text-lg font-bold hover:bg-secondary/80 transition-all hover:scale-110"
                    >
                        View Plans
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
