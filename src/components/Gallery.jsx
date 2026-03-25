import { useScrollReveal } from "../hooks/useScrollReveal";
import { IMAGES } from "../constants";

const GALLERY_ITEMS = [
  { src: IMAGES.viewGolden, alt: "Golden hour panorama from Hotel Paradise Inn, Mussoorie", span: "md:col-span-2" },
  { src: IMAGES.viewMisty, alt: "Sea of clouds – Mussoorie valley view", span: "md:col-span-1" },
  { src: IMAGES.deluxe, alt: "Deluxe Non Balcony Room", span: "md:col-span-1" },
  { src: IMAGES.superDeluxe, alt: "Deluxe Balcony Room interiors", span: "md:col-span-1" },
  { src: IMAGES.bathroom, alt: "Premium marble bathroom", span: "md:col-span-1" },
  { src: IMAGES.restaurant, alt: "Rooftop Restaurant at night", span: "md:col-span-2" },
  { src: IMAGES.lobby, alt: "Hotel lobby", span: "md:col-span-1" },
];

export default function Gallery() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="gallery" data-testid="gallery-section" className="py-24 md:py-32 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div ref={ref} className={`text-center mb-16 reveal ${isVisible ? "is-visible" : ""}`}>
          <p className="section-overline mb-4">Visual Journey</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
            Gallery
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-[#57534E] text-lg max-w-xl mx-auto">
            Rooms, views, rooftop dining — a glimpse into the Hotel Paradise Inn experience.
          </p>
        </div>

        {/* Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 reveal ${isVisible ? "is-visible" : ""}`}
          style={{ gridTemplateRows: "240px 240px 240px" }}
        >
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={i}
              className={`gallery-item overflow-hidden relative group cursor-pointer shadow-md h-60 md:h-auto ${item.span}`}
              data-testid={`gallery-item-${i}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#0F172A]/0 group-hover:bg-[#0F172A]/35 transition-all duration-500 flex items-end p-4">
                <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-400">
                  {item.alt}
                </p>
              </div>
              <div className="absolute top-2.5 right-2.5 w-5 h-5 border-t-2 border-r-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-2.5 left-2.5 w-5 h-5 border-b-2 border-l-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
