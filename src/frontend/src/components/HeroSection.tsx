import { useEffect, useState } from "react";

const heroStars = ["s1", "s2", "s3", "s4"];

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[600px] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/assets/uploads/img_20260324_083953-019d1ec1-a4d2-71fb-b74a-1a82679b6b83-1.jpg"
          alt="Hotel Casa Royal Residency exterior"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.14 0.07 260 / 0.85) 0%, oklch(0.14 0.07 260 / 0.55) 40%, oklch(0.14 0.07 260 / 0.75) 75%, oklch(0.10 0.06 260 / 0.95) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0.1s" }}
        >
          <p className="font-sans text-gold text-xs tracking-[0.35em] uppercase mb-4">
            Hotel Casa Royal Residency · Mumbai, India
          </p>
        </div>

        <h1
          className={`font-serif text-white font-bold leading-tight mb-6 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            lineHeight: 1.1,
            transitionDelay: "0.25s",
          }}
        >
          Affordable Luxury in the
          <br />
          <span className="text-gold">Heart of Mumbai</span>
        </h1>

        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0.4s" }}
        >
          <div className="flex items-center justify-center gap-1 mb-3">
            {heroStars.map((key) => (
              <span key={key} className="text-gold text-xl">
                ★
              </span>
            ))}
            <span className="text-gold text-xl">½</span>
          </div>
          <p className="font-sans text-muted-white text-sm tracking-wide mb-8">
            4.5 Star Rated — Where Luxury Meets Affordability
          </p>
        </div>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0.55s" }}
        >
          <a
            href="#booking"
            data-ocid="hero.primary_button"
            className="btn-gold inline-block"
          >
            Book Your Stay
          </a>
          <a
            href="#rooms"
            data-ocid="hero.secondary_button"
            className="btn-outline-white inline-block"
          >
            Explore Rooms
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 ${
          visible ? "opacity-60" : "opacity-0"
        }`}
        style={{ transitionDelay: "1s" }}
      >
        <span className="font-sans text-white text-[10px] tracking-[0.2em] uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-white/40 relative overflow-hidden">
          <div
            className="absolute top-0 w-full bg-gold animate-pulse"
            style={{ height: "40%" }}
          />
        </div>
      </div>
    </section>
  );
}
