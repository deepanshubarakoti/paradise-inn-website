import { MapPin } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { IMAGES } from "../constants";

const VIEW_IMAGES = [
  { src: IMAGES.viewMisty, alt: "Sea of clouds – view from Hotel Paradise Inn", caption: "Sea of Clouds" },
  { src: IMAGES.viewGolden, alt: "Golden hour panorama over Mussoorie valley", caption: "Golden Hour Panorama" },
  { src: IMAGES.viewMisty2, alt: "Misty morning view from Mall Road Mussoorie", caption: "Misty Morning Serenity" },
];

export default function ViewFromHotel() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section data-testid="view-section" className="py-24 md:py-32 bg-[#0F172A] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div ref={ref} className={`text-center mb-14 reveal ${isVisible ? "is-visible" : ""}`}>
          <p className="section-overline mb-4">Mussoorie, Uttarakhand</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Views From
            <span className="text-[#D4AF37]"> Our Hotel</span>
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-white/55 text-lg max-w-2xl mx-auto">
            Wake up above the clouds. Our prime location on Mussoorie's Mall Road gives you
            unparalleled views of the valley, rolling fog, and breathtaking Himalayan sunrises.
          </p>
        </div>

        {/* Image grid */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 reveal ${isVisible ? "is-visible" : ""}`}>
          {VIEW_IMAGES.map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden group cursor-pointer shadow-xl"
              style={{ height: "300px" }}
              data-testid={`view-image-${i}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
                loading="lazy"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

              {/* Corner gold accents */}
              <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-[#D4AF37]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[#D4AF37]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-playfair font-semibold text-lg">{img.caption}</p>
                <p className="text-[#D4AF37]/80 text-xs uppercase tracking-widest mt-1">Hotel Paradise Inn</p>
              </div>
            </div>
          ))}
        </div>

        {/* Location strip */}
        <div className={`mt-10 flex items-center justify-center gap-2.5 reveal ${isVisible ? "is-visible" : ""}`}>
          <MapPin size={15} className="text-[#D4AF37]" />
          <p className="text-white/45 text-sm tracking-wide">
            Located at centre of mall road near ropeway of Mussoorie Mall Road
          </p>
        </div>
      </div>
    </section>
  );
}
