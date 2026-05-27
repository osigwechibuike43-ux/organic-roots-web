import { Link } from "@tanstack/react-router";
import { Leaf } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 glass border-b border-border">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-12">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid place-items-center size-8 rounded-full bg-harvest text-harvest-foreground transition-transform group-hover:rotate-12">
            <Leaf className="size-4" />
          </span>
          <span className="text-sm font-semibold tracking-tight uppercase">Verdant&nbsp;Acres</span>
        </Link>
        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-harvest" }}
              className="hover:text-harvest transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Link
          to="/products"
          className="bg-harvest text-harvest-foreground px-5 py-2 rounded-full text-sm font-medium ring-1 ring-harvest shadow-sm hover:-translate-y-0.5 transition-transform"
        >
          Order Direct
        </Link>
      </div>
    </nav>
  );
}
