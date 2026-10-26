"use client";

import { useState, FormEvent } from "react";
import styles from "./ContactForm.module.css";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => Promise<void>;
}

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const validateField = (name: keyof ContactFormData, value: string): string | undefined => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 2) return "Name must be at least 2 characters";
        break;
      case "email":
        if (!value.trim()) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Please enter a valid email address";
        break;
      case "subject":
        if (!value.trim()) return "Subject is required";
        if (value.trim().length < 5) return "Subject must be at least 5 characters";
        break;
      case "message":
        if (!value.trim()) return "Message is required";
        if (value.trim().length < 20) return "Message must be at least 20 characters";
        break;
    }
    return undefined;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name as keyof ContactFormData, value);
    if (error) {
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: Partial<ContactFormData> = {};
    let hasErrors = false;

    (Object.keys(formData) as Array<keyof ContactFormData>).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        hasErrors = true;
      }
    });

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    setStatus("submitting");
    setStatusMessage("");

    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || "Failed to send message");
        }
      }

      setStatus("success");
      setStatusMessage("Thanks for reaching out! I will get back to you soon.");
      setFormData(initialFormData);
    } catch (error) {
      setStatus("error");
      setStatusMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.formLabel}>
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className={`${styles.formInput} ${errors.name ? "invalid" : ""}`}
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Your name"
          disabled={status === "submitting"}
          autoComplete="name"
          required
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className={styles.formError} role="alert">
            {errors.name}
          </p>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.formLabel}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={`${styles.formInput} ${errors.email ? "invalid" : ""}`}
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="your@email.com"
          disabled={status === "submitting"}
          autoComplete="email"
          required
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className={styles.formError} role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="subject" className={styles.formLabel}>
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className={`${styles.formInput} ${errors.subject ? "invalid" : ""}`}
          value={formData.subject}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="What is this about?"
          disabled={status === "submitting"}
          required
          aria-invalid={errors.subject ? "true" : "false"}
          aria-describedby={errors.subject ? "subject-error" : undefined}
        />
        {errors.subject && (
          <p id="subject-error" className={styles.formError} role="alert">
            {errors.subject}
          </p>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.formLabel}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className={`${styles.formTextarea} ${errors.message ? "invalid" : ""}`}
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Tell me about your project, role, or question..."
          disabled={status === "submitting"}
          required
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className={styles.formError} role="alert">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className={styles.formSubmit}
        disabled={status === "submitting"}
      >
        {status === "submitting" ? (
          <>
            <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
              <path d="M12 2a10 10 0 0110 10" strokeLinecap="round" />
            </svg>
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>

      {status !== "idle" && (
        <div className={`${styles.formStatus} ${status === "success" ? styles["formStatus--success"] : styles["formStatus--error"]}`} role="status" aria-live="polite">
          <svg className={styles.formStatusIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {status === "success" ? (
              <>
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </>
            ) : (
              <>
                <circle cx="12" cy="12" r="10" />
                <path d="M15 9l-6 6" />
                <path d="M9 9l6 6" />
              </>
            )}
          </svg>
          {statusMessage}
        </div>
      )}
    </form>
  );
}
