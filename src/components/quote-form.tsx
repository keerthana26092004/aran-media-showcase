import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { business, whatsappLink } from "@/data/site";
import { services } from "@/data/services";

const quoteSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please enter your name (at least 2 characters)." })
    .max(100, { message: "Name must be less than 100 characters." }),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\s-]{8,18}$/, { message: "Enter a valid phone number, e.g. +91 82208 98006." }),
  email: z
    .string()
    .trim()
    .max(255, { message: "Email must be less than 255 characters." })
    .email({ message: "Enter a valid email address." })
    .or(z.literal("")),
  service: z.string().min(1, { message: "Please choose the service you are interested in." }),
  budget: z.string().max(60, { message: "Keep this under 60 characters." }).optional(),
  message: z
    .string()
    .trim()
    .min(10, { message: "Please describe your requirement in at least 10 characters." })
    .max(1000, { message: "Message must be less than 1000 characters." }),
});

type QuoteValues = z.infer<typeof quoteSchema>;

const serviceOptions = [
  ...services.map((service) => service.name),
  "Combined package",
  "Something else",
];

interface QuoteFormProps {
  /** Shown as the form's accessible heading. */
  title?: string;
  description?: string;
  showBudget?: boolean;
}

/** Lead capture form shared by the Contact and Get Quote pages. */
export function QuoteForm({
  title = "Request a quotation",
  description = "Fill in your requirement and we will respond the same working day.",
  showBudget = false,
}: QuoteFormProps) {
  const [submitted, setSubmitted] = useState<QuoteValues | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { name: "", phone: "", email: "", service: "", budget: "", message: "" },
  });

  const onSubmit = async (values: QuoteValues) => {
    // No backend is connected yet: the enquiry is confirmed on screen and the
    // visitor is offered a pre-filled WhatsApp message to reach the team.
    await new Promise((resolve) => setTimeout(resolve, 500));
    setSubmitted(values);
    reset();
  };

  const fieldClass =
    "h-12 rounded-[10px] border-input bg-background text-base placeholder:text-muted-foreground";
  const errorClass = "border-destructive focus-visible:ring-destructive";

  if (submitted) {
    const summary = `Hello ${business.shortName}, I am ${submitted.name}. Service: ${submitted.service}. ${submitted.message}`;
    return (
      <div
        role="status"
        className="flex flex-col gap-4 rounded-2xl border border-success/40 bg-success/10 p-6 shadow-e1"
      >
        <h2 className="text-2xl text-foreground">Thank you, {submitted.name}!</h2>
        <p className="text-base text-foreground">
          Your enquiry about <strong>{submitted.service}</strong> has been recorded. Our team will
          call you on {submitted.phone} shortly. For an instant reply, continue the conversation on
          WhatsApp.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <a href={whatsappLink(summary)} target="_blank" rel="noreferrer noopener">
              Continue on WhatsApp
            </a>
          </Button>
          <Button variant="outline" onClick={() => setSubmitted(null)}>
            Send another enquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      aria-labelledby="quote-form-title"
      className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 shadow-e1 md:p-8"
    >
      <div className="flex flex-col gap-2">
        <h2 id="quote-form-title" className="text-2xl text-foreground">
          {title}
        </h2>
        <p className="text-base text-muted-foreground">{description}</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="quote-name">
            Full name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="quote-name"
            autoComplete="name"
            placeholder="Your name"
            className={`${fieldClass} ${errors.name ? errorClass : ""}`}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "quote-name-error" : undefined}
            {...register("name")}
          />
          {errors.name ? (
            <p id="quote-name-error" className="text-sm font-medium text-destructive">
              {errors.name.message}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="quote-phone">
            Phone / WhatsApp <span className="text-destructive">*</span>
          </Label>
          <Input
            id="quote-phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+91 82208 98006"
            className={`${fieldClass} ${errors.phone ? errorClass : ""}`}
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={errors.phone ? "quote-phone-error" : undefined}
            {...register("phone")}
          />
          {errors.phone ? (
            <p id="quote-phone-error" className="text-sm font-medium text-destructive">
              {errors.phone.message}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="quote-email">Email (optional)</Label>
          <Input
            id="quote-email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={`${fieldClass} ${errors.email ? errorClass : ""}`}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "quote-email-error" : undefined}
            {...register("email")}
          />
          {errors.email ? (
            <p id="quote-email-error" className="text-sm font-medium text-destructive">
              {errors.email.message}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="quote-service">
            Service interested in <span className="text-destructive">*</span>
          </Label>
          <select
            id="quote-service"
            className={`${fieldClass} w-full border px-3 ${errors.service ? errorClass : ""}`}
            aria-invalid={errors.service ? true : undefined}
            aria-describedby={errors.service ? "quote-service-error" : undefined}
            {...register("service")}
          >
            <option value="">Select a service</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.service ? (
            <p id="quote-service-error" className="text-sm font-medium text-destructive">
              {errors.service.message}
            </p>
          ) : null}
        </div>

        {showBudget ? (
          <div className="flex flex-col gap-2 sm:col-span-2">
            <Label htmlFor="quote-budget">Event date or approximate budget (optional)</Label>
            <Input
              id="quote-budget"
              placeholder="e.g. 12 September, or ₹25,000"
              className={fieldClass}
              {...register("budget")}
            />
          </div>
        ) : null}

        <div className="flex flex-col gap-2 sm:col-span-2">
          <Label htmlFor="quote-message">
            Your requirement <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="quote-message"
            rows={5}
            placeholder="Tell us the occasion, quantity, sizes or coverage you need."
            className={`min-h-[120px] rounded-[10px] text-base ${errors.message ? errorClass : ""}`}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? "quote-message-error" : undefined}
            {...register("message")}
          />
          {errors.message ? (
            <p id="quote-message-error" className="text-sm font-medium text-destructive">
              {errors.message.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <Loader2 aria-hidden="true" className="animate-spin" />
          ) : (
            <Send aria-hidden="true" />
          )}
          {isSubmitting ? "Sending…" : "Submit enquiry"}
        </Button>
        <p className="text-sm text-muted-foreground">
          Or call{" "}
          <a href={business.phoneHref} className="font-semibold text-brand hover:underline">
            {business.phoneDisplay}
          </a>
        </p>
      </div>
    </form>
  );
}
