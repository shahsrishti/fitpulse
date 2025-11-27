"use client";

import { Dumbbell, Users, Calendar, HeartPulse, Clock, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import TiltCard from "@/components/ui/TiltCard";

const features = [
    {
        icon: Dumbbell,
        title: "Modern Equipment",
        description: "Train with the latest high-tech machinery and free weights."
    },
    {
        icon: Users,
        title: "Expert Trainers",
        description: "Certified coaches to guide you through every step of your journey."
    },
    {
        icon: Calendar,
        title: "Flexible Schedules",
        description: "Open 24/7 so you can workout whenever it fits your lifestyle."
    },
    {
        icon: HeartPulse,
        title: "Nutrition Plans",
        description: "Personalized diet plans to fuel your body and maximize results."
    },
    {
        icon: Clock,
        title: "Time-Efficient",
        description: "HIIT and circuit training designed for busy professionals."
    },
    {
        icon: ShieldCheck,
        title: "Clean & Safe",
        description: "Hygienic environment with regular sanitization protocols."
    }
];

export default function Features() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose FitPulse?</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        We provide everything you need to reach your fitness goals, from top-tier equipment to expert guidance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <TiltCard key={index} tiltMaxAngleX={5} tiltMaxAngleY={5} scaleOnHover={1.02}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-8 bg-card rounded-2xl border border-border shadow-sm hover:shadow-xl transition-shadow h-full"
                            >
                                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                                    <feature.icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </motion.div>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
