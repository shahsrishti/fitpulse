"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CtaBanner() {
    return (
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />

            <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-6"
                >
                    Start your fitness journey today — join FitPulse!
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-xl md:text-2xl mb-10 opacity-90"
                >
                    Get 50% off your first month when you sign up today.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <Link
                        href="/#contact"
                        className="bg-background text-foreground px-8 py-4 rounded-full text-lg font-bold hover:bg-background/90 transition-transform hover:scale-105 shadow-lg inline-block"
                    >
                        Join Now
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
