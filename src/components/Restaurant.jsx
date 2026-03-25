import { Star, Wind, Eye, UtensilsCrossed, Music } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { IMAGES, WHATSAPP_NUMBER } from "../constants";

const RESTAURANT_WA = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20want%20to%20reserve%20a%20table%20at%20the%20Rooftop%20Restaurant%20of%20Hotel%20Paradise%20Inn%2C%20Mussoorie`;

const FEATURES = [
  { icon: Eye, text: "Valley Panorama Views" },
  { icon: Wind, text: "Open Air Dining" },
  { icon: UtensilsCrossed, text: "Multi-Cuisine Menu" },
  { icon: Music, text: "Ambient Live Music" },
];

const WA_SVG = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.118 1.526 5.845L.057 23.886a.5.5 0 0 0 .614.614l6.041-1.47A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.927 0-3.736-.519-5.284-1.424l-.379-.224-3.932.958.977-3.875-.246-.389A9.958 9.958 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
  </svg>
);

export default function Restaurant() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section
      data-testid="restaurant-section"
      className="relative overflow-hidden min-h-[560px] md:min-h-[640px] flex items-center"
    >
      {/* Full background: restaurant image */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.restaurant}
          alt="Rooftop Restaurant – Hotel Paradise Inn Mussoorie"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay: strong on left, fades right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/70 to-black/25" />
        {/* Bottom vignette */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Gold accent top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div
            ref={ref}
            className={`max-w-xl reveal ${isVisible ? "is-visible" : ""}`}
          >
            {/* New badge */}
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 border border-[#D4AF37]/40 px-4 py-1.5 rounded-full mb-7">
              <Star size={12} className="text-[#D4AF37] fill-[#D4AF37]" />
              <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.22em] font-bold">Highlight Feature</span>
            </div>

            <p className="section-overline mb-3">Dine in the Sky</p>
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
              Rooftop<br />
              <span className="text-[#D4AF37]">Restaurant</span>
            </h2>
            <div className="gold-divider mb-7" />

            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-9">
              Dine under a canopy of stars with sweeping views of the Mussoorie valley.
              Our rooftop restaurant combines breathtaking mountain ambiance with rich
              cuisine — making every meal an unforgettable experience.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3 mb-10">
              {FEATURES.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 px-4 py-2 rounded-full"
                >
                  <Icon size={13} className="text-[#D4AF37]" />
                  <span className="text-white/85 text-xs font-medium">{text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href={RESTAURANT_WA}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="restaurant-book-btn"
              className="inline-flex items-center gap-3 bg-[#D4AF37] hover:bg-[#B5952F] text-white font-bold px-9 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 shadow-[0_6px_24px_rgba(212,175,55,0.45)] text-sm uppercase tracking-widest"
            >
              <WA_SVG />
              Reserve a Table
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
