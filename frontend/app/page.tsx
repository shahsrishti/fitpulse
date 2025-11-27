"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import MembershipPreview from "@/components/MembershipPreview";
import TrainersPreview from "@/components/TrainersPreview";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import ScrollImageSection from "@/components/ScrollImageSection";

export default function Home() {
  // Form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // Input handler
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit handler
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/submit-query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        console.error("Error:", data);
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Features />

      {/* 3D Scroll Section */}
      <ScrollImageSection
        sections={[
          {
            id: "cardio",
            title: "State-of-the-Art Cardio",
            description: "Experience our premium cardio equipment with integrated entertainment systems and real-time performance tracking. From treadmills to ellipticals, every machine is designed for maximum comfort and results.",
            image: "/gym-cardio.png"
          },
          {
            id: "weights",
            title: "Professional Weight Training",
            description: "Access a complete range of free weights and resistance machines. Our weight training area features the latest equipment from industry leaders, perfect for both beginners and advanced lifters.",
            image: "/gym-weights.png"
          },
          {
            id: "training",
            title: "Expert Personal Training",
            description: "Work one-on-one with certified trainers who create personalized programs tailored to your goals. Get the motivation, guidance, and accountability you need to succeed.",
            image: "/gym-training.png"
          }
        ]}
      />

      <MembershipPreview />
      <TrainersPreview />
      <Testimonials />
      <CtaBanner />

      <section id="contact" className="py-20 bg-muted/30">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center text-foreground">Contact Us</h2>
          <p className="text-center text-muted-foreground mb-10">
            Have questions? Get in touch with us.
          </p>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-card p-8 rounded-2xl shadow-sm border border-border"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="w-full border border-input bg-background p-3 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                className="w-full border border-input bg-background p-3 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">Phone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                className="w-full border border-input bg-background p-3 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                className="w-full border border-input bg-background p-3 rounded-md h-32 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              disabled={loading}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md w-full hover:bg-primary/90 transition-colors disabled:opacity-70 font-medium"
            >
              {loading ? "Submitting..." : "Submit Message"}
            </button>

            {status === "success" && (
              <p className="text-green-600 text-center mt-4 bg-green-50 dark:bg-green-900/20 p-3 rounded-md">
                Thank you! Your message has been submitted.
              </p>
            )}

            {status === "error" && (
              <p className="text-red-600 text-center mt-4 bg-red-50 dark:bg-red-900/20 p-3 rounded-md">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
