"use client";
import { useState } from "react";

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
    <main className="min-h-screen bg-gray-50 p-10">
      <section className="max-w-5xl mx-auto text-center py-20">
        <h1 className="text-5xl font-extrabold text-gray-900">FitPulse Gym</h1>
        <p className="mt-4 text-lg text-gray-600">
          Your fitness journey starts here — train smart, stay consistent, and
          see results.
        </p>

        <div className="mt-10">
          <a
            href="#contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Join Now
          </a>
        </div>
      </section>

      <section id="contact" className="max-w-xl mx-auto mt-20">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white p-6 rounded-lg shadow"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border p-3 rounded"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="w-full border p-3 rounded"
            value={form.phone}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full border p-3 rounded h-24"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>

          <button
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-3 rounded w-full hover:bg-blue-700 transition disabled:bg-blue-300"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

          {status === "success" && (
            <p className="text-green-600 text-center">
              Thank you! Your message has been submitted.
            </p>
          )}

          {status === "error" && (
            <p className="text-red-600 text-center">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </section>
    </main>
  );
}
