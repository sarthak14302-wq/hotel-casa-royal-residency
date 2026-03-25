import { CheckCircle2, ConciergeBell, Tv2, Wifi, Wind } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const rooms = [
  {
    name: "Twin Room",
    description:
      "Bright and comfortable twin-bed setup with premium linens and modern furnishings. Ideal for friends or colleagues.",
    image:
      "/assets/uploads/img_20260324_084706-019d1ecb-b13a-7298-8056-6b1e59c9fcb5-1.jpg",
    price: "₹4,999",
    size: "28 sqm",
  },
  {
    name: "Double Room",
    description:
      "Spacious double-bed room with elegant décor and city ambiance. Perfect for couples seeking refined comfort.",
    image:
      "/assets/uploads/img_20260324_083942-019d1ecc-7c75-7214-9672-6557c32419ad-2.jpg",
    price: "₹5,999",
    size: "32 sqm",
  },
  {
    name: "Lobby & Reception",
    description:
      "Our elegantly appointed lobby sets the tone for your stay — warm lighting, marble finishes, and a welcoming front desk ready to assist.",
    image:
      "/assets/uploads/unnamed_10-019d1f74-6101-705a-a32e-24cb096bba93-1.jpg",
    price: "₹6,999",
    size: "Common Area",
  },
  {
    name: "Reception Desk",
    description:
      "Modern reception desk with gold accents and ambient lighting — our team is always here to welcome you and assist with your needs.",
    image:
      "/assets/uploads/download-019d202d-ba29-777e-96c6-51794ef05f5c-1.webp",
    price: "₹6,999",
    size: "Common Area",
  },
  {
    name: "Executive Suite",
    description:
      "Luxurious suite with en-suite bathroom, premium bath amenities, and a relaxing atmosphere after a long day.",
    image:
      "/assets/uploads/img_20260324_083932-019d1ecc-aa88-71ba-b2ac-1d269fdcc6e6-3.jpg",
    price: "₹9,999",
    size: "48 sqm",
  },
  {
    name: "Royal Suite",
    description:
      "The pinnacle of comfort at Casa Royal — private access, premium furnishings, and every luxury taken care of.",
    image:
      "/assets/uploads/img_20260324_083921-019d1ecc-e271-7438-9214-06c0c36fd173-4.jpg",
    price: "₹14,999",
    size: "65 sqm",
  },
  {
    name: "Hotel Corridor",
    description:
      "Elegantly designed hallways with marble flooring and warm ambient lighting — every step of your journey feels luxurious.",
    image: "/assets/uploads/casa6-019d2536-e01e-773b-be97-8670b154356a-1.jpg",
    price: "",
    size: "Common Area",
  },
];

const standards = [
  {
    title: "Spotless Surfaces",
    description: "Zero dust, streaks, or stains anywhere.",
  },
  {
    title: "Proactive Service",
    description: "Staff anticipate your needs before you even ask.",
  },
  {
    title: "Premium Linens",
    description: "Crisp, high-thread-count, and flawless bedding.",
  },
  {
    title: "Warm Greetings",
    description: "Genuine smiles and immediate eye contact upon entry.",
  },
  {
    title: "Pristine Bathrooms",
    description: "Gleaming fixtures, zero water spots, and luxury toiletries.",
  },
  {
    title: "Personalized Care",
    description: "Staff remember your name and specific preferences.",
  },
  {
    title: "Fresh Ambience",
    description: "Subtle, elegant signature scents—never harsh chemical odors.",
  },
  {
    title: "Discreet Efficiency",
    description: "Seamless, quiet, and out-of-the-way housekeeping.",
  },
  {
    title: "Immaculate Public Areas",
    description: "Lobbies, elevators, and hallways are constantly maintained.",
  },
  {
    title: "Prompt Resolutions",
    description: "Any issue is fixed instantly with a sincere apology.",
  },
];

