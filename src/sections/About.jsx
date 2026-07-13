import img1 from "../assets/front-view.png";
import img2 from "../assets/presidential1.png";
import img3 from "../assets/swimming-pool.png";

const About = () => {
  const features = [
    { icon: "fa-shield-halved", label: "Uncompromised Security" },
    { icon: "fa-heart", label: "Guest Satisfaction" },
    { icon: "fa-bolt", label: "Reliable Service" },
    { icon: "fa-champagne-glasses", label: "Vibrant Atmosphere" },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-amber font-semibold text-sm uppercase tracking-widest mb-4 block">About Us</span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-amber mb-6 leading-tight">
              WHERE COMFORT MEETS TIMELESS LUXURY AND THE ART OF EXCEPTIONAL HOSPITALITY.
            </h2>
            <p className="text-navy/70 text-lg leading-relaxed mb-6">
              At AM2PM HOTEL & SUITES AUTOGRAPH, we combine comfort, timeless luxury, and the art of exceptional hospitality to deliver an unforgettable guest experience. Whether you are visiting for business, leisure, or a special occasion, our elegant accommodations, modern amenities, and dedicated team are committed to providing personalized service that makes every stay relaxing, seamless, and memorable.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber/10 flex items-center justify-center">
                    <i className={`fas ${feature.icon} text-amber`}></i>
                  </div>
                  <span className="text-navy font-medium text-sm">{feature.label}</span>
                </div>
              ))}
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 text-amber font-semibold hover:gap-4 transition-all">
              Learn More About Us <i className="fas fa-arrow-right text-amber"></i>
            </a>
          </div>
          <div className="relative">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-amber/20 to-transparent rounded-3xl blur-2xl"></div>
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4 mt-8">
                  <div className="tilt-card relative rounded-2xl overflow-hidden shadow-xl bg-navy aspect-[3/4] group">
                    <img 
                      src={img1}
                      alt="Hotel Exterior" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="card-shine rounded-2xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-playfair text-lg">Modern Exterior</p>
                      <p className="text-white/60 text-sm">Accessible Entrance</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="tilt-card relative rounded-2xl overflow-hidden shadow-xl bg-navy aspect-[3/4] group">
                    <img 
                      src={img2}
                      alt="Luxury Room" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="card-shine rounded-2xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-playfair text-lg">Presidential Suite</p>
                      <p className="text-white/60 text-sm">Premium Living</p>
                    </div>
                  </div>
                  <div className="tilt-card relative rounded-2xl overflow-hidden shadow-xl bg-navy aspect-square group">
                    <img 
                      src={img3}
                      alt="Pool Area" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="card-shine rounded-2xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-playfair text-lg">Sparkling Pool</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;