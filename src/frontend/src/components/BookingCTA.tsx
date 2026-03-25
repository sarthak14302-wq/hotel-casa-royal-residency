import { Phone } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function BookingCTA() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="booking" className="relative py-24 bg-navy overflow-hidden">
      {/* Decorative gold pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, oklch(0.73 0.14 85) 0, oklch(0.73 0.14 85) 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/0 via-navy/30 to-navy/0" />

      <div
        ref={ref}
        className="reveal-section relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-12 h-px bg-gold" />
          <span className="font-sans text-gold text-xs tracking-[0.3em] uppercase font-semibold">
            Best Rate Guarantee
          </span>
          <div className="w-12 h-px bg-gold" />
        </div>

        <h2 className="font-serif text-white text-3xl lg:text-5xl font-bold leading-tight mb-6">
          Book Directly for the
          <br />
          <span className="text-gold">Best Rates</span>
        </h2>

        <p className="font-sans text-white/65 text-sm leading-relaxed mb-10 max-w-2xl mx-auto">
          Enjoy exclusive perks when you book directly with us — complimentary
          breakfast for two, flexible late checkout until 2PM, and priority room
          upgrades subject to availability. Our direct booking guarantee ensures
          you always get the best possible rate.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:info@casaroyalresidency.com"
            data-ocid="booking.primary_button"
            className="btn-gold"
          >
            Book Your Stay
          </a>
          <a
            href="tel:+918655662463"
            data-ocid="booking.secondary_button"
            className="btn-outline-white flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            +91 86556 62463
          </a>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {[
            { emoji: "🍳", text: "Complimentary Breakfast" },
            { emoji: "🕐", text: "Late Checkout" },
            { emoji: "⬆️", text: "Room Upgrade Priority" },
            { emoji: "💰", text: "Best Rate Guarantee" },
          ].map((perk) => (
            <div key={perk.text} className="flex items-center gap-2">
              <span className="text-lg">{perk.emoji}</span>
              <span className="font-sans text-white/60 text-xs tracking-wide">
                {perk.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
