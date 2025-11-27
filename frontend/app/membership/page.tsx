"use client";

import { CheckCircle2, Trophy, Users, Clock, Zap } from "lucide-react";
import Link from "next/link";

export default function MembershipPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-20 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">
                        Unlock Your Potential
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
                        Join a community dedicated to health, strength, and progress.
                        Our memberships are designed to give you everything you need to succeed.
                    </p>
                    <Link
                        href="/pricing"
                        className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-bold hover:bg-primary/90 transition-transform hover:scale-105 shadow-lg inline-block"
                    >
                        View Pricing
                    </Link>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-16">Membership Benefits</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                                <Trophy className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">State-of-the-Art Equipment</h3>
                            <p className="text-muted-foreground">Access to premium cardio machines, free weights, and resistance training zones.</p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                                <Users className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Community Events</h3>
                            <p className="text-muted-foreground">Regular workshops, challenges, and social events to keep you motivated.</p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                                <Clock className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">24/7 Access</h3>
                            <p className="text-muted-foreground">Train on your schedule with round-the-clock access to all facilities.</p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                                <Zap className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Free Group Classes</h3>
                            <p className="text-muted-foreground">Yoga, HIIT, Spin, and more included in Standard and Premium plans.</p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                                <CheckCircle2 className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Locker & Towel Service</h3>
                            <p className="text-muted-foreground">Secure lockers and fresh towels available for your convenience.</p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                                <Users className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Guest Privileges</h3>
                            <p className="text-muted-foreground">Bring a friend to workout with you (limits apply based on plan).</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-20 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-16">Compare Plans</h2>

                    <div className="overflow-x-auto">
                        <table className="w-full bg-card rounded-xl shadow-sm border border-border">
                            <thead>
                                <tr className="border-b border-border">
                                    <th className="p-6 text-left font-bold text-lg">Features</th>
                                    <th className="p-6 text-center font-bold text-lg">Basic</th>
                                    <th className="p-6 text-center font-bold text-lg text-primary">Standard</th>
                                    <th className="p-6 text-center font-bold text-lg">Premium</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { feature: "Gym Access", basic: true, standard: true, premium: true },
                                    { feature: "Locker Access", basic: true, standard: true, premium: true },
                                    { feature: "Free WiFi", basic: true, standard: true, premium: true },
                                    { feature: "Group Classes", basic: false, standard: true, premium: true },
                                    { feature: "Guest Passes", basic: false, standard: "1/month", premium: "Unlimited" },
                                    { feature: "Sauna Access", basic: false, standard: false, premium: true },
                                    { feature: "Personal Training", basic: false, standard: false, premium: "1 session/mo" },
                                    { feature: "Nutrition Guide", basic: false, standard: true, premium: true },
                                ].map((row, index) => (
                                    <tr key={index} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                                        <td className="p-4 pl-6 font-medium">{row.feature}</td>
                                        <td className="p-4 text-center">
                                            {row.basic === true ? <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /> :
                                                row.basic === false ? <span className="text-muted-foreground">-</span> :
                                                    <span className="font-medium">{row.basic}</span>}
                                        </td>
                                        <td className="p-4 text-center bg-primary/5">
                                            {row.standard === true ? <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /> :
                                                row.standard === false ? <span className="text-muted-foreground">-</span> :
                                                    <span className="font-medium">{row.standard}</span>}
                                        </td>
                                        <td className="p-4 text-center">
                                            {row.premium === true ? <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /> :
                                                row.premium === false ? <span className="text-muted-foreground">-</span> :
                                                    <span className="font-medium">{row.premium}</span>}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-10 text-center">
                        <Link
                            href="/pricing"
                            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
