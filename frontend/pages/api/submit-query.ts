// pages/api/submit-query.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().optional(),
  preferred_plan: z.string().optional(),
  source: z.string().optional()
});

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_SERVICE_ROLE = process.env.SUPABASE_SERVICE_ROLE!;

const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE, {
  auth: { persistSession: false }
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const parsed = schema.parse(req.body);

    // Basic IP-based rate-limiting idea (improve in prod)
    // const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    const { data, error } = await supabaseAdmin
      .from("queries")
      .insert([{ ...parsed }])
      .select()
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      return res.status(500).json({ error: "Database error" });
    }

    // Optional: trigger notification (SendGrid/Slack) here

    return res.status(200).json({ success: true, data });
  } catch (err: any) {
    if (err?.issues) {
      return res.status(400).json({ error: err.issues?.[0]?.message || "Validation error" });
    }
    console.error(err);
    return res.status(500).json({ error: "Internal error" });
  }
}
