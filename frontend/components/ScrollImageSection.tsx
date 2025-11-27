"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Section {
    id: string;
    title: string;
    description: string;
    image: string;
}

interface ScrollImageSectionProps {
    sections: Section[];
    className?: string;
}

export default function ScrollImageSection({ sections, className }: ScrollImageSectionProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <div ref={containerRef} className={cn("relative", className)}>
            {sections.map((section, index) => {
                const step = 1 / sections.length;
                const start = index * step;
                const end = start + step;

                return (
                    <SectionItem
                        key={section.id}
                        section={section}
                        scrollYProgress={scrollYProgress}
                        range={[start, end]}
                        index={index}
                        total={sections.length}
                    />
                );
            })}
        </div>
    );
}

function SectionItem({
    section,
    scrollYProgress,
    range,
    index,
    total,
}: {
    section: Section;
    scrollYProgress: any;
    range: [number, number];
    index: number;
    total: number;
}) {
    const opacity = useTransform(scrollYProgress, [range[0], range[0] + 0.1, range[1] - 0.1, range[1]], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [range[0], range[0] + 0.1, range[1] - 0.1, range[1]], [0.8, 1, 1, 0.8]);
    const x = useTransform(scrollYProgress, [range[0], range[0] + 0.1, range[1] - 0.1, range[1]], [100, 0, 0, -100]);

    return (
        <div className="h-screen sticky top-0 flex items-center justify-center overflow-hidden bg-background">
            <div className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    style={{ opacity, x }}
                    className="z-10 bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border/50"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">{section.title}</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">{section.description}</p>
                </motion.div>

                {/* Image Content */}
                <motion.div
                    style={{ opacity, scale }}
                    className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-border/50"
                >
                    <Image
                        src={section.image}
                        alt={section.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </motion.div>
            </div>
        </div>
    );
}
