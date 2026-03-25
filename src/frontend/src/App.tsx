import AboutSection from "./components/AboutSection";
import BookingCTA from "./components/BookingCTA";
import Footer from "./components/Footer";
import GlimpseInsideSection from "./components/GlimpseInsideSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HotelAmenitiesSection from "./components/HotelAmenitiesSection";
import LocationSection from "./components/LocationSection";
import ReviewsSection from "./components/ReviewsSection";
import TrustBar from "./components/TrustBar";
import WhatMakesDifferentSection from "./components/WhatMakesDifferentSection";

const WHATSAPP_NUMBER = "918655662462";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello! I'm interested in booking a room at Hotel Casa Royal Residency.",
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <AboutSection />
        <WhatMakesDifferentSection />
        <GlimpseInsideSection />
        <HotelAmenitiesSection />
        <LocationSection />
        <ReviewsSection />
        <BookingCTA />
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 group"
      >
        {/* Pulse rings */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-ping [animation-delay:0.4s]" />

        {/* Button */}
        <span className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] shadow-[0_4px_24px_rgba(37,211,102,0.55)] transition-transform duration-200 group-hover:scale-110">
          <svg
            role="img"
            aria-label="WhatsApp"
            viewBox="0 0 32 32"
            width="32"
            height="32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>WhatsApp</title>
            <circle cx="16" cy="16" r="16" fill="#25D366" />
            <path
              d="M22.9 9.1A9.85 9.85 0 0 0 16 6.4C10.7 6.4 6.4 10.7 6.4 16c0 1.7.45 3.35 1.3 4.8L6.4 25.6l4.95-1.3a9.83 9.83 0 0 0 4.65 1.18h.01c5.3 0 9.59-4.3 9.59-9.6 0-2.56-1-4.97-2.7-6.78zm-6.9 14.76h-.01a8.18 8.18 0 0 1-4.17-1.14l-.3-.18-3.1.81.83-3.02-.2-.31A8.14 8.14 0 0 1 7.8 16c0-4.52 3.68-8.2 8.21-8.2a8.16 8.16 0 0 1 8.2 8.2c0 4.52-3.68 8.2-8.21 8.2zm4.5-6.13c-.25-.12-1.46-.72-1.69-.8-.23-.09-.39-.12-.56.12-.17.24-.65.8-.79.96-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.24-.87.85-.87 2.07s.9 2.4 1.02 2.57c.12.17 1.76 2.69 4.27 3.77.6.26 1.06.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.46-.6 1.67-1.17.2-.58.2-1.07.14-1.17-.06-.1-.23-.17-.48-.29z"
              fill="white"
            />
          </svg>
        </span>
      </a>
    </div>
  );
}