export default function RoomsSection() {
  const sectionRef = useScrollReveal<HTMLDivElement>();
  const standardsRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="rooms" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={sectionRef} className="reveal-section text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gold" />
            <span className="font-sans text-gold text-xs tracking-[0.3em] uppercase font-semibold">
              Accommodation
            </span>
            <div className="w-12 h-px bg-gold" />
          </div>
          <h2 className="font-serif text-navy text-3xl lg:text-4xl font-bold uppercase tracking-wide">
            Rooms &amp; Suites
          </h2>
          <p className="font-sans text-navy/60 text-sm mt-4 max-w-xl mx-auto">
            Each room is a sanctuary of calm, crafted with the finest materials
            and designed to make you feel truly at home.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-ocid="rooms.list"
        >
          {rooms.map((room, i) => (
            <article
              key={room.name}
              data-ocid={`rooms.item.${i + 1}`}
              className="reveal-section group rounded-sm overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 right-3 bg-gold text-navy text-[10px] font-sans font-bold px-2 py-1 tracking-wider uppercase">
                  {room.size}
                </div>
              </div>

              {/* Navy panel */}
              <div className="bg-navy p-5">
                <h3 className="font-serif text-white font-bold text-lg mb-2">
                  {room.name}
                </h3>
                <p className="font-sans text-white/60 text-xs leading-relaxed mb-4">
                  {room.description}
                </p>

                {/* Amenity icons */}
                <div className="flex gap-3 mb-5">
                  <div title="Free WiFi" className="text-gold">
                    <Wifi className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <div title="Air Conditioning" className="text-gold">
                    <Wind className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <div title="Room Service" className="text-gold">
                    <ConciergeBell className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <div title="Smart TV" className="text-gold">
                    <Tv2 className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    {room.price && (
                      <>
                        <div className="font-sans text-white/50 text-[10px] uppercase tracking-wider">
                          From
                        </div>
                        <div className="font-serif text-gold font-bold text-lg">
                          {room.price}
                          <span className="text-white/50 text-xs font-sans font-normal">
                            /night
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                  <a
                    href="#booking"
                    data-ocid={`rooms.item.${i + 1}.button`}
                    className="btn-gold text-[10px] py-2 px-4"
                  >
                    Check Availability
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA to Gallery */}
        <div className="text-center mt-10">
          <a
            href="#glimpse"
            data-ocid="rooms.secondary_button"
            className="btn-gold inline-block text-sm px-8 py-3 tracking-widest"
          >
            View Our Gallery &rarr;
          </a>
        </div>

        {/* Standards of Excellence */}
        <div
          ref={standardsRef}
          className="reveal-section mt-20 bg-navy rounded-sm overflow-hidden"
          data-ocid="rooms.panel"
        >
          {/* Section header */}
          <div className="text-center px-8 pt-14 pb-10">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-px bg-gold" />
              <span className="font-sans text-gold text-xs tracking-[0.3em] uppercase font-semibold">
                Our Promise
              </span>
              <div className="w-12 h-px bg-gold" />
            </div>
            <h3 className="font-serif text-white text-2xl lg:text-3xl font-bold uppercase tracking-wide">
              Our Standards of Excellence
            </h3>
            <p className="font-sans text-white/50 text-sm mt-3 max-w-lg mx-auto">
              Every detail of your stay is governed by these ten commitments to
              uncompromising quality.
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center px-8 mb-10">
            <div className="flex-1 h-px bg-gold/20" />
            <div className="w-2 h-2 bg-gold rotate-45 mx-3 shrink-0" />
            <div className="flex-1 h-px bg-gold/20" />
          </div>

          {/* Standards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gold/10 border-t border-gold/10">
            {standards.map((standard, i) => (
              <div
                key={standard.title}
                data-ocid={`rooms.item.${i + 1}`}
                className="flex items-start gap-4 px-8 py-6 bg-navy hover:bg-white/5 transition-colors duration-200"
              >
                <CheckCircle2
                  className="text-gold shrink-0 mt-0.5 w-5 h-5"
                  strokeWidth={1.5}
                />
                <div>
                  <h4 className="font-serif text-gold font-bold text-base mb-1">
                    {standard.title}
                  </h4>
                  <p className="font-sans text-white/60 text-sm leading-relaxed">
                    {standard.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="h-8 bg-navy" />
        </div>
      </div>
    </section>
  );
}
