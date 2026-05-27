import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { FadeUp } from "@/components/FadeUp";
import tractor from "@/assets/gallery-tractor.jpg";
import harvestImg from "@/assets/gallery-harvest.jpg";
import greenhouse from "@/assets/gallery-greenhouse.jpg";
import livestock from "@/assets/gallery-livestock.jpg";
import sunrise from "@/assets/gallery-sunrise.jpg";
import basket from "@/assets/gallery-basket.jpg";
import berries from "@/assets/product-berries.jpg";
import tomatoes from "@/assets/product-tomatoes.jpg";
import grain from "@/assets/product-grain.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Verdant Acres" },
      { name: "description", content: "Scenes from the farm: crops, harvest season, tractors, greenhouses and livestock." },
      { property: "og:title", content: "Verdant Acres Gallery" },
      { property: "og:description", content: "A visual tour of life on a regenerative organic farm." },
      { property: "og:image", content: sunrise },
    ],
  }),
  component: GalleryPage,
});

const images = [
  { src: sunrise, alt: "Sunrise over the farmland", span: "md:col-span-2 md:row-span-2" },
  { src: tractor, alt: "Tractor in the field" },
  { src: greenhouse, alt: "Inside our greenhouse" },
  { src: harvestImg, alt: "Farmers at harvest" },
  { src: livestock, alt: "Pasture-raised cattle" },
  { src: basket, alt: "Basket of fresh produce" },
  { src: berries, alt: "Hand-picked berries" },
  { src: tomatoes, alt: "Heritage tomatoes" },
  { src: grain, alt: "Wheat at sunset" },
];

function GalleryPage() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <header className="pt-16 pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeUp className="max-w-3xl flex flex-col gap-5">
            <span className="text-xs uppercase tracking-[0.18em] text-harvest font-semibold">Gallery</span>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-balance">
              Scenes from the field.
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
              A visual record of seasons, crops, animals, and the people who tend them.
            </p>
          </FadeUp>
        </div>
      </header>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3">
            {images.map((img, i) => (
              <FadeUp key={i} delay={(i % 6) * 0.05} className={img.span}>
                <button
                  onClick={() => setOpen(img.src)}
                  className="group block w-full h-full rounded-2xl overflow-hidden ring-1 ring-border relative"
                >
                  <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1200ms] ease-out" />
                  <div className="absolute inset-0 bg-harvest/0 group-hover:bg-harvest/20 transition-colors" />
                </button>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm grid place-items-center p-6 cursor-zoom-out"
          >
            <button
              onClick={() => setOpen(null)}
              className="absolute top-6 right-6 size-10 rounded-full bg-white/10 text-white grid place-items-center hover:bg-white/20"
              aria-label="Close"
            >
              <X className="size-5" />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              src={open}
              alt=""
              className="max-w-[92vw] max-h-[88vh] object-contain rounded-2xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <SiteFooter />
    </div>
  );
}
