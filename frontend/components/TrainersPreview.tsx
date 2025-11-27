"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const trainers = [
    {
        name: "Sarah Johnson",
        specialty: "Yoga & Pilates",
        bio: "Certified yoga instructor with 10 years of experience helping people find balance and flexibility.",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop"
    },
    {
        name: "Mike Tyson",
        specialty: "Boxing & HIIT",
        bio: "Former pro boxer bringing intensity and discipline to every high-energy session.",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop"
    },
    {
        name: "Emily Davis",
        specialty: "Strength & Conditioning",
        bio: "Specializes in building functional strength and muscle mass through science-based programming.",
        image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop"
    }
];

export default function TrainersPreview() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Trainers</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Work with the best in the industry to achieve your personal fitness goals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {trainers.map((trainer, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border group"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${trainer.image})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-4 left-4 text-white">
                                    <p className="font-medium text-primary-foreground/90">{trainer.specialty}</p>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-foreground mb-2">{trainer.name}</h3>
                                <p className="text-muted-foreground mb-6 line-clamp-2">{trainer.bio}</p>

                                <Link
                                    href="/trainers"
                                    className="text-primary font-medium hover:underline inline-flex items-center"
                                >
                                    View Profile
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
