"use client";

import { useState } from "react";
import { CONTACT } from "@/lib/nav";

type Fields = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

const empty: Fields = { name: "", company: "", email: "", phone: "", message: "" };

const fieldBase =
  "w-full rounded-md border bg-paper px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/70 focus:border-clay focus:outline-none";

export default function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [touched, setTouched] = useState(false);

  const update = (key: keyof Fields) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setFields((f) => ({ ...f, [key]: e.target.value }));

  const missing = (v: string) => touched && v.trim() === "";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched(true);
    const name = fields.name.trim();
    const email = fields.email.trim();
    const message = fields.message.trim();
    if (!name || !email || !message) return;

    const body =
      `Name: ${name}\n` +
      (fields.company.trim() ? `Betrieb: ${fields.company.trim()}\n` : "") +
      `E-Mail: ${email}\n` +
      (fields.phone.trim() ? `Telefon: ${fields.phone.trim()}\n` : "") +
      `\n${message}\n`;

    const href =
      `mailto:${CONTACT.email}` +
      `?subject=${encodeURIComponent("Anfrage über die Website — " + name)}` +
      `&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-1.5 block text-sm font-medium text-ink">
            Name *
          </label>
          <input
            id="cf-name"
            type="text"
            value={fields.name}
            onChange={update("name")}
            placeholder="Ihr Name"
            className={`${fieldBase} ${missing(fields.name) ? "border-clay" : "border-line-strong"}`}
          />
        </div>
        <div>
          <label htmlFor="cf-company" className="mb-1.5 block text-sm font-medium text-ink">
            Betrieb
          </label>
          <input
            id="cf-company"
            type="text"
            value={fields.company}
            onChange={update("company")}
            placeholder="Firma / Innung"
            className={`${fieldBase} border-line-strong`}
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="mb-1.5 block text-sm font-medium text-ink">
            E-Mail *
          </label>
          <input
            id="cf-email"
            type="email"
            value={fields.email}
            onChange={update("email")}
            placeholder="name@betrieb.de"
            className={`${fieldBase} ${missing(fields.email) ? "border-clay" : "border-line-strong"}`}
          />
        </div>
        <div>
          <label htmlFor="cf-phone" className="mb-1.5 block text-sm font-medium text-ink">
            Telefon
          </label>
          <input
            id="cf-phone"
            type="tel"
            value={fields.phone}
            onChange={update("phone")}
            placeholder="Optional"
            className={`${fieldBase} border-line-strong`}
          />
        </div>
      </div>
      <div>
        <label htmlFor="cf-msg" className="mb-1.5 block text-sm font-medium text-ink">
          Ihre Nachricht *
        </label>
        <textarea
          id="cf-msg"
          rows={5}
          value={fields.message}
          onChange={update("message")}
          placeholder="Worum geht es?"
          className={`${fieldBase} resize-y ${missing(fields.message) ? "border-clay" : "border-line-strong"}`}
        />
      </div>
      <div>
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-md bg-clay px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-clay-deep"
        >
          Nachricht absenden <span aria-hidden="true">→</span>
        </button>
        <p className="mt-3 text-xs text-muted">
          Mit dem Absenden öffnet sich Ihr E-Mail-Programm mit der
          vorausgefüllten Nachricht an die Geschäftsstelle.
        </p>
      </div>
    </form>
  );
}
