import { useState } from "react";
import { Wifi, Tv, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { IMAGES, WHATSAPP_NUMBER } from "../constants";

const ROOMS = [
  {
    name: "Deluxe Non Balcony",
    price: "₹4,000",
    badge: "Best Value",
    description: "Elegantly designed room with premium wooden interiors and rich gold accents. Perfect for couples and solo travellers seeking comfort in the hills.",
    amenities: ["Free WiFi", "Smart TV", "24/7 Hot Water", "Mountain View"],
    images: [
      "https://customer-assets.emergentagent.com/job_paradise-resort-hub/artifacts/ec9jlwal_Paradise%20Inn~Deluxe%20Non%20View%20Room%28without%20balcony%29%20%281%29_page-0002.jpg",
      "https://customer-assets.emergentagent.com/job_paradise-resort-hub/artifacts/407i7je1_Paradise%20Inn~Deluxe%20Non%20View%20Room%28without%20balcony%29%20%281%29_page-0003.jpg",
      "https://customer-assets.emergentagent.com/job_paradise-resort-hub/artifacts/uxzhz0xz_Paradise%20Inn~Deluxe%20Non%20View%20Room%28without%20balcony%29%20%281%29_page-0005.jpg",
      "https://customer-assets.emergentagent.com/job_paradise-resort-hub/artifacts/v7r6ciip_Paradise%20Inn~Deluxe%20Non%20View%20Room%28without%20balcony%29%20%281%29_page-0006.jpg",
      "https://customer-assets.emergentagent.com/job_paradise-resort-hub/artifacts/nks1l52k_Paradise%20Inn~Deluxe%20Non%20View%20Room%28without%20balcony%29%20%281%29_page-0009.jpg",
    ],
    waMsg: "Hi%2C%20I%20want%20to%20enquire%20about%20Deluxe%20Non%20Balcony%20Room%20at%20Hotel%20Paradise%20Inn%2C%20Mussoorie",
  },
  {
    name: "Deluxe Balcony",
    price: "₹4,500",
    badge: "Most Popular",
    description: "Stunning room with private balcony offering panoramic Mussoorie valley views. Wake up above the clouds with dramatic mirror panels and premium décor.",
    amenities: ["Free WiFi", "Smart TV", "Private Balcony", "Panoramic Valley View"],
    images: [
      "https://customer-assets.emergentagent.com/job_paradise-resort-hub/artifacts/2rxzr9by_Paradise%20Inn~Valley%20View%20Room%28with%20balcony%29-images-3.jpg",
      "https://customer-assets.emergentagent.com/job_paradise-resort-hub/artifacts/rc6m1xpk_Paradise%20Inn~Valley%20View%20Room%28with%20balcony%29-images-14.jpg",
      "https://customer-assets.emergentagent.com/job_paradise-resort-hub/artifacts/zxfrp5uh_Paradise%20Inn~Valley%20View%20Room%28with%20balcony%29-images-15.jpg",
      "https://customer-assets.emergentagent.com/job_paradise-resort-hub/artifacts/irv8whzy_Paradise%20Inn~Valley%20View%20Room%28with%20balcony%29-images-13.jpg",
      "https://customer-assets.emergentagent.com/job_paradise-resort-hub/artifacts/7gx4g5py_Paradise%20Inn~Deluxe%20Non%20View%20Room%28without%20balcony%29%20%281%29_page-0012.jpg",
    ],
    waMsg: "Hi%2C%20I%20want%20to%20enquire%20about%20Deluxe%20Balcony%20Room%20at%20Hotel%20Paradise%20Inn%2C%20Mussoorie",
  },
];

function RoomCard({ room, index, isVisible }) {
  const [imgIdx, setImgIdx] = useState(0);
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${room.waMsg}`;
  const total = room.images.length;

  const prev = (e) => { e.stopPropagation(); setImgIdx((i) => (i - 1 + total) % total); };
  const next = (e) => { e.stopPropagation(); setImgIdx((i) => (i + 1) % total); };

  return (
    <div
      className={`room-card bg-white overflow-hidden border-b-4 border-[#D4AF37] shadow-md reveal reveal-delay-${index + 1} ${isVisible ? "is-visible" : ""}`}
      data-testid={`room-card-${index}`}
    >
      {/* Image Slider */}
      <div className="relative overflow-hidden h-64 select-none">
        <img
          src={room.images[imgIdx]}
          alt={room.name}
          className="room-img w-full h-full object-cover"
          loading="lazy"
        />
        {/* Gradient bottom */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Price badge */}
        <div className="absolute top-4 right-4 bg-[#0F172A]/90 backdrop-blur-sm px-4 py-2 rounded-full">
          <span className="text-[#D4AF37] font-bold text-lg font-playfair">{room.price}</span>
          <span className="text-white/60 text-xs ml-1">/ night</span>
        </div>

        {/* Category badge */}
        <div className="absolute top-4 left-4 bg-[#D4AF37] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          {room.badge}
        </div>

        {/* Slider controls */}
        {total > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all"
              aria-label="Previous image"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all"
              aria-label="Next image"
            >
              <ChevronRight size={16} />
            </button>
            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {room.images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setImgIdx(i); }}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${i === imgIdx ? "bg-[#D4AF37] w-4" : "bg-white/60"}`}
                  aria-label={`Image ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-playfair text-2xl font-semibold text-[#0F172A] mb-2">{room.name}</h3>
        <p className="text-[#57534E] text-sm leading-relaxed mb-4">{room.description}</p>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-5">
          {room.amenities.map((a) => (
            <span key={a} className="text-xs bg-[#F5F5F4] text-[#57534E] px-3 py-1 rounded-full border border-[#E7E5E4] font-medium">
              {a}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-testid={`room-enquire-btn-${index}`}
          className="flex items-center justify-center gap-2 w-full bg-[#0F172A] hover:bg-[#1E293B] text-white font-semibold py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5 text-sm"
        >
          <MessageCircle size={15} />
          Enquire on WhatsApp
        </a>
      </div>
    </div>
  );
}

export default function Rooms() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="rooms" data-testid="rooms-section" className="py-24 md:py-32 bg-[#F5F5F4]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div ref={ref} className={`text-center mb-16 reveal ${isVisible ? "is-visible" : ""}`}>
          <p className="section-overline mb-4">Accommodations</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
            Our Rooms
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-[#57534E] text-lg max-w-xl mx-auto">
            Two thoughtfully crafted room categories — each offering a distinct Mussoorie experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {ROOMS.map((room, i) => (
            <RoomCard key={i} room={room} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
