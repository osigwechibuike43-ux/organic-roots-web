import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { FadeUp } from "@/components/FadeUp";
import { FloatingLeaves } from "@/components/FloatingLeaves";
import storyImg from "@/assets/story-farmer.jpg";
import tractor from "@/assets/gallery-tractor.jpg";
import harvestImg from "@/assets/gallery-harvest.jpg";
import sunrise from "@/assets/gallery-sunrise.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Verdant Acres" },
      { name: "description", content: "Four generations of regenerative farming. Meet the family, the methods, and the mission behind Verdant Acres." },
      { property: "og:title", content: "About Verdant Acres" },
      { property: "og:description", content: "Four generations of regenerative organic farming." },
      { property: "og:image", content: storyImg },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  { year: "1894", title: "The first seed", desc: "Great-grandfather Reed breaks ground on 40 acres of Sonoma soil." },
  { year: "1962", title: "Going organic", desc: "Three generations later we abandon synthetic inputs entirely." },
  { year: "2004", title: "Regenerative shift", desc: "Cover cropping, rotational grazing and no-till practices become standard." },
  { year: "2018", title: "Farm to door", desc: "Direct-to-consumer subscription boxes launch across the region." },
  { year: "2026", title: "1,240 acres", desc: "Today we steward over a thousand acres of certified-organic farmland." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <header className="relative overflow-hidden pt-16 pb-24">
        <FloatingLeaves />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <FadeUp className="max-w-3xl flex flex-col gap-6">
            <span className="text-xs uppercase tracking-[0.18em] text-harvest font-semibold">About Us</span>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-balance">
              Four generations of patient stewardship.
            </h1>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl">
              Verdant Acres has been tended by the same family since 1894. We've learned that the best agriculture isn't extracted — it's cultivated.
            </p>
          </FadeUp>
        </div>
      </header>

      {/* Story */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid md:grid-cols-12 gap-10 items-center">
          <FadeUp className="md:col-span-5">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-border shadow-soft">
              <img src={storyImg} alt="Farmer holding rich soil" width={1200} height={1500} loading="lazy" className="w-full h-full object-cover" />
            </div>
          </FadeUp>
          <FadeUp delay={0.15} className="md:col-span-7 flex flex-col gap-5 text-muted-foreground leading-relaxed">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">Soil first, always.</h2>
            <p>
              When Arthur Reed inherited the farm in 1962, conventional agriculture was pushing every farmer toward heavier inputs, bigger machinery, and tighter margins. He went the other way.
            </p>
            <p>
              Today we manage 1,240 acres without a drop of synthetic chemistry. Our methods rebuild topsoil at a measurable pace, sequester carbon, and produce food that genuinely tastes like the soil it came from.
            </p>
            <p>
              We're a working farm, an open campus, and a community kitchen. Come visit — we'll show you what regenerative agriculture actually looks like.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-leaf-soft/40">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <FadeUp className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.18em] text-harvest font-semibold">Our Timeline</span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mt-3">A century in the field</h2>
          </FadeUp>
          <div className="relative pl-8 md:pl-0">
            <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            {timeline.map((t, i) => (
              <FadeUp key={t.year} delay={i * 0.1} className={`relative mb-12 md:flex md:items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="md:w-1/2 md:px-12">
                  <div className="bg-card ring-1 ring-border rounded-2xl p-6 shadow-soft hover:-translate-y-1 transition-transform">
                    <div className="text-xs uppercase tracking-[0.18em] text-harvest font-bold mb-2">{t.year}</div>
                    <h3 className="text-lg font-semibold mb-1">{t.title}</h3>
                    <p className="text-sm text-muted-foreground">{t.desc}</p>
                  </div>
                </div>
                <div className="absolute left-3 md:left-1/2 size-3 rounded-full bg-harvest -translate-x-1/2 ring-4 ring-background" />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Image strip */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-3 gap-4">
          {[tractor, harvestImg, sunrise].map((src, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-border group">
                <img src={src} alt="Farm life" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
