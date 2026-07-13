import { offersData } from '../data/offersData';

const SpecialOffers = () => {
  return (
    <section id="offers" className="py-20 lg:py-28 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-amber font-semibold text-sm uppercase tracking-widest mb-4 block">Special Deals</span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-amber mb-4">
            EXCLUSIVE <span className="text-gradient">OFFERS</span>
          </h2>
          <p className="text-navy/60 max-w-2xl mx-auto">Take advantage of our special packages designed for every occasion</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offersData.map((offer, index) => (
            <div key={index} className="tilt-card group relative rounded-2xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="card-shine rounded-2xl"></div>
              <div className="relative h-48 overflow-hidden">
                <img src={offer.image} alt={offer.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 right-4">
                  <span className="offer-badge text-white text-xs font-bold px-3 py-1 rounded-full">{offer.badge}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold text-navy mb-2">{offer.title}</h3>
                <p className="text-navy/60 text-sm mb-4">{offer.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-amber font-bold">{offer.price}</span>
                  <a 
                    href={`https://wa.me/2349036096549?text=I%20am%20interested%20in%20the%20${encodeURIComponent(offer.query)}%20offer`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-navy hover:text-amber font-medium text-sm transition-colors flex items-center gap-1"
                  >
                    Book Now <i className="fas fa-arrow-right text-amber ml-1"></i>
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

export default SpecialOffers;