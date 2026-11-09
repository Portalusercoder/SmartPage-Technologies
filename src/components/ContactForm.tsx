"use client";

import { FormEvent, useMemo, useState } from "react";
import { Button } from "@/components/Button";
import { divisions } from "@/data/site";
import { cx } from "@/lib/utils";

type FormState = "idle" | "loading" | "success" | "error";

const divisionOptions = [
  { value: "technology", label: "Technology" },
  { value: "industries", label: "Industries" },
  { value: "food-beverages", label: "Food & Beverages" },
  { value: "general", label: "General Enquiry" },
] as const;

export function ContactForm() {
  const [division, setDivision] = useState("");
  const [service, setService] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  const serviceOptions = useMemo(() => {
    if (!division || division === "general") return [];
    return (
      divisions.find((d) => d.id === division)?.services.map((s) => ({
        value: s.id,
        label: s.name,
      })) ?? []
    );
  }, [division]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: data.get("fullName"),
          companyName: data.get("companyName"),
          email: data.get("email"),
          phone: data.get("phone"),
          division: data.get("division"),
          service: data.get("service"),
          subject: data.get("subject"),
          message: data.get("message"),
        }),
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        setState("error");
        setMessage(payload.message || "Something went wrong. Please try again.");
        return;
      }

      setState("success");
      setMessage(payload.message || "Your enquiry has been received.");
      form.reset();
      setDivision("");
      setService("");
    } catch {
      setState("error");
      setMessage("Unable to send your enquiry right now. Please email us directly.");
    }
  }

  const fieldClass =
    "w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20";

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="fullName" required>
          <input
            id="fullName"
            name="fullName"
            required
            autoComplete="name"
            className={fieldClass}
            placeholder="Your full name"
          />
        </Field>
        <Field label="Company Name" htmlFor="companyName">
          <input
            id="companyName"
            name="companyName"
            autoComplete="organization"
            className={fieldClass}
            placeholder="Optional"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Business Email" htmlFor="email" required>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
            placeholder="name@company.com"
          />
        </Field>
        <Field label="Phone Number" htmlFor="phone" required>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={fieldClass}
            placeholder="+966 ..."
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Division" htmlFor="division" required>
          <select
            id="division"
            name="division"
            required
            value={division}
            onChange={(e) => {
              setDivision(e.target.value);
              setService("");
            }}
            className={fieldClass}
          >
            <option value="">Select a division</option>
            {divisionOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Service" htmlFor="service">
          <select
            id="service"
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            disabled={!serviceOptions.length}
            className={cx(fieldClass, !serviceOptions.length && "opacity-60")}
          >
            <option value="">
              {division === "general"
                ? "Not applicable"
                : serviceOptions.length
                  ? "Select a service"
                  : "Select a division first"}
            </option>
            {serviceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Subject" htmlFor="subject" required>
        <input
          id="subject"
          name="subject"
          required
          className={fieldClass}
          placeholder="How can we help?"
        />
      </Field>

      <Field label="Message" htmlFor="message" required>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={cx(fieldClass, "resize-y")}
          placeholder="Share a brief overview of your requirements."
        />
      </Field>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" disabled={state === "loading"}>
          {state === "loading" ? "Sending..." : "Send Enquiry"}
        </Button>
        {message ? (
          <p
            role="status"
            className={cx(
              "text-sm",
              state === "success" && "text-emerald-700",
              state === "error" && "text-accent",
            )}
          >
            {message}
          </p>
        ) : null}
      </div>

      <p className="text-xs leading-relaxed text-muted">
        Form submissions are handled by the{" "}
        <code className="rounded bg-surface px-1.5 py-0.5">/api/contact</code>{" "}
        endpoint. Configure{" "}
        <code className="rounded bg-surface px-1.5 py-0.5">CONTACT_WEBHOOK_URL</code>{" "}
        or email delivery credentials to enable production delivery.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block" htmlFor={htmlFor}>
      <span className="mb-2 block text-sm font-medium text-foreground">
        {label}
        {required ? <span className="text-accent"> *</span> : null}
      </span>
      {children}
    </label>
  );
}
