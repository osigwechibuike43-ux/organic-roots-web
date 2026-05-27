import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Sprout, Truck, ShieldCheck } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { FloatingLeaves } from "@/components/FloatingLeaves";
import { FadeUp } from "@/components/FadeUp";
import heroImg from "@/assets/hero-fields.jpg";
import tomatoes from "@/assets/product-tomatoes.jpg";
import chard from "@/assets/product-chard.jpg";
import milk from "@/assets/product-milk.jpg";
import berries from "@/assets/product-berries.jpg";
import storyImg from "@/assets/story-farmer.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Verdant Acres — Fresh Organic Foods From Our Farm" },
      { name: "description", content: "Regenerative organic farming delivering nutrient-dense produce from our fields to your table in under 24 hours." },
      { property: "og:title", content: "Verdant Acres — Fresh Organic Foods From Our Farm" },
      { property: "og:description", content: "Fresh organic produce, dairy and grains from our family farm." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: 1240, suffix: "", label: "Acres Managed" },
  { value: 42, suffix: "", label: "Local Farmers" },
  { value: 85, suffix: "k", label: "Products Sold" },
  { value: 24, suffix: "h", label: "Farm to Door" },
];

const products = [
  { img: tomatoes, name: "Heritage Tomatoes", desc: "Mixed variety, 1.5kg box", price: "$18.00" },
  { img: chard, name: "Rainbow Chard", desc: "Hydroponically grown", price: "$6.50" },
  { img: milk, name: "Raw A2 Jersey Milk", desc: "Unpasteurized, 1L", price: "$9.00" },
  { img: berries, name: "Mixed Heritage Berries", desc: "Hand-picked, 500g", price: "$14.00" },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-leaf-soft">
      <SiteNav />

      {/* Hero */}
      <header className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32">
        <FloatingLeaves />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-8"
          >
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-leaf-soft px-3 py-1 text-xs font-semibold tracking-wide text-harvest ring-1 ring-inset ring-leaf/20">
              <Sprout className="size-3.5" /> 2026 Harvest Now Live
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground text-balance leading-[1.05] max-w-[20ch]">
              Fresh Organic Foods From Our Farm
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-[52ch] text-pretty">
              Combining regenerative agriculture with precision logistics to deliver nutrient-dense produce from our fields to your table in under twenty-four hours.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/products" className="group bg-harvest text-harvest-foreground px-6 py-3 rounded-full text-sm font-semibold ring-1 ring-harvest hover:-translate-y-0.5 transition-transform inline-flex items-center gap-2">
                Shop Now
                <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link to="/contact" className="group flex items-center gap-2 px-6 py-3 text-sm font-semibold text-foreground hover:bg-foreground/5 rounded-full transition-colors">
                <span className="size-4 flex items-center justify-center shrink-0">
                  <span className="size-1.5 bg-foreground rounded-full" />
                </span>
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Hero media — image with subtle video-feel overlay */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-14 mx-auto max-w-7xl px-6 lg:px-12"
        >
          <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden ring-1 ring-border shadow-soft">
            <img
              src={heroImg}
              alt="Organic crop fields at sunrise"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            {/* Animated tractor */}
            <div className="absolute bottom-6 left-0 right-0 h-12 pointer-events-none">
              <div className="animate-drive text-3xl">🚜</div>
            </div>
            {/* Floating bird */}
            <div className="absolute top-10 left-0 right-0 h-8 pointer-events-none">
              <div className="animate-fly text-lg opacity-70">🕊️</div>
            </div>
            {/* Glass badge */}
            <div className="absolute bottom-6 right-6 glass-card rounded-2xl p-4 max-w-[220px] hidden md:block">
              <p className="text-[10px] uppercase tracking-widest text-harvest font-bold mb-1">Live Conditions</p>
              <p className="text-xl font-semibold text-soil">72°F <span className="text-xs font-normal italic">Sunny</span></p>
              <p className="text-[10px] mt-1 text-muted-foreground">Perfect for today's harvest.</p>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Stats */}
      <section className="bg-soil py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
            {stats.map((s, i) => (
              <FadeUp key={i} delay={i * 0.1} className="flex flex-col gap-1 pl-6 first:pl-0">
                <span className="text-4xl md:text-5xl font-semibold text-cream leading-none">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </span>
                <span className="text-[11px] uppercase tracking-[0.18em] text-leaf font-semibold mt-2">{s.label}</span>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeUp className="flex items-end justify-between mb-12 flex-wrap gap-6">
            <div className="flex flex-col gap-3 max-w-xl">
              <span className="text-xs uppercase tracking-[0.18em] text-harvest font-semibold">Featured Produce</span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">This week from the field</h2>
              <p className="text-sm text-muted-foreground">Selected based on peak nutritional density and soil maturity.</p>
            </div>
            <Link to="/products" className="text-sm font-semibold text-harvest border-b-2 border-leaf/40 pb-1 hover:border-harvest transition-colors">
              View Entire Store →
            </Link>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p, i) => (
              <FadeUp key={p.name} delay={i * 0.08}>
                <div className="group flex flex-col gap-4 p-4 rounded-2xl bg-card ring-1 ring-border hover:shadow-soft hover:-translate-y-1 transition-all duration-500">
                  <div className="w-full aspect-square rounded-xl overflow-hidden bg-muted">
                    <img src={p.img} alt={p.name} width={800} height={800} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-foreground">{p.name}</h3>
                      <p className="text-xs text-muted-foreground">{p.desc}</p>
                    </div>
                    <span className="text-sm font-semibold">{p.price}</span>
                  </div>
                  <button className="w-full py-2.5 bg-foreground text-background rounded-lg text-sm font-medium hover:bg-harvest transition-colors">
                    Add to Cart
                  </button>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Story / About teaser */}
      <section className="py-24 lg:py-32 bg-leaf-soft/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeUp>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-border shadow-soft">
                <img src={storyImg} alt="A farmer's hands holding rich soil with a sprout" width={1200} height={1500} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-4 md:-right-8 glass-card rounded-2xl p-6 max-w-[240px]">
                <p className="text-sm italic text-soil leading-relaxed">
                  "Nature doesn't hurry, yet everything is accomplished."
                </p>
                <p className="text-[10px] mt-3 uppercase tracking-widest text-muted-foreground font-semibold">Arthur Reed, Founder</p>
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={0.15} className="flex flex-col gap-8">
            <span className="text-xs uppercase tracking-[0.18em] text-harvest font-semibold">Our Mission</span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
              Nurturing the earth for generations.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              We believe professional agriculture should respect the delicate balance of the ecosystem. Our methods combine century-old wisdom with modern sustainable technology.
            </p>
            <div className="flex flex-col gap-5">
              {[
                { icon: Sprout, title: "Regenerative Farming", desc: "Restoring soil health through carbon sequestration and diverse rotation." },
                { icon: ShieldCheck, title: "Certified Organic", desc: "Zero synthetic chemistry, third-party audited from seed to shelf." },
                { icon: Truck, title: "Zero-Mile Ethics", desc: "Direct-to-door delivery in under 24 hours of harvest." },
              ].map((f, i) => (
                <div key={i} className="flex gap-5 items-start group">
                  <div className="size-12 rounded-full bg-background ring-1 ring-border grid place-items-center shrink-0 group-hover:bg-harvest group-hover:text-harvest-foreground transition-colors">
                    <f.icon className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{f.title}</h4>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/about" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-harvest border-b-2 border-leaf/40 pb-1 hover:border-harvest transition-colors">
              Read our full story <ArrowRight className="size-4" />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <FadeUp className="relative overflow-hidden rounded-3xl bg-harvest text-harvest-foreground p-12 md:p-16 text-center">
            <FloatingLeaves />
            <div className="relative flex flex-col gap-6 items-center">
              <MapPin className="size-8 opacity-70" />
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight max-w-2xl text-balance">
                Visit the farm, or have it delivered.
              </h2>
              <p className="text-sm md:text-base opacity-80 max-w-xl text-pretty">
                Open weekends for tours and tastings. Or subscribe to our weekly harvest box.
              </p>
              <div className="flex flex-wrap gap-3 justify-center pt-2">
                <Link to="/contact" className="bg-cream text-harvest px-6 py-3 rounded-full text-sm font-semibold hover:-translate-y-0.5 transition-transform">
                  Plan a visit
                </Link>
                <Link to="/products" className="ring-1 ring-cream/40 px-6 py-3 rounded-full text-sm font-semibold hover:bg-cream/10 transition-colors">
                  Shop the harvest
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
