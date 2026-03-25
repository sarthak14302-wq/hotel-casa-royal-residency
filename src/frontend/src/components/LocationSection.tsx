import { useScrollReveal } from "../hooks/useScrollReveal";

const MAP_LINK =
  "https://www.google.com/maps/search/hotel+casa+royal+residency+goregaon+west+mumbai";

const highlights = [
  { emoji: "✈", label: "CSMIA Airport", detail: "20 min drive" },
  { emoji: "🛍", label: "Infiniti Mall Malad", detail: "5 min drive" },
  { emoji: "💼", label: "NESCO IT Park", detail: "10 min drive" },
  { emoji: "🌊", label: "Juhu Beach", detail: "15 min drive" },
  { emoji: "🏛", label: "VIBGYOR School", detail: "Walking distance" },
  { emoji: "🎭", label: "Film City", detail: "10 min drive" },
];

export default function LocationSection() {
  const leftRef = useScrollReveal<HTMLDivElement>();
  const rightRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="location" className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div ref={leftRef} className="reveal-left">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-gold" />
              <span className="font-sans text-gold text-xs tracking-[0.3em] uppercase font-semibold">
                Prime Mumbai Location
              </span>
            </div>

            <h2 className="font-serif text-white text-3xl lg:text-4xl font-bold leading-tight mb-6">
              In the Heart of <span className="text-gold">Goregaon West</span>
            </h2>

            <p className="font-sans text-white/60 text-sm leading-relaxed mb-4">
              Perfectly positioned in Goregaon West — Hotel Casa Royal Residency
              places you at the center of Mumbai's business, culture, and social
              scene.
            </p>

            <p className="font-sans text-gold/80 text-xs leading-relaxed mb-10">
              Shop Number 3, New Link Rd, opposite VIBGYOR School Road,
              <br />
              Colony No 1, Bhagat Singh II, Goregaon West,
              <br />
              Mumbai, Maharashtra 400104
            </p>

            <div className="space-y-4">
              {highlights.map((item) => (
                <div key={item.label} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center flex-shrink-0 text-base group-hover:bg-gold/10 transition-colors">
                    {item.emoji}
                  </div>
                  <div className="flex-1">
                    <div className="font-sans text-white text-sm font-medium">
                      {item.label}
                    </div>
                    <div className="font-sans text-white/45 text-xs">
                      {item.detail}
                    </div>
                  </div>
                  <div className="w-12 h-px bg-gold/20 group-hover:bg-gold/50 transition-colors" />
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="location.primary_button"
                className="btn-gold inline-block"
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* Map embed + photo */}
          <div ref={rightRef} className="reveal-right relative space-y-6">
            {/* Google Maps embed */}
            <div className="relative rounded-sm overflow-hidden border border-gold/20">
              <iframe
                title="Hotel Casa Royal Residency Location"
                src="https://maps.google.com/maps?q=Hotel+Casa+Royal+Residency,+New+Link+Rd,+Goregaon+West,+Mumbai,+Maharashtra+400104&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Hotel photo */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/20 rounded-sm pointer-events-none" />
            <div className="relative rounded-sm overflow-hidden">
              <img
                src="/assets/uploads/img_20260324_083953-019d1ec1-a4d2-71fb-b74a-1a82679b6b83-1.jpg"
                alt="Hotel Casa Royal Residency entrance"
                className="w-full h-[280px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="font-sans text-white/60 text-xs tracking-widest uppercase mb-1">
                  Goregaon West
                </div>
                <div className="font-serif text-white font-bold text-lg">
                  Mumbai, Maharashtra 400104
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
