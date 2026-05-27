import { Link } from "@tanstack/react-router";
import { Leaf, Instagram, Twitter, Facebook } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border pt-20 pb-10 bg-[oklch(0.97_0.012_95)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 flex flex-col gap-5">
            <Link to="/" className="flex items-center gap-2">
              <span className="grid place-items-center size-7 rounded-full bg-harvest text-harvest-foreground">
                <Leaf className="size-3.5" />
              </span>
              <span className="text-sm font-semibold tracking-tight uppercase">Verdant Acres</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm text-pretty">
              Regenerative agriculture and traditional stewardship — delivering nutrient-dense produce from our fields to your table.
            </p>
            <form className="flex gap-2 max-w-sm" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2.5 rounded-full bg-background border border-border focus:outline-none focus:ring-2 focus:ring-ring text-sm"
              />
              <button className="px-5 py-2.5 bg-harvest text-harvest-foreground rounded-full text-sm font-medium hover:bg-soil transition-colors">
                Join
              </button>
            </form>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Explore</span>
            <Link to="/about" className="text-sm hover:text-harvest transition-colors">Our story</Link>
            <Link to="/services" className="text-sm hover:text-harvest transition-colors">Services</Link>
            <Link to="/gallery" className="text-sm hover:text-harvest transition-colors">Gallery</Link>
            <Link to="/contact" className="text-sm hover:text-harvest transition-colors">Contact</Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Visit</span>
            <p className="text-sm text-muted-foreground leading-relaxed">
              1282 Meadow Lane<br />
              Green Valley, CA 90210
            </p>
            <p className="text-sm font-medium text-harvest">hello@verdantacres.farm</p>
            <div className="flex gap-3 pt-2">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="size-9 grid place-items-center rounded-full bg-background border border-border hover:bg-harvest hover:text-harvest-foreground hover:border-harvest transition-colors">
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex justify-between items-center text-[11px] uppercase tracking-widest text-muted-foreground">
          <p>© 2026 Verdant Acres Agriculture Co.</p>
          <div className="flex gap-6">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
