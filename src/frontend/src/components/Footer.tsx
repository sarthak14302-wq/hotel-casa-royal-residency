import {
  Crown,
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep border-t-2 border-gold/50">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Col 1 — Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Crown className="w-6 h-6 text-gold" strokeWidth={1.5} />
              <div>
                <div className="font-serif text-white font-bold text-base tracking-wider">
                  CASA ROYAL
                </div>
                <div className="font-sans text-white/50 text-[9px] tracking-[0.25em] uppercase">
                  RESIDENCY
                </div>
              </div>
            </div>
            <p className="font-sans text-white/50 text-xs leading-relaxed mb-6">
              Affordable luxury in the heart of Mumbai. Where every guest is
              treated like royalty.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.link"
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.link"
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold transition-colors"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.link"
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold transition-colors"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="font-serif text-white font-bold text-sm mb-5 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "#about" },
                { label: "Rooms & Suites", href: "#glimpse" },
                { label: "Hotel Amenities", href: "#amenities" },
                { label: "Location", href: "#location" },
                { label: "Guest Reviews", href: "#reviews" },
                { label: "Book Now", href: "#booking" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    data-ocid="footer.link"
                    className="font-sans text-white/50 hover:text-gold text-xs tracking-wide transition-colors flex items-center gap-2"
                  >
                    <span className="text-gold">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <h4 className="font-serif text-white font-bold text-sm mb-5 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  className="w-4 h-4 text-gold mt-0.5 flex-shrink-0"
                  strokeWidth={1.5}
                />
                <span className="font-sans text-white/50 text-xs leading-relaxed">
                  Shop No. 3, New Link Rd, opp. VIBGYOR School,
                  <br />
                  Goregaon West, Mumbai,
                  <br />
                  Maharashtra 400104, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  className="w-4 h-4 text-gold flex-shrink-0"
                  strokeWidth={1.5}
                />
                <a
                  href="tel:+918655662463"
                  className="font-sans text-white/50 hover:text-gold text-xs transition-colors"
                >
                  +91 86556 62463
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-white/30 text-[11px]">
            © {year} Hotel Casa Royal Residency. All rights reserved.
          </p>
          <p className="font-sans text-white/25 text-[11px]">
            Built with ♥ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
