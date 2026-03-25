import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const reviews = [
  {
    name: "Priya Sharma",
    location: "Mumbai, India",
    rating: 5,
    text: "Absolutely breathtaking experience. The staff went above and beyond to make our anniversary truly memorable. The Royal Suite had the most spectacular views of Mumbai I've ever seen. We'll be back every year.",
    stay: "Royal Suite · October 2024",
  },
  {
    name: "Rajesh Mehta",
    location: "New Delhi, India",
    rating: 5,
    text: "Best value luxury hotel I've stayed at. The Presidential Suite was magnificent — easily rivaling five-star properties in Dubai and Singapore. The fine dining restaurant alone is worth the trip to Mumbai.",
    stay: "Presidential Suite · September 2024",
  },
  {
    name: "Sarah Johnson",
    location: "London, UK",
    rating: 5,
    text: "Found this hidden gem while visiting Mumbai for business. The concierge was impeccable — arranged everything from restaurant reservations to city tours. The spa treatments were world-class. Highly recommended.",
    stay: "Executive Room · August 2024",
  },
  {
    name: "Arjun Patel",
    location: "Bangalore, India",
    rating: 5,
    text: "The spa experience was truly world-class. After a stressful week of meetings, the Ayurvedic treatments completely rejuvenated me. The rooftop pool at sunset is simply magical. Outstanding in every way.",
    stay: "Deluxe Room · July 2024",
  },
  {
    name: "Meera Iyer",
    location: "Chennai, India",
    rating: 5,
    text: "Celebrated our anniversary here and every single detail was perfect. From the rose petals on arrival to the personalized cake, the team anticipated every need. The breakfast spread is phenomenal.",
    stay: "Royal Suite · June 2024",
  },
  {
    name: "David Chen",
    location: "Singapore",
    rating: 5,
    text: "Exceeded all expectations. The rooftop pool views are absolutely stunning — the entire Mumbai skyline laid out before you. Friendly, professional staff and impeccable cleanliness throughout. A true gem.",
    stay: "Executive Room · May 2024",
  },
];

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const sectionRef = useScrollReveal<HTMLDivElement>();

  const total = reviews.length;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = window.setInterval(next, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, next]);

  const getVisible = () => {
    return [0, 1, 2].map((offset) => reviews[(current + offset) % total]);
  };

  return (
    <section id="reviews" className="py-24" style={{ background: "#F2F3F5" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={sectionRef} className="reveal-section text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gold" />
            <span className="font-sans text-gold text-xs tracking-[0.3em] uppercase font-semibold">
              Testimonials
            </span>
            <div className="w-12 h-px bg-gold" />
          </div>
          <h2 className="font-serif text-navy text-3xl lg:text-4xl font-bold uppercase tracking-wide">
            Guest Experiences
          </h2>
          <p className="font-sans text-navy/60 text-sm mt-4">
            Don't take our word for it — hear from our guests.
          </p>
        </div>

        {/* Slider */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Cards grid — 3 visible on desktop */}
          <div className="hidden lg:grid grid-cols-3 gap-6">
            {getVisible().map((review, i) => (
              <ReviewCard
                key={`${review.name}-slot-${i}`}
                review={review}
                index={i}
              />
            ))}
          </div>

          {/* Single card on mobile */}
          <div className="lg:hidden">
            <ReviewCard review={reviews[current]} index={0} />
          </div>

          {/* Chevrons */}
          <button
            type="button"
            onClick={prev}
            data-ocid="reviews.pagination_prev"
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-card flex items-center justify-center hover:bg-navy hover:text-white text-navy transition-all duration-200 z-10 hidden lg:flex"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={next}
            data-ocid="reviews.pagination_next"
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-card flex items-center justify-center hover:bg-navy hover:text-white text-navy transition-all duration-200 z-10 hidden lg:flex"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((review, i) => (
            <button
              type="button"
              key={review.name}
              onClick={() => setCurrent(i)}
              data-ocid="reviews.tab"
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-gold" : "w-2 bg-navy/20"
              }`}
            />
          ))}
        </div>

        {/* Mobile nav */}
        <div className="flex justify-center gap-4 mt-6 lg:hidden">
          <button
            type="button"
            onClick={prev}
            data-ocid="reviews.pagination_prev"
            className="w-10 h-10 rounded-full bg-white shadow-card flex items-center justify-center text-navy"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={next}
            data-ocid="reviews.pagination_next"
            className="w-10 h-10 rounded-full bg-white shadow-card flex items-center justify-center text-navy"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

const ratingStars = ["s1", "s2", "s3", "s4", "s5"];

function ReviewCard({
  review,
  index,
}: {
  review: (typeof reviews)[0];
  index: number;
}) {
  return (
    <div
      className="bg-white rounded-sm p-7 shadow-card relative"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <Quote
        className="absolute top-5 right-5 text-gold opacity-25 w-10 h-10"
        strokeWidth={1}
      />
      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {ratingStars.slice(0, review.rating).map((key) => (
          <span key={key} className="text-gold text-sm">
            ★
          </span>
        ))}
      </div>
      <p className="font-sans text-navy/70 text-sm leading-relaxed mb-6">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="pt-5 border-t border-navy/10">
        <div className="font-serif text-navy font-bold text-sm">
          {review.name}
        </div>
        <div className="font-sans text-navy/45 text-xs mt-0.5">
          {review.location}
        </div>
        <div className="font-sans text-gold/70 text-[10px] tracking-wider uppercase mt-1">
          {review.stay}
        </div>
      </div>
    </div>
  );
}
