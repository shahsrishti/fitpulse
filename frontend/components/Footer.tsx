"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Instagram, Twitter, Facebook, Mail, MapPin, Phone, ArrowRight } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<null | "idle" | "sending" | "success" | "error">("idle");

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("sending");
    try {
      // This endpoint can be created later to store subscribers in Supabase.
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 3000);
  }

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Top Section: Brand, Contact, Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand & Socials */}
          <div className="space-y-6">
            <h3 className="text-3xl font-extrabold text-primary">FitPulse</h3>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Transform your body and mind with our premium facilities and expert guidance.
              Join the community that motivates you to be your best self.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-secondary p-2 rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-secondary p-2 rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-secondary p-2 rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-muted-foreground">
                <MapPin className="w-5 h-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                <span>123 Fitness Blvd, Ahmedabad, India</span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <Phone className="w-5 h-5 mr-3 text-primary flex-shrink-0" />
                <span>+91 96240 47072</span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <Mail className="w-5 h-5 mr-3 text-primary flex-shrink-0" />
                <a href="mailto:info@fitpulse.com" className="hover:text-primary transition-colors">info@fitpulse.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6">Newsletter</h4>
            <p className="text-muted-foreground mb-4">Subscribe to get the latest fitness tips and exclusive offers.</p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full bg-background border border-input rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  required
                />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="absolute right-2 top-2 bg-primary text-primary-foreground p-1.5 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-70"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              {status === "success" && <p className="text-sm text-green-500">Subscribed successfully!</p>}
              {status === "error" && <p className="text-sm text-red-500">Something went wrong.</p>}
            </form>
          </div>
        </div>



        {/* Bottom Section: Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} FitPulse. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
