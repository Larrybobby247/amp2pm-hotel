import { testimonialsData } from '../data/testimonialsData';

const Testimonials = () => {
  const doubledTestimonials = [...testimonialsData, ...testimonialsData];

  return (
    <section id="testimonials" className="py-20 lg:py-28 px-6 bg-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber/30 to-transparent"></div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-amber font-semibold text-sm uppercase tracking-widest mb-4 block">Testimonials</span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-amber mb-4">
            WHAT OUR GUESTS SAY
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">Real experiences from real guests who have stayed at AM2PM HOTEL & SUITES AUTOGRAPH.</p>
        </div>

        <div className="overflow-hidden">
          <div className="testimonial-track flex gap-6" style={{ width: 'max-content' }}>
            {doubledTestimonials.map((testimonial, index) => (
              <div key={index} className="w-[400px] flex-shrink-0 glass rounded-2xl p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className={`fas fa-star text-sm ${i < testimonial.rating ? 'text-amber' : 'text-white/20'}`}></i>
                  ))}
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber/20 flex items-center justify-center">
                    <span className="text-amber font-bold">{testimonial.initials}</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-white/50 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;