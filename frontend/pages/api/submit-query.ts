// pages/api/submit-query.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { name, email, phone, message, preferred_plan, source } = req.body;

    // Log the data for debugging purposes
    console.log("Form submission received:", {
      name,
      email,
      phone,
      message,
      preferred_plan,
      source,
      timestamp: new Date().toISOString()
    });

    // In a real app without database, you might send an email here using SendGrid or Resend

    return res.status(200).json({
      success: true,
      message: "Form submitted successfully",
      data: { name, email }
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
