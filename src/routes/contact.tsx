import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Instagram, Twitter, Facebook, MessageCircle } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { FadeUp } from "@/components/FadeUp";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Verdant Acres" },
      { name: "description", content: "Plan a farm visit, place a wholesale order, or ask us anything. We respond within one business day." },
      { property: "og:title", content: "Contact Verdant Acres" },
      { property: "og:description", content: "Get in touch — farm visits, wholesale, and general inquiries." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <header className="pt-16 pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeUp className="max-w-3xl flex flex-col gap-5">
            <span className="text-xs uppercase tracking-[0.18em] text-harvest font-semibold">Get in touch</span>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-balance">
              Come visit, or just say hello.
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
              We respond within one business day. Wholesale and press welcome.
            </p>
          </FadeUp>
        </div>
      </header>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <FadeUp className="lg:col-span-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="bg-card ring-1 ring-border rounded-3xl p-8 md:p-10 shadow-soft flex flex-col gap-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Name" name="name" />
                <Field label="Email" name="email" type="email" />
              </div>
              <Field label="Subject" name="subject" />
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">Message</label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                />
              </div>
              <button
                type="submit"
                className="self-start bg-harvest text-harvest-foreground px-6 py-3 rounded-full text-sm font-semibold hover:-translate-y-0.5 transition-transform"
              >
                {sent ? "Message sent ✓" : "Send message"}
              </button>
            </form>
          </FadeUp>

          {/* Info */}
          <FadeUp delay={0.15} className="lg:col-span-2 flex flex-col gap-6">
            <InfoCard icon={MapPin} title="Visit the farm" lines={["1282 Meadow Lane", "Green Valley, CA 90210"]} />
            <InfoCard icon={Mail} title="Email" lines={["hello@verdantacres.farm"]} />
            <InfoCard icon={Phone} title="Phone" lines={["+1 (555) 482-9011"]} />
            <InfoCard
              icon={Clock}
              title="Working hours"
              lines={["Mon – Fri · 8am – 6pm", "Sat – Sun · 9am – 4pm (tours)"]}
            />
            <div className="flex gap-3 pt-2">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="size-10 grid place-items-center rounded-full bg-card border border-border hover:bg-harvest hover:text-harvest-foreground hover:border-harvest transition-colors">
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* Map */}
        <FadeUp className="mx-auto max-w-7xl px-6 lg:px-12 mt-16">
          <div className="rounded-3xl overflow-hidden ring-1 ring-border h-[420px] shadow-soft">
            <iframe
              title="Farm location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-122.55%2C38.25%2C-122.40%2C38.35&amp;layer=mapnik"
              className="w-full h-full grayscale-[20%]"
              loading="lazy"
            />
          </div>
        </FadeUp>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-ring text-sm"
      />
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  lines,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  lines: string[];
}) {
  return (
    <div className="flex gap-4 p-5 rounded-2xl bg-card ring-1 ring-border hover:shadow-soft transition-shadow">
      <div className="size-10 rounded-full bg-leaf-soft text-harvest grid place-items-center shrink-0">
        <Icon className="size-4" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">{title}</p>
        {lines.map((l, i) => (
          <p key={i} className="text-sm text-foreground">{l}</p>
        ))}
      </div>
    </div>
  );
}
