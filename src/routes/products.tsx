import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { FadeUp } from "@/components/FadeUp";
import tomatoes from "@/assets/product-tomatoes.jpg";
import chard from "@/assets/product-chard.jpg";
import milk from "@/assets/product-milk.jpg";
import berries from "@/assets/product-berries.jpg";
import grain from "@/assets/product-grain.jpg";
import cheese from "@/assets/product-cheese.jpg";
import carrots from "@/assets/product-carrots.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Verdant Acres Farm Store" },
      { name: "description", content: "Shop fresh organic vegetables, fruits, dairy and grains. Harvested today, delivered tomorrow." },
      { property: "og:title", content: "Shop Verdant Acres" },
      { property: "og:description", content: "Fresh organic produce, dairy and grains delivered direct from our farm." },
      { property: "og:image", content: tomatoes },
    ],
  }),
  component: ProductsPage,
});

const categories = ["All", "Vegetables", "Fruits", "Dairy", "Grains"] as const;
type Category = (typeof categories)[number];

type Product = { img: string; name: string; desc: string; price: string; category: Exclude<Category, "All"> };

const allProducts: Product[] = [
  { img: tomatoes, name: "Heritage Tomatoes", desc: "Mixed variety, 1.5kg", price: "$18.00", category: "Vegetables" },
  { img: chard, name: "Rainbow Chard", desc: "Hydroponic, 1 bunch", price: "$6.50", category: "Vegetables" },
  { img: carrots, name: "Garden Carrots", desc: "Stem-on, 1kg", price: "$7.50", category: "Vegetables" },
  { img: berries, name: "Mixed Berries", desc: "Hand-picked, 500g", price: "$14.00", category: "Fruits" },
  { img: milk, name: "Raw A2 Jersey Milk", desc: "Unpasteurized, 1L", price: "$9.00", category: "Dairy" },
  { img: cheese, name: "Aged Farmhouse Cheese", desc: "12-month wheel, 250g", price: "$22.00", category: "Dairy" },
  { img: grain, name: "Stone-Milled Wheat", desc: "Whole grain, 2kg", price: "$11.00", category: "Grains" },
  { img: grain, name: "Heritage Oats", desc: "Steel-cut, 1kg", price: "$8.50", category: "Grains" },
];

function ProductsPage() {
  const [active, setActive] = useState<Category>("All");
  const filtered = useMemo(
    () => (active === "All" ? allProducts : allProducts.filter((p) => p.category === active)),
    [active]
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <header className="pt-16 pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeUp className="max-w-3xl flex flex-col gap-5">
            <span className="text-xs uppercase tracking-[0.18em] text-harvest font-semibold">Farm Store</span>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-balance">
              This week's harvest.
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
              Hand-picked at peak ripeness, delivered to your door within 24 hours.
            </p>
          </FadeUp>
        </div>
      </header>

      {/* Filters */}
      <div className="sticky top-16 z-40 glass border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-4 flex gap-2 overflow-x-auto">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest transition-all whitespace-nowrap ${
                active === c
                  ? "bg-harvest text-harvest-foreground"
                  : "bg-card ring-1 ring-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((p, i) => (
              <FadeUp key={`${p.name}-${i}`} delay={(i % 4) * 0.06}>
                <div className="group flex flex-col gap-4 p-4 rounded-2xl bg-card ring-1 ring-border hover:shadow-soft hover:-translate-y-1 transition-all duration-500 h-full">
                  <div className="w-full aspect-square rounded-xl overflow-hidden bg-muted relative">
                    <img src={p.img} alt={p.name} width={800} height={800} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <span className="absolute top-3 left-3 glass-card text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-full">{p.category}</span>
                  </div>
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <h3 className="font-medium">{p.name}</h3>
                      <p className="text-xs text-muted-foreground">{p.desc}</p>
                    </div>
                    <span className="text-sm font-semibold whitespace-nowrap">{p.price}</span>
                  </div>
                  <button className="w-full py-2.5 bg-foreground text-background rounded-lg text-sm font-medium hover:bg-harvest transition-colors mt-auto">
                    Add to Cart
                  </button>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
