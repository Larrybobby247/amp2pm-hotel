import { useState, useEffect } from 'react';
import { useToast } from '../hooks/useToast';
import Toast from '../components/Toast';

const Contact = () => {
  const [bookingData, setBookingData] = useState({
    name: '', phone: '', checkin: '', checkout: '', guests: '2', room: 'Standard Room', request: ''
  });
  const { toast, showToast } = useToast();

  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    setBookingData(prev => ({
      ...prev,
      checkin: today.toISOString().split('T')[0],
      checkout: tomorrow.toISOString().split('T')[0]
    }));
  }, []);

  const roomTypes = [
    "Standard Room", "Deluxe Room", "Queen Room", "King Room",
    "Junior Suite", "Royal Suite", "MAMBILA (2 Bedroom Flat)", "PRESIDENTIAL (2 Bedroom Duplex)"
  ];

  const handleBookingChange = (e) => {
    setBookingData(prev => ({ ...prev, [e.target.id.replace('book-', '')]: e.target.value }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const { name, phone, checkin, checkout, guests, room, request } = bookingData;

    let message = `Hello AM2PM HOTEL & SUITES AUTOGRAPH, I would like to make a booking.%0A%0A`;
    message += `Name: ${name}%0A`;
    message += `Phone: ${phone}%0A`;
    message += `Check-in: ${checkin}%0A`;
    message += `Check-out: ${checkout}%0A`;
    message += `Guests: ${guests}%0A`;
    message += `Room Type: ${room}%0A`;
    if (request) message += `Special Request: ${request}%0A`;

    window.open(`https://wa.me/2349036096549?text=${message}`, '_blank');
    showToast('Booking request sent via WhatsApp!');
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    showToast('Message sent successfully! We will get back to you shortly.');
    e.target.reset();
  };

  return (
    <section id="contact" className="py-20 lg:py-28 px-6 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber/10 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-amber font-semibold text-sm uppercase tracking-widest mb-4 block">Get In Touch</span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-amber mb-4">
            CONTACT <span className="text-gradient">US</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">We are here to make your stay exceptional. Reach out to us anytime.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="glass rounded-2xl p-8 mb-8">
              <h3 className="font-playfair text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber/20 flex items-center justify-center flex-shrink-0">
                    <i className="fab fa-whatsapp text-amber text-xl"></i>
                  </div>
                  <div>
                    <p className="text-white/50 text-sm mb-2">Chat Us on WhatsApp</p>
                    <a href="https://wa.me/2349036096549" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors mb-2">
                      <i className="fab fa-whatsapp"></i> Chat on WhatsApp
                    </a><br/>
                    <a href="https://wa.me/2348125759816" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors">
                      <i className="fab fa-whatsapp"></i> Chat on WhatsApp
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber/20 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-envelope text-amber"></i>
                  </div>
                  <div>
                    <p className="text-white/50 text-sm mb-1">Email</p>
                    <a href="mailto:jobsam2pm@yahoo.com" className="text-white font-semibold hover:text-amber transition-colors">jobsam2pm@yahoo.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber/20 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-location-dot text-amber"></i>
                  </div>
                  <div>
                    <p className="text-white/50 text-sm mb-1">Location</p>
                    <p className="text-white font-semibold">3/9 Aliu Sulaimon Way, Off Molipa Express Way, Molipa, Ijebu-Ode, Ogun State.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="glass rounded-2xl p-8 mb-8">
              <h3 className="font-playfair text-2xl font-bold text-white mb-6">Quick Inquiry</h3>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/60 text-sm mb-2 block">First Name</label>
                    <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-amber/50 transition-colors input-glow" placeholder="John" />
                  </div>
                  <div>
                    <label className="text-white/60 text-sm mb-2 block">Last Name</label>
                    <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-amber/50 transition-colors input-glow" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="text-white/60 text-sm mb-2 block">Email</label>
                  <input type="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-amber/50 transition-colors input-glow" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="text-white/60 text-sm mb-2 block">Phone</label>
                  <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-amber/50 transition-colors input-glow" placeholder="+234 ..." />
                </div>
                <div>
                  <label className="text-white/60 text-sm mb-2 block">Message</label>
                  <textarea rows="4" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-amber/50 transition-colors input-glow resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="btn-shine w-full bg-amber hover:bg-amber-dark text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-amber/30">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Booking Widget */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-dark rounded-2xl p-8 md:p-10 shadow-2xl shadow-navy/20">
            <div className="text-center mb-8">
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-white mb-2">Book Your Stay</h3>
              <p className="text-white/60 text-sm">Fill out the form below and we will respond via WhatsApp with availability and confirmation.</p>
            </div>
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-white/60 text-xs uppercase tracking-wider font-medium">Full Name</label>
                  <div className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 border border-white/10 focus-within:border-amber/50 transition-colors">
                    <i className="fas fa-user text-amber"></i>
                    <input type="text" id="book-name" value={bookingData.name} onChange={handleBookingChange} required className="bg-transparent text-white w-full outline-none text-sm input-glow" placeholder="John Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-white/60 text-xs uppercase tracking-wider font-medium">Phone Number</label>
                  <div className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 border border-white/10 focus-within:border-amber/50 transition-colors">
                    <i className="fas fa-phone text-amber"></i>
                    <input type="tel" id="book-phone" value={bookingData.phone} onChange={handleBookingChange} required className="bg-transparent text-white w-full outline-none text-sm input-glow" placeholder="+234 ..." />
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-white/60 text-xs uppercase tracking-wider font-medium">Check In</label>
                  <div className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 border border-white/10 focus-within:border-amber/50 transition-colors">
                    <i className="fas fa-calendar text-amber"></i>
                    <input type="date" id="book-checkin" value={bookingData.checkin} onChange={handleBookingChange} required className="bg-transparent text-white w-full outline-none text-sm input-glow" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-white/60 text-xs uppercase tracking-wider font-medium">Check Out</label>
                  <div className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 border border-white/10 focus-within:border-amber/50 transition-colors">
                    <i className="fas fa-calendar text-amber"></i>
                    <input type="date" id="book-checkout" value={bookingData.checkout} onChange={handleBookingChange} required className="bg-transparent text-white w-full outline-none text-sm input-glow" />
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-white/60 text-xs uppercase tracking-wider font-medium">Number of Guests</label>
                  <div className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 border border-white/10 focus-within:border-amber/50 transition-colors">
                    <i className="fas fa-users text-amber"></i>
                    <select id="book-guests" value={bookingData.guests} onChange={handleBookingChange} className="bg-transparent text-white w-full outline-none text-sm appearance-none cursor-pointer">
                      <option value="1" className="text-navy">1 Guest</option>
                      <option value="2" className="text-navy">2 Guests</option>
                      <option value="3" className="text-navy">3 Guests</option>
                      <option value="4" className="text-navy">4 Guests</option>
                      <option value="5+" className="text-navy">5+ Guests</option>
                    </select>
                    <i className="fas fa-chevron-down text-white/40 text-xs"></i>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-white/60 text-xs uppercase tracking-wider font-medium">Room Type</label>
                  <div className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 border border-white/10 focus-within:border-amber/50 transition-colors">
                    <i className="fas fa-bed text-amber"></i>
                    <select id="book-room" value={bookingData.room} onChange={handleBookingChange} className="bg-transparent text-white w-full outline-none text-sm appearance-none cursor-pointer">
                      {roomTypes.map(room => (
                        <option key={room} value={room} className="text-navy">{room}</option>
                      ))}
                    </select>
                    <i className="fas fa-chevron-down text-white/40 text-xs"></i>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-white/60 text-xs uppercase tracking-wider font-medium">Special Request</label>
                <div className="flex items-start gap-3 bg-white/5 rounded-xl px-4 py-3 border border-white/10 focus-within:border-amber/50 transition-colors">
                  <i className="fas fa-comment-dots text-amber mt-1"></i>
                  <textarea id="book-request" value={bookingData.request} onChange={handleBookingChange} rows="3" className="bg-transparent text-white w-full outline-none text-sm input-glow resize-none" placeholder="Any special requests or preferences..."></textarea>
                </div>
              </div>
              <button type="submit" className="btn-shine w-full bg-amber hover:bg-amber-dark text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-amber/30 flex items-center justify-center gap-2">
                <i className="fab fa-whatsapp"></i>
                Send Booking Request via WhatsApp
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12">
          <div className="map-container rounded-2xl overflow-hidden h-80 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5!2d3.9!3d6.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDgnMDAuMCJOIDPCsDU0JzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </div>
      <Toast show={toast.show} message={toast.message} />
    </section>
  );
};

export default Contact;