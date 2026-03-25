import { Crown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Rooms & Suites", href: "#glimpse" },
    { label: "Amenities", href: "#amenities" },
    { label: "Location", href: "#location" },
    { label: "Reviews", href: "#reviews" },
  ];

  const handleMobileNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-navy shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 group"
            data-ocid="header.link"
          >
            <Crown
              className="w-7 h-7 text-gold group-hover:scale-110 transition-transform"
              strokeWidth={1.5}
            />
            <div className="leading-tight">
              <div className="font-serif text-white font-bold text-base tracking-wider">
                CASA ROYAL
              </div>
              <div className="font-sans text-white/70 text-[9px] tracking-[0.25em] uppercase">
                RESIDENCY
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid="header.link"
                className="font-sans text-white/80 hover:text-gold text-xs uppercase tracking-[0.15em] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <a
              href="#booking"
              data-ocid="header.primary_button"
              className="btn-gold rounded-none text-[11px]"
            >
              Book Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-ocid="header.toggle"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10">
            <nav className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.href}
                  data-ocid="header.link"
                  onClick={() => handleMobileNav(link.href)}
                  className="font-sans text-white/80 hover:text-gold text-sm uppercase tracking-widest transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
              <button
                type="button"
                data-ocid="header.primary_button"
                onClick={() => handleMobileNav("#booking")}
                className="btn-gold text-center mt-2"
              >
                Book Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
