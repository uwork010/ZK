import { z } from "zod";
import { BUDGET_RANGES, PROJECT_TYPES } from "@/lib/contact-options";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(80),
  email: z.string().trim().email("Invalid email").max(120),
  company: z.string().trim().max(120, "Company must be at most 120 characters").optional().default(""),
  projectType: z.enum(PROJECT_TYPES).or(z.literal("")).optional().default(""),
  budget: z.enum(BUDGET_RANGES).or(z.literal("")).optional().default(""),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
  // Honeypot — bots fill this; humans leave it empty.
  website: z.string().max(1000).optional().default(""),
});

export type ContactInput = z.infer<typeof contactSchema>;
