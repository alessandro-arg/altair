"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { z } from "zod";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.email("Please enter a valid email"),
  subject: z.string().min(3, "Please enter a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSending, setIsSending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    try {
      setIsSending(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
        signal: controller.signal,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      toast.success("Message sent successfully!", {
        style: {
          "--normal-bg":
            "color-mix(in oklab, oklch(0.7 0.15 160) 10%, oklch(0.25 0.012 264.34))",
          "--normal-text": "oklch(0.7 0.15 160)",
          "--normal-border": "oklch(0.7 0.15 160)",
        } as React.CSSProperties,
      });
      reset();
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        toast.error("Request timed out. Please try again.", {
          style: {
            "--normal-bg":
              "color-mix(in oklab, light-dark(var(--color-amber-600), var(--color-amber-400)) 10%, var(--background))",
            "--normal-text":
              "light-dark(var(--color-amber-600), var(--color-amber-400))",
            "--normal-border":
              "light-dark(var(--color-amber-600), var(--color-amber-400))",
          } as React.CSSProperties,
        });
      } else {
        toast.error(
          error instanceof Error
            ? error.message
            : toast.error("Oops, there was an error processing your request.", {
                style: {
                  "--normal-bg":
                    "color-mix(in oklab, var(--destructive) 10%, var(--background))",
                  "--normal-text": "var(--destructive)",
                  "--normal-border": "var(--destructive)",
                } as React.CSSProperties,
              }),
        );
      }
    } finally {
      clearTimeout(timeout);
      setIsSending(false);
    }
  };

  return (
    <div className="rounded-xl border border-white/[0.07] bg-[oklch(0.25_0.012_264.34)] p-6 sm:p-8">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="space-y-1.5 mb-2">
            <label className="text-xs font-medium text-white/60">Name</label>
            <input
              type="text"
              placeholder="Your name"
              {...register("name")}
              className="w-full h-9 rounded-lg border border-white/8 bg-white/5 px-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-[oklch(0.6562_0.1826_262.74)]/50 focus:border-[oklch(0.6562_0.1826_262.74)]/40 transition-all"
            />
            <p className="pl-3 min-h-4 text-xs text-red-400">
              {errors.name?.message ?? ""}
            </p>
          </div>

          <div className="space-y-1.5 mb-2">
            <label className="text-xs font-medium text-white/60">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              {...register("email")}
              className="w-full h-9 rounded-lg border border-white/8 bg-white/5 px-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-[oklch(0.6562_0.1826_262.74)]/50 focus:border-[oklch(0.6562_0.1826_262.74)]/40 transition-all"
            />
            <p className="pl-3 min-h-4 text-xs text-red-400">
              {errors.email?.message ?? ""}
            </p>
          </div>
        </div>

        <div className="space-y-1.5 mb-4">
          <label className="text-xs font-medium text-white/60">Subject</label>
          <input
            type="text"
            placeholder="How can I help?"
            {...register("subject")}
            className="w-full h-9 rounded-lg border border-white/8 bg-white/5 px-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-[oklch(0.6562_0.1826_262.74)]/50 focus:border-[oklch(0.6562_0.1826_262.74)]/40 transition-all"
          />
          <p className="pl-3 min-h-4 text-xs text-red-400">
            {errors.subject?.message ?? ""}
          </p>
        </div>

        <div className="space-y-1.5 mb-4">
          <label className="text-xs font-medium text-white/60">Message</label>
          <textarea
            rows={5}
            placeholder="Tell me more..."
            {...register("message")}
            className="w-full rounded-lg border border-white/8 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-[oklch(0.6562_0.1826_262.74)]/50 focus:border-[oklch(0.6562_0.1826_262.74)]/40 transition-all resize-none"
          />
          <p className="pl-3 min-h-4 text-xs text-red-400">
            {errors.message?.message ?? ""}
          </p>
        </div>

        <Button
          type="submit"
          size="sm"
          disabled={isSending}
          className="w-full h-10 bg-[oklch(0.6562_0.1826_262.74)] hover:bg-[oklch(0.7_0.18_262.74)] text-white text-sm shadow-lg shadow-[oklch(0.6562_0.1826_262.74)]/20 disabled:opacity-50"
        >
          {isSending ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}
