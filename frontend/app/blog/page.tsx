"use client";

import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";

const blogPosts = [
    {
        id: 1,
        title: "10 Tips to Maximize Your Workout Results",
        excerpt: "Discover the secrets to getting the most out of every gym session with these expert-approved tips.",
        category: "Workout Routines",
        author: "Mike Tyson",
        date: "May 15, 2024",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "The Ultimate Guide to Post-Workout Nutrition",
        excerpt: "What you eat after training is just as important as the training itself. Learn what to fuel your body with.",
        category: "Diet Plans",
        author: "Lisa Wong",
        date: "May 12, 2024",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "How to Stay Motivated When You Feel Like Quitting",
        excerpt: "Consistency is key. Here are proven strategies to keep showing up even on your hardest days.",
        category: "Gym Motivation",
        author: "Sarah Johnson",
        date: "May 10, 2024",
        image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Strength Training for Beginners: Where to Start",
        excerpt: "New to lifting? This comprehensive guide covers everything you need to know to start safely and effectively.",
        category: "Fitness Tips",
        author: "Emily Davis",
        date: "May 08, 2024",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "5 Yoga Poses for Better Flexibility and Recovery",
        excerpt: "Incorporate these simple poses into your routine to improve mobility and speed up muscle recovery.",
        category: "Workout Routines",
        author: "Sarah Johnson",
        date: "May 05, 2024",
        image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 6,
        title: "Understanding Macros: A Simple Guide",
        excerpt: "Proteins, fats, and carbs. We break down what they are and how to balance them for your specific goals.",
        category: "Diet Plans",
        author: "Lisa Wong",
        date: "May 01, 2024",
        image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop"
    }
];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-background py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">FitPulse Blog</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Expert advice, workout tips, and nutrition guides to help you live your healthiest life.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border flex flex-col hover:shadow-md transition-shadow group">
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                                    {post.category}
                                </div>
                            </div>

                            <div className="p-6 flex-grow flex flex-col">
                                <div className="flex items-center text-xs text-muted-foreground mb-3 space-x-4">
                                    <div className="flex items-center">
                                        <User className="w-3 h-3 mr-1" />
                                        {post.author}
                                    </div>
                                    <div className="flex items-center">
                                        <Calendar className="w-3 h-3 mr-1" />
                                        {post.date}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                    <Link href={`/blog/${post.id}`}>
                                        {post.title}
                                    </Link>
                                </h3>

                                <p className="text-muted-foreground mb-6 line-clamp-3 flex-grow">
                                    {post.excerpt}
                                </p>

                                <Link
                                    href={`/blog/${post.id}`}
                                    className="inline-flex items-center text-primary font-medium hover:underline mt-auto"
                                >
                                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
