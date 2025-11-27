"use client";

import { Instagram, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

const trainers = [
    {
        name: "Sarah Johnson",
        role: "Senior Coach",
        specialty: "Yoga & Pilates",
        experience: "10+ Years",
        bio: "Sarah specializes in helping clients find balance and flexibility through mindful movement. Her classes are designed to reduce stress and improve mobility.",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop"
    },
    {
        name: "Mike Tyson",
        role: "Strength Trainer",
        specialty: "Boxing & HIIT",
        experience: "8 Years",
        bio: "Former pro boxer bringing intensity and discipline to every high-energy session. Mike pushes you to your limits to help you discover your true strength.",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop"
    },
    {
        name: "Emily Davis",
        role: "Personal Coach",
        specialty: "Strength & Conditioning",
        experience: "6 Years",
        bio: "Emily specializes in building functional strength and muscle mass through science-based programming tailored to your specific body type and goals.",
        image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop"
    },
    {
        name: "John Smith",
        role: "Zumba Instructor",
        specialty: "Dance Fitness",
        experience: "5 Years",
        bio: "John brings the party to every workout. His high-energy Zumba classes are a fun way to burn calories and improve cardiovascular health.",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
    },
    {
        name: "Lisa Wong",
        role: "Nutritionist",
        specialty: "Diet & Nutrition",
        experience: "7 Years",
        bio: "Lisa helps you fuel your body right. She creates personalized meal plans that complement your training and fit your lifestyle.",
        image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop"
    },
    {
        name: "David Chen",
        role: "CrossFit Coach",
        specialty: "Functional Fitness",
        experience: "9 Years",
        bio: "David's functional fitness classes prepare you for everyday life. Focus on movement patterns, endurance, and overall athleticism.",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
    }
];

export default function TrainersPage() {
    return (
        <div className="min-h-screen bg-background py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Meet Our Expert Team</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Our certified trainers are here to guide, motivate, and support you on your fitness journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {trainers.map((trainer, index) => (
                        <div key={index} className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border flex flex-col hover:shadow-md transition-shadow">
                            <div className="h-64 overflow-hidden">
                                <img
                                    src={trainer.image}
                                    alt={trainer.name}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6 flex-grow flex flex-col">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground">{trainer.name}</h3>
                                        <p className="text-primary font-medium text-sm">{trainer.role}</p>
                                    </div>
                                    <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full font-medium">
                                        {trainer.experience}
                                    </span>
                                </div>

                                <p className="text-sm font-medium text-muted-foreground mb-4">{trainer.specialty}</p>
                                <p className="text-muted-foreground mb-6 flex-grow">{trainer.bio}</p>

                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                                    <div className="flex space-x-3">
                                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                            <Instagram className="w-5 h-5" />
                                        </a>
                                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                            <Twitter className="w-5 h-5" />
                                        </a>
                                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                    </div>

                                    <Link
                                        href="/#contact"
                                        className="text-sm font-bold text-primary hover:underline"
                                    >
                                        Book Session
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
