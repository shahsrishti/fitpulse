"use client";

import { Check } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import TiltCard from "@/components/ui/TiltCard";

const plans = [
    {
        name: "Basic",
        price: "$29",
        period: "/month",
        features: ["Access to gym floor", "Locker room access", "Free WiFi", "1 Intro session"],
        highlight: false
    },
    {
        name: "Standard",
        price: "$49",
        period: "/month",
        features: ["All Basic features", "Group classes included", "Guest pass (1/month)", "Nutrition guide"],
        highlight: true
    },
    {
        name: "Premium",
        price: "$79",
        period: "/month",
        features: ["All Standard features", "Unlimited guest passes", "Sauna & Spa access", "Personal trainer (1/mo)"],
        highlight: false
    }
];

export default function MembershipPreview() {
    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Membership Plans</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Choose the plan that fits your goals and budget. No hidden fees.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <TiltCard key={index} tiltMaxAngleX={8} tiltMaxAngleY={8} scaleOnHover={1.05}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`relative p-8 rounded-2xl border h-full ${plan.highlight
                                    ? "border-primary bg-primary/5 shadow-lg scale-105 z-10"
                                    : "border-border bg-card shadow-sm hover:shadow-xl"
                                    } transition-all`}
                            >
                                {plan.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                                <div className="flex items-baseline mb-6">
                                    <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
                                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-muted-foreground">
                                            <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="/membership"
                                    className={`block w-full text-center py-3 rounded-lg font-medium transition-colors ${plan.highlight
                                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                        }`}
                                >
                                    Select Plan
                                </Link>
                            </motion.div>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
