import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const differentiators = [
  "Client Satisfaction",
  "Ideal Location",
  "Premium Rooms",
  "Affordable Pricing",
  "Spotlessly Clean",
  "Friendly Service",
  "Hassle-Free Check-Out",
  "24/7 Customer Service",
];

export default function WhatMakesDifferentSection() {
  return (
    <section className="py-20 bg-[oklch(0.13_0.04_250)] relative overflow-hidden">
      {/* Gold dot pattern background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle, oklch(0.82 0.15 85) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[oklch(0.82_0.15_85)] uppercase tracking-[0.3em] text-sm font-medium mb-3">
            Our Promise
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
            WHAT MAKES US{" "}
            <span className="text-[oklch(0.82_0.15_85)]">DIFFERENT?</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-20 bg-[oklch(0.82_0.15_85)]" />
            <div className="w-2 h-2 rounded-full bg-[oklch(0.82_0.15_85)]" />
            <div className="h-px w-20 bg-[oklch(0.82_0.15_85)]" />
          </div>
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Images column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            <div className="rounded-xl overflow-hidden shadow-2xl border border-[oklch(0.82_0.15_85)]/20">
              <img
                src="/assets/uploads/casa-019d2006-e282-727a-afaa-f315e8389188-6.webp"
                alt="Casa Royal Residency - Refined Comfort, Elevated Living"
                className="w-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl border border-[oklch(0.82_0.15_85)]/20">
              <img
                src="/assets/uploads/casa-019d2004-dfc2-76b4-a931-444a45516876-5.jpg"
                alt="Why Choose Casa Royal Residency"
                className="w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Differentiators column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              At Hotel Casa Royal Residency, we go beyond just providing a room.
              Every detail is curated to deliver an experience that feels both
              premium and personal — at a price that makes luxury accessible.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {differentiators.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="flex items-center gap-3 bg-white/5 border border-[oklch(0.82_0.15_85)]/15 rounded-lg px-4 py-3 hover:bg-white/10 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-[oklch(0.82_0.15_85)] flex-shrink-0" />
                  <span className="text-white font-medium text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
