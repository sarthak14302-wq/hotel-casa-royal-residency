const PARTNER_STARS = ["★", "★", "★", "★"];

export default function TrustBar() {
  return (
    <section className="bg-cream border-b border-gold/20 py-5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {/* Star rating */}
          <div className="flex items-center gap-3">
            <div className="flex gap-0.5">
              {PARTNER_STARS.map((s) => (
                <span key={s} className="text-gold text-lg">
                  {s}
                </span>
              ))}
              <span className="text-gold text-lg">½</span>
            </div>
            <div>
              <div className="font-serif text-navy font-bold text-sm">
                4.5 Star Rated
              </div>
              <div className="font-sans text-navy/50 text-[10px] tracking-widest uppercase">
                Excellence Award
              </div>
            </div>
          </div>

          <div className="w-px h-10 bg-navy/15 hidden sm:block" />

          {/* TripAdvisor */}
          <div className="flex items-center gap-2.5">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-xs"
              style={{ background: "#00AA6C" }}
            >
              TA
            </div>
            <div>
              <div className="font-sans font-semibold text-navy text-sm">
                TripAdvisor
              </div>
              <div className="font-sans text-navy/50 text-[10px]">
                4.5 · 1,240 reviews
              </div>
            </div>
          </div>

          <div className="w-px h-10 bg-navy/15 hidden sm:block" />

          {/* Booking.com */}
          <div className="flex items-center gap-2.5">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-xs"
              style={{ background: "#003580" }}
            >
              B.
            </div>
            <div>
              <div className="font-sans font-semibold text-navy text-sm">
                Booking.com
              </div>
              <div className="font-sans text-navy/50 text-[10px]">
                9.1 · Exceptional · 876 reviews
              </div>
            </div>
          </div>

          <div className="w-px h-10 bg-navy/15 hidden sm:block" />

          {/* Google */}
          <div className="flex items-center gap-2.5">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-xs"
              style={{
                background:
                  "linear-gradient(135deg, #4285F4, #34A853, #FBBC05, #EA4335)",
              }}
            >
              G
            </div>
            <div>
              <div className="font-sans font-semibold text-navy text-sm">
                Google Reviews
              </div>
              <div className="font-sans text-navy/50 text-[10px]">
                4.6 · 2,100+ reviews
              </div>
            </div>
          </div>

          <div className="w-px h-10 bg-navy/15 hidden sm:block" />

          {/* MakeMyTrip */}
          <div className="flex items-center gap-2.5">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-xs"
              style={{ background: "#D91F6B" }}
            >
              MM
            </div>
            <div>
              <div className="font-sans font-semibold text-navy text-sm">
                MakeMyTrip
              </div>
              <div className="font-sans text-navy/50 text-[10px]">
                4.4 · Highly Rated
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
