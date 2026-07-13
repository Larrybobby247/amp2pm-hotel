import { useState } from 'react';
import { roomsData } from '../data/roomsData';

const RoomSlider = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative aspect-[4/3] overflow-hidden flex-shrink-0">
      <div className="relative w-full h-full">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Room view ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${i === current ? 'opacity-100 z-[1]' : 'opacity-0 z-0'}`}
          />
        ))}
      </div>
      <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-amber transition-colors z-10 backdrop-blur-sm">
        <i className="fas fa-chevron-left text-xs"></i>
      </button>
      <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-amber transition-colors z-10 backdrop-blur-sm">
        <i className="fas fa-chevron-right text-xs"></i>
      </button>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, i) => (
          <span key={i} className={`w-2 h-2 rounded-full transition-all cursor-pointer ${i === current ? 'bg-amber scale-125' : 'bg-white/40'}`} onClick={() => setCurrent(i)}></span>
        ))}
      </div>
    </div>
  );
};

const Rooms = () => {
  return (
    <section id="rooms" className="py-20 lg:py-28 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-amber/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-amber font-semibold text-sm uppercase tracking-widest mb-4 block">Accommodations</span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-amber mb-4">
            LUXURIOUS ROOM COLLECTION
          </h2>
          <p className="text-navy/60 max-w-2xl mx-auto">Relax in our elegantly designed rooms and suites, thoughtfully crafted to provide comfort, style, and a restful stay.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roomsData.map((room) => (
            <div key={room.id} className="group relative rounded-2xl overflow-hidden shadow-xl bg-white hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
              <RoomSlider images={room.images} />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-playfair text-xl font-bold text-navy mb-2">{room.name}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {room.amenities.map((amenity, i) => (
                    <span key={i} className="text-xs bg-navy/5 text-navy/70 px-2 py-1 rounded-md flex items-center gap-1">
                      <i className={`fas ${amenity.icon} text-amber text-[10px]`}></i>
                      {amenity.label}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-2">
                  <a 
                    href={`https://wa.me/2349036096549?text=I%20want%20to%20book%20the%20${encodeURIComponent(room.name)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full bg-amber hover:bg-amber-dark text-white text-center py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <i className="fab fa-whatsapp"></i> Book This Suite
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;