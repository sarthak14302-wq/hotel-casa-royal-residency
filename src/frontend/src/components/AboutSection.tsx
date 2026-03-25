import { useScrollReveal } from "../hooks/useScrollReveal";

export default function AboutSection() {
  const leftRef = useScrollReveal<HTMLDivElement>();
  const rightRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div ref={leftRef} className="reveal-left">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-gold" />
              <span className="font-sans text-gold text-xs tracking-[0.3em] uppercase font-semibold">
                About Us
              </span>
            </div>

            <h2 className="font-serif text-navy text-3xl lg:text-4xl font-bold leading-tight mb-6">
              Where Luxury Meets
              <br />
              <span className="text-gold">Affordability</span>
            </h2>

            <div className="w-16 h-0.5 bg-gold mb-8" />

            <p className="font-sans text-navy/70 text-base leading-relaxed mb-5">
              Nestled in the vibrant heart of Mumbai, Hotel Casa Royal Residency
              was founded on a singular belief — that world-class luxury should
              be within everyone's reach. Since our opening, we have welcomed
              thousands of discerning guests who refuse to compromise on
              experience, yet appreciate incredible value.
            </p>
            <p className="font-sans text-navy/70 text-base leading-relaxed mb-8">
              From our meticulously appointed rooms draped in premium linens, to
              our award-winning fine dining and rejuvenating spa, every corner
              of Casa Royal breathes sophistication. Our 4.5-star rating isn't
              just a number — it's a promise we renew with every guest who walks
              through our doors.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-navy/10">
              <div className="text-center">
                <div className="font-serif text-navy font-bold text-2xl">
                  15+
                </div>
                <div className="font-sans text-navy/50 text-xs tracking-wide uppercase mt-1">
                  Years of Excellence
                </div>
              </div>
              <div className="text-center border-x border-navy/10">
                <div className="font-serif text-navy font-bold text-2xl">
                  50K+
                </div>
                <div className="font-sans text-navy/50 text-xs tracking-wide uppercase mt-1">
                  Happy Guests
                </div>
              </div>
              <div className="text-center">
                <div className="font-serif text-navy font-bold text-2xl">
                  4.5★
                </div>
                <div className="font-sans text-navy/50 text-xs tracking-wide uppercase mt-1">
                  Average Rating
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div ref={rightRef} className="reveal-right relative">
            <div
              className="absolute -top-4 -left-4 w-full h-full border-2 border-gold/30 rounded-sm"
              style={{ zIndex: 0 }}
            />
            <div
              className="relative rounded-sm overflow-hidden shadow-card-hover"
              style={{ zIndex: 1 }}
            >
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
                alt="Hotel Casa Royal lobby"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy/80 to-transparent">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-px bg-gold" />
                  <span className="font-sans text-white/80 text-xs tracking-widest uppercase">
                    Luxury Redefined
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
