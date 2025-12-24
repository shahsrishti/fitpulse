import React, { useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().optional(),
  preferred_plan: z.string().optional(),
  source: z.string().optional()
});

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", preferred_plan: "", source: "landing" });
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    try {
      schema.parse(form);
    } catch (err: any) {
      setStatus(err.errors?.[0]?.message || "Validation error");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/submit-query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const json = await res.json();
      if (res.ok) {
        setStatus("Thanks! We'll contact you soon.");
        setForm({ name: "", email: "", phone: "", message: "", preferred_plan: "", source: "landing" });
      } else {
        setStatus(json.error || "Submission failed");
      }
    } catch (err) {
      setStatus("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
      <input name="name" value={form.name} onChange={onChange} placeholder="Full name" className="w-full p-3 rounded border" required />
      <input name="email" value={form.email} onChange={onChange} placeholder="Email" type="email" className="w-full p-3 rounded border" required />
      <input name="phone" value={form.phone} onChange={onChange} placeholder="Phone" className="w-full p-3 rounded border" />
      <select name="preferred_plan" value={form.preferred_plan} onChange={onChange} className="w-full p-3 rounded border">
        <option value="">Interested in</option>
        <option value="monthly">Monthly</option>
        <option value="quarterly">Quarterly</option>
        <option value="yearly">Yearly</option>
      </select>
      <textarea name="message" value={form.message} onChange={onChange} placeholder="Message" className="w-full p-3 rounded border h-28" />
      <button type="submit" disabled={loading} className="bg-indigo-600 text-white px-4 py-2 rounded">
        {loading ? "Sending..." : "Send Query"}
      </button>
      {status && <p className="text-sm mt-2">{status}</p>}
    </form>
  );
}
