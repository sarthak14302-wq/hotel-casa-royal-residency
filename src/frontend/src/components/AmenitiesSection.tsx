import { CigaretteOff, Coffee, ConciergeBell, Wifi, Wind } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const amenities = [
  {
    icon: Wifi,
    label: "FREE WI-FI",
    description:
      "High-speed complimentary Wi-Fi available throughout the hotel",
  },
  {
    icon: Coffee,
    label: "FREE BREAKFAST",
    description:
      "Complimentary breakfast served fresh every morning for all guests",
  },
  {
    icon: Wind,
    label: "AIR - CONDITIONED",
    description:
      "All rooms and common areas are fully air-conditioned for your comfort",
  },
  {
    icon: ConciergeBell,
    label: "ROOM SERVICE",
    description: "In-room dining and assistance available at your convenience",
  },
  {
    icon: CigaretteOff,
    label: "SMOKE FREE",
    description:
      "A clean, smoke-free environment throughout the entire property",
  },
];

const galleryPhotos = [
  {
    src: "/assets/uploads/img_20260324_084706-019d1ecb-b13a-7298-8056-6b1e59c9fcb5-1.jpg",
    label: "Twin Room",
  },
  {
    src: "/assets/uploads/img_20260324_083942-019d1ecc-7c75-7214-9672-6557c32419ad-2.jpg",
    label: "Double Room",
  },
  {
    src: "/assets/uploads/img_20260324_083932-019d1ecc-aa88-71ba-b2ac-1d269fdcc6e6-3.jpg",
    label: "En-Suite Bathroom",
  },
  {
    src: "/assets/uploads/img_20260324_083921-019d1ecc-e271-7438-9214-06c0c36fd173-4.jpg",
    label: "Elevator Access",
  },
];

export default function AmenitiesSection() {
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="amenities" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={sectionRef} className="reveal-section text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gold" />
            <span className="font-sans text-gold text-xs tracking-[0.3em] uppercase font-semibold">
              Hotel Facilities
            </span>
            <div className="w-12 h-px bg-gold" />
          </div>
          <h2 className="font-serif text-navy text-3xl lg:text-4xl font-bold uppercase tracking-wide">
            Hotel Amenities
          </h2>
          <p className="font-sans text-navy/60 text-sm mt-4 max-w-xl mx-auto">
            Everything you need for an extraordinary stay — all under one roof.
          </p>
        </div>

        {/* Icon Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {amenities.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="reveal-section text-center group"
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full border border-navy/15 bg-white flex items-center justify-center group-hover:bg-navy transition-colors duration-300 shadow-xs">
                    <Icon
                      className="w-6 h-6 text-navy group-hover:text-gold transition-colors duration-300"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
                <h3 className="font-serif text-navy font-semibold text-sm mb-2 leading-tight">
                  {item.label}
                </h3>
                <p className="font-sans text-navy/55 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Photo Gallery */}
        <div className="mt-20">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="w-12 h-px bg-gold" />
            <span className="font-sans text-gold text-xs tracking-[0.3em] uppercase font-semibold">
              A Glimpse Inside
            </span>
            <div className="w-12 h-px bg-gold" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryPhotos.map((photo, i) => (
              <div
                key={photo.label}
                className="reveal-section group"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="overflow-hidden rounded-sm shadow-md">
                  <img
                    src={photo.src}
                    alt={photo.label}
                    className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="font-serif text-navy font-semibold text-sm mt-3 text-center tracking-wide">
                  <span className="border-b border-gold pb-0.5">
                    {photo.label}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
