import { createFileRoute } from "@tanstack/react-router";
import { Sprout, Truck, Lightbulb, Droplets, Beef } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { FadeUp } from "@/components/FadeUp";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Verdant Acres" },
      { name: "description", content: "Organic farming, food delivery, agricultural consulting, livestock care and modern irrigation systems." },
      { property: "og:title", content: "Verdant Acres Services" },
      { property: "og:description", content: "From organic crops to delivery and consulting — a full-spectrum farming partner." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Sprout, title: "Organic Farming", desc: "Certified-organic crop cultivation using regenerative methods that rebuild soil health season after season." },
  { icon: Truck, title: "Food Delivery", desc: "Direct-to-door subscription boxes within 24 hours of harvest — across the region, year round." },
  { icon: Lightbulb, title: "Agricultural Consulting", desc: "Transition your operation toward regenerative practices with our hands-on advisory program." },
  { icon: Beef, title: "Livestock Farming", desc: "Pasture-raised cattle and poultry, rotational grazing and high-welfare standards." },
  { icon: Droplets, title: "Modern Irrigation", desc: "Precision drip and sensor-driven water systems that cut consumption by up to 60%." },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <header className="pt-16 pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeUp className="max-w-3xl flex flex-col gap-5">
            <span className="text-xs uppercase tracking-[0.18em] text-harvest font-semibold">What We Do</span>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-balance">
              A full-spectrum farming partner.
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
              From seed to shelf to soil consulting — five services that keep our farm and yours thriving.
            </p>
          </FadeUp>
        </div>
      </header>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <FadeUp key={s.title} delay={(i % 3) * 0.08}>
              <div className="group p-8 rounded-2xl bg-card ring-1 ring-border hover:shadow-soft hover:-translate-y-1 transition-all duration-500 h-full flex flex-col gap-5">
                <div className="size-12 rounded-full bg-leaf-soft text-harvest grid place-items-center group-hover:bg-harvest group-hover:text-harvest-foreground transition-colors">
                  <s.icon className="size-5" />
                </div>
                <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <a href="#" className="mt-auto text-xs uppercase tracking-widest font-semibold text-harvest border-b border-leaf/40 pb-1 w-fit hover:border-harvest transition-colors">
                  Learn more →
                </a>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
