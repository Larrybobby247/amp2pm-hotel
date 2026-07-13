import { amenitiesData } from '../data/amenitiesData';

const Amenities = () => {
  return (
    <section id="amenities" className="py-20 lg:py-28 px-6 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber/5 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-champagne/5 rounded-full blur-3xl float-reverse"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-amber font-semibold text-sm uppercase tracking-widest mb-4 block">Our Facilities</span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-amber mb-4">
            OUR AMENITIES
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">Everything you need for a perfect stay, all under one roof.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenitiesData.map((amenity, index) => (
            <div key={index} className="tilt-card group relative glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 cursor-pointer">
              <div className="card-shine rounded-2xl"></div>
              <div className="w-14 h-14 rounded-xl bg-amber/20 flex items-center justify-center mb-6 group-hover:bg-amber/30 transition-colors">
                <i className={`fas ${amenity.icon} text-amber text-2xl`}></i>
              </div>
              <h3 className="font-playfair text-xl font-bold text-white mb-3">{amenity.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;