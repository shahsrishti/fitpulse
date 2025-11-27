"use client";

import { Check, X } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const plans = [
    {
        name: "Basic",
        price: "$29",
        period: "/month",
        description: "Essential access for the casual gym-goer.",
        features: [
            { name: "Gym Floor Access", included: true },
            { name: "Locker Room & Showers", included: true },
            { name: "Free WiFi", included: true },
            { name: "1 Intro Session", included: true },
            { name: "Group Classes", included: false },
            { name: "Guest Passes", included: false },
            { name: "Sauna & Spa", included: false },
            { name: "Personal Trainer", included: false },
        ],
        highlight: false,
        buttonVariant: "outline"
    },
    {
        name: "Standard",
        price: "$49",
        period: "/month",
        description: "Perfect for those who want more variety.",
        features: [
            { name: "Gym Floor Access", included: true },
            { name: "Locker Room & Showers", included: true },
            { name: "Free WiFi", included: true },
            { name: "1 Intro Session", included: true },
            { name: "Group Classes", included: true },
            { name: "Guest Passes", included: true, note: "1 per month" },
            { name: "Sauna & Spa", included: false },
            { name: "Personal Trainer", included: false },
        ],
        highlight: true,
        buttonVariant: "primary"
    },
    {
        name: "Premium",
        price: "$79",
        period: "/month",
        description: "The ultimate fitness experience without limits.",
        features: [
            { name: "Gym Floor Access", included: true },
            { name: "Locker Room & Showers", included: true },
            { name: "Free WiFi", included: true },
            { name: "1 Intro Session", included: true },
            { name: "Group Classes", included: true },
            { name: "Guest Passes", included: true, note: "Unlimited" },
            { name: "Sauna & Spa", included: true },
            { name: "Personal Trainer", included: true, note: "1 session/mo" },
        ],
        highlight: false,
        buttonVariant: "outline"
    }
];

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-background py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Simple, Transparent Pricing</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        No contracts, no hidden fees. Just the best gym experience in town.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative p-8 rounded-2xl border flex flex-col ${plan.highlight
                                    ? "border-primary bg-primary/5 shadow-xl scale-105 z-10"
                                    : "border-border bg-card shadow-sm"
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                                    Best Value
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                                <p className="text-muted-foreground mb-6">{plan.description}</p>
                                <div className="flex items-baseline">
                                    <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
                                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                                </div>
                            </div>

                            <div className="flex-grow">
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start">
                                            {feature.included ? (
                                                <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                                            ) : (
                                                <X className="w-5 h-5 text-muted-foreground/50 mr-3 flex-shrink-0 mt-0.5" />
                                            )}
                                            <span className={feature.included ? "text-foreground" : "text-muted-foreground/60"}>
                                                {feature.name}
                                                {feature.note && <span className="text-xs text-primary ml-2 font-medium">({feature.note})</span>}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link
                                href="/#contact"
                                className={`block w-full text-center py-3 rounded-lg font-medium transition-colors ${plan.highlight
                                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                    }`}
                            >
                                Choose {plan.name}
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Add-ons Section */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Optional Add-ons</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-card p-6 rounded-xl border border-border shadow-sm flex justify-between items-center">
                            <div>
                                <h3 className="text-xl font-bold text-foreground">Personal Training</h3>
                                <p className="text-muted-foreground">One-on-one sessions with expert coaches</p>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl font-bold text-primary">$60</p>
                                <p className="text-sm text-muted-foreground">per session</p>
                            </div>
                        </div>
                        <div className="bg-card p-6 rounded-xl border border-border shadow-sm flex justify-between items-center">
                            <div>
                                <h3 className="text-xl font-bold text-foreground">Nutrition Plan</h3>
                                <p className="text-muted-foreground">Customized meal plans & consultation</p>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl font-bold text-primary">$99</p>
                                <p className="text-sm text-muted-foreground">per month</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
