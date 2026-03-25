import { motion } from "motion/react";

const images = [
  {
    src: "/assets/uploads/casa4-019d253e-45ce-7660-b0e0-189913e46ab7-1.jpg",
    alt: "Luxury Twin Room",
    caption: "Luxury Twin Room",
  },
  {
    src: "/assets/uploads/casa5-019d253f-8666-75a9-b719-bb5b5d993a13-3.jpg",
    alt: "Reception Desk",
    caption: "Reception Desk",
  },
  {
    src: "/assets/uploads/casa8-019d2541-a030-77ec-b01c-1c72a06c8473-4.webp",
    alt: "Spacious Room",
    caption: "Spacious Room",
  },
];

export default function GlimpseInsideSection() {
  return (
    <section
      id="glimpse"
      className="py-20 px-4"
      style={{ background: "oklch(0.18 0.04 265)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold tracking-widest uppercase"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "oklch(0.96 0.02 85)",
            }}
          >
            A Glimpse Inside
          </h2>
          <div
            className="mx-auto mt-4"
            style={{
              width: "80px",
              height: "3px",
              background: "oklch(0.78 0.15 85)",
              borderRadius: "2px",
            }}
          />
          <p
            className="mt-4 text-base md:text-lg tracking-wide"
            style={{
              color: "oklch(0.72 0.04 265)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Experience the elegance that awaits you at Hotel Casa Royal
            Residency
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {/* Large image - left, spans 2 rows on lg */}
          <motion.div
            className="relative overflow-hidden rounded-lg lg:row-span-2 group"
            style={{ minHeight: "300px" }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ minHeight: "300px", maxHeight: "620px" }}
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6"
              style={{
                background:
                  "linear-gradient(to top, oklch(0.12 0.04 265 / 0.85) 0%, transparent 60%)",
              }}
            >
              <span
                className="text-sm font-semibold tracking-widest uppercase"
                style={{
                  color: "oklch(0.78 0.15 85)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {images[0].caption}
              </span>
            </div>
          </motion.div>

          {/* Right column - 2 smaller images */}
          {images.slice(1).map((img, i) => (
            <motion.div
              key={img.src}
              className="relative overflow-hidden rounded-lg group"
              style={{ minHeight: "180px" }}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.12 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ minHeight: "180px", maxHeight: "200px" }}
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4"
                style={{
                  background:
                    "linear-gradient(to top, oklch(0.12 0.04 265 / 0.85) 0%, transparent 60%)",
                }}
              >
                <span
                  className="text-sm font-semibold tracking-widest uppercase"
                  style={{
                    color: "oklch(0.78 0.15 85)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {img.caption}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
