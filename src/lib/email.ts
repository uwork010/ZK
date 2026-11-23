import { Resend } from "resend";
import type { ContactInput } from "@/lib/contact-schema";

let resendClient: Resend | null = null;

function getClient() {
  if (!resendClient) {
    const key = process.env.RESEND_API_KEY;
    if (!key) throw new Error("RESEND_API_KEY is not set");
    resendClient = new Resend(key);
  }
  return resendClient;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendContactEmail(input: ContactInput) {
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";
  if (!to) throw new Error("CONTACT_TO_EMAIL is not set");

  const html = `
    <h2>New website contact</h2>
    <p><strong>From:</strong> ${escapeHtml(input.name)} &lt;${escapeHtml(input.email)}&gt;</p>
    ${input.company ? `<p><strong>Company:</strong> ${escapeHtml(input.company)}</p>` : ""}
    ${input.projectType ? `<p><strong>Project type:</strong> ${escapeHtml(input.projectType)}</p>` : ""}
    ${input.budget ? `<p><strong>Estimated budget:</strong> ${escapeHtml(input.budget)}</p>` : ""}
    <p><strong>Project details:</strong></p>
    <pre style="white-space:pre-wrap;font-family:ui-sans-serif,system-ui,sans-serif">${escapeHtml(input.message)}</pre>
  `;

  const text = [
    "New website contact",
    "",
    `From: ${input.name} <${input.email}>`,
    ...(input.company ? [`Company: ${input.company}`] : []),
    ...(input.projectType ? [`Project type: ${input.projectType}`] : []),
    ...(input.budget ? [`Estimated budget: ${input.budget}`] : []),
    "",
    `Project details:\n${input.message}`,
    "",
  ].join("\n");

  const result = await getClient().emails.send({
    from,
    to,
    replyTo: input.email,
    subject: `Website contact — ${input.name}`,
    html,
    text,
  });

  if (result.error) {
    throw new Error(result.error.message ?? "Email send failed");
  }
  return result.data;
}
