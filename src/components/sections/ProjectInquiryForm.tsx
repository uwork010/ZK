"use client";

import { useRef, useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { BUDGET_RANGES, PROJECT_TYPES } from "@/lib/contact-options";
import {
  validateContactForm,
  type ContactFieldErrors,
} from "@/lib/contact-validation";

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "ok" }
  | { kind: "error"; message: string };

const fieldClass =
  "min-h-12 w-full rounded-lg border border-white/[0.12] bg-[#080f1c]/75 px-4 py-3 text-sm text-text-secondary outline-none transition-colors placeholder:text-text-placeholder focus:border-primary-light/60 focus:bg-[#080f1c] focus:ring-2 focus:ring-primary-light/15 disabled:cursor-not-allowed disabled:opacity-60";

export default function ProjectInquiryForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const submitting = useRef(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    setErrors({});

    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());
    const result = validateContactForm(values);
    if (!result.ok) {
      setErrors(result.errors);
      return;
    }

    submitting.current = true;
    setStatus({ kind: "sending" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      const body = (await response.json().catch(() => ({}))) as {
        error?: string;
        details?: ContactFieldErrors;
      };

      if (!response.ok) {
        if (body.details) setErrors(body.details);
        setStatus({
          kind: "error",
          message:
            body.error === "Invalid form data"
              ? "Please review the highlighted fields and try again."
              : "We couldn’t send your inquiry right now. Please email us directly at uwork428@gmail.com.",
        });
        return;
      }

      form.reset();
      setStatus({ kind: "ok" });
    } catch {
      setStatus({
        kind: "error",
        message:
          "We couldn’t reach the inquiry service. Please email us directly at uwork428@gmail.com.",
      });
    } finally {
      submitting.current = false;
    }
  }

  if (status.kind === "ok") {
    return (
      <div
        role="status"
        className="flex min-h-[22rem] flex-col items-center justify-center border border-primary-light/25 bg-primary-light/[0.035] p-8 text-center sm:p-12"
      >
        <CheckCircle2 className="text-primary-light" size={34} />
        <h3 className="mt-5 font-display text-xl font-semibold text-white">
          Thanks for reaching out.
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-6 text-text-secondary">
          Your project inquiry has been sent. We’ll be in touch as soon as we can.
        </p>
        <button
          type="button"
          onClick={() => setStatus({ kind: "idle" })}
          className="mt-6 min-h-11 text-xs font-semibold uppercase tracking-[0.16em] text-primary-light underline-offset-4 transition-colors hover:text-white hover:underline"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  const sending = status.kind === "sending";

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      aria-label="Project inquiry form"
      className="border border-white/[0.1] bg-[#0a1322]/75 p-5 shadow-[0_24px_70px_rgba(1,8,19,.25)] sm:p-7 lg:p-8"
    >
      <div className="mb-7 flex items-start justify-between gap-5 border-b border-white/[0.09] pb-5">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-primary-light">Project inquiry</p>
          <h3 className="mt-2 font-display text-xl font-semibold text-white sm:text-2xl">Tell us what you have in mind.</h3>
        </div>
        <span aria-hidden="true" className="hidden font-mono text-[10px] text-text-placeholder sm:block">01 / 01</span>
      </div>

      <div className="grid gap-x-4 gap-y-5 sm:grid-cols-2">
        <Field
          id="inquiry-name"
          name="name"
          label="Full Name"
          placeholder="Your name"
          autoComplete="name"
          required
          disabled={sending}
          error={errors.name?.[0]}
        />
        <Field
          id="inquiry-email"
          name="email"
          label="Work Email"
          placeholder="you@company.com"
          type="email"
          autoComplete="email"
          required
          disabled={sending}
          error={errors.email?.[0]}
        />
        <Field
          id="inquiry-company"
          name="company"
          label="Company / Organization"
          placeholder="Where you work (optional)"
          autoComplete="organization"
          disabled={sending}
          error={errors.company?.[0]}
        />
        <SelectField
          id="inquiry-project-type"
          name="projectType"
          label="Project Type"
          options={PROJECT_TYPES}
          disabled={sending}
          error={errors.projectType?.[0]}
        />
        <SelectField
          id="inquiry-budget"
          name="budget"
          label="Estimated Budget"
          options={BUDGET_RANGES}
          disabled={sending}
          error={errors.budget?.[0]}
        />
        <div className="sm:col-span-2">
          <label
            htmlFor="inquiry-message"
            className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.15em] text-text-label"
          >
            Project Details <span className="text-primary-light" aria-hidden="true">*</span>
            <span className="sr-only"> (required)</span>
          </label>
          <textarea
            id="inquiry-message"
            name="message"
            rows={5}
            required
            disabled={sending}
            placeholder="A little about your goals, challenge, or idea..."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "inquiry-message-error" : undefined}
            className={`${fieldClass} min-h-36 resize-y`}
          />
          {errors.message && <FieldError id="inquiry-message-error" message={errors.message[0]} />}
        </div>
      </div>

      <div className="absolute h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="inquiry-website">Leave this empty</label>
        <input id="inquiry-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status.kind === "error" && (
        <div
          role="alert"
          className="mt-5 flex items-start gap-2 border border-red-400/25 bg-red-400/[0.05] p-3 text-sm leading-6 text-red-200"
        >
          <AlertCircle size={16} className="mt-1 shrink-0" />
          <span>{status.message}</span>
        </div>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-[10px] leading-5 text-text-muted">
          Your details are only used to respond to this inquiry.
        </p>
        <button
          type="submit"
          disabled={sending}
          className="group inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-xs font-bold uppercase tracking-[0.12em] text-galaxy-darker transition-colors hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {sending ? (
            <>
              <Loader2 size={15} className="animate-spin" />
              Sending inquiry…
            </>
          ) : (
            <>
              <Send size={14} className="transition-transform group-hover:translate-x-0.5" />
              Send Project Inquiry
            </>
          )}
        </button>
      </div>
    </form>
  );
}

function Field({
  id,
  name,
  label,
  placeholder,
  type = "text",
  autoComplete,
  required = false,
  disabled,
  error,
}: {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  type?: "text" | "email";
  autoComplete?: string;
  required?: boolean;
  disabled: boolean;
  error?: string;
}) {
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.15em] text-text-label">
        {label} {required && <><span className="text-primary-light" aria-hidden="true">*</span><span className="sr-only"> (required)</span></>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        disabled={disabled}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={fieldClass}
      />
      {error && <FieldError id={errorId} message={error} />}
    </div>
  );
}

function SelectField({
  id,
  name,
  label,
  options,
  disabled,
  error,
}: {
  id: string;
  name: string;
  label: string;
  options: readonly string[];
  disabled: boolean;
  error?: string;
}) {
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.15em] text-text-label">
        {label} <span className="text-text-muted">(optional)</span>
      </label>
      <select
        id={id}
        name={name}
        disabled={disabled}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`${fieldClass} appearance-none`}
      >
        <option value="" className="bg-galaxy-dark text-text-placeholder">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option} className="bg-galaxy-dark text-text-primary">
            {option}
          </option>
        ))}
      </select>
      {error && <FieldError id={errorId} message={error} />}
    </div>
  );
}

function FieldError({ id, message }: { id: string; message: string }) {
  return <p id={id} className="mt-1.5 text-xs text-red-300">{message}</p>;
}
