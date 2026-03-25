const amenities = [
  { icon: "⚡", label: "Ultra-Fast Wi-Fi" },
  { icon: "✨", label: "Pristine Daily Housekeeping" },
  { icon: "🍽️", label: "Gourmet 24/7 Room Service" },
  { icon: "🧴", label: "Curated Artisan Toiletries" },
  { icon: "🎩", label: "Elite Concierge Assistance" },
  { icon: "🗝️", label: "Seamless Private Check-in" },
  { icon: "🌙", label: "Nightly Turndown Service" },
];

export default function HotelAmenitiesSection() {
  return (
    <section id="amenities" className="py-20 bg-[oklch(0.13_0.04_265)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[oklch(0.78_0.18_85)] uppercase tracking-widest text-sm font-semibold mb-3">
            Indulge in Excellence
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
            Hotel Amenities
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-[oklch(0.78_0.18_85)]" />
            <div className="w-2 h-2 rounded-full bg-[oklch(0.78_0.18_85)]" />
            <div className="h-px w-16 bg-[oklch(0.78_0.18_85)]" />
          </div>
        </div>

        {/* Amenities grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {amenities.map(({ icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-4 bg-[oklch(0.17_0.04_265)] border border-[oklch(0.78_0.18_85/0.2)] rounded-2xl p-6 hover:border-[oklch(0.78_0.18_85/0.6)] hover:bg-[oklch(0.20_0.04_265)] transition-all duration-300 group"
            >
              <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                {icon}
              </span>
              <span className="text-white text-center text-sm font-medium leading-snug">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
