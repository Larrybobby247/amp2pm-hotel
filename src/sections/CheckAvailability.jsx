import { useState, useEffect } from 'react';
import { useToast } from '../hooks/useToast';
import Toast from '../components/Toast';

const CheckAvailability = () => {
  const [formData, setFormData] = useState({
    checkin: '',
    checkout: '',
    room: 'Standard Room'
  });
  const { toast, showToast } = useToast();

  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    setFormData(prev => ({
      ...prev,
      checkin: today.toISOString().split('T')[0],
      checkout: tomorrow.toISOString().split('T')[0]
    }));
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.id.replace('avail-', '')]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { checkin, checkout, room } = formData;

    if (!checkin || !checkout) {
      showToast('Please select check-in and check-out dates.');
      return;
    }

    let message = `Hello AM2PM HOTEL & SUITES AUTOGRAPH, I would like to check room availability.%0A%0A`;
    message += `Room Type: ${room}%0A`;
    message += `Check-in: ${checkin}%0A`;
    message += `Check-out: ${checkout}%0A`;

    window.open(`https://wa.me/2349036096549?text=${message}`, '_blank');
    showToast('Checking availability via WhatsApp...');
  };

  const roomTypes = [
    "Standard Room", "Deluxe Room", "Queen Room", "King Room",
    "Junior Suite", "Royal Suite", "MAMBILA (2 Bedroom Flat)", "PRESIDENTIAL (2 Bedroom Duplex)"
  ];

  return (
    <section id="check-availability" className="py-20 lg:py-28 px-6 relative overflow-hidden bg-navy">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-amber/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber/5 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="text-amber font-semibold text-sm uppercase tracking-widest mb-4 block">Reserve Your Stay</span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-amber mb-4">
            CHECK AVAILABILITY
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Select your dates and preferred room, then check availability directly via WhatsApp.
          </p>
        </div>

        <div className="glass-dark rounded-2xl p-8 md:p-10 shadow-2xl shadow-navy/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-white/60 text-xs uppercase tracking-wider font-medium">Check In</label>
                <div className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 border border-white/10 focus-within:border-amber/50 transition-colors">
                  <i className="fas fa-calendar text-amber"></i>
                  <input 
                    type="date" 
                    id="avail-checkin" 
                    value={formData.checkin}
                    onChange={handleChange}
                    required 
                    className="bg-transparent text-white w-full outline-none text-sm input-glow"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-white/60 text-xs uppercase tracking-wider font-medium">Check Out</label>
                <div className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 border border-white/10 focus-within:border-amber/50 transition-colors">
                  <i className="fas fa-calendar text-amber"></i>
                  <input 
                    type="date" 
                    id="avail-checkout" 
                    value={formData.checkout}
                    onChange={handleChange}
                    required 
                    className="bg-transparent text-white w-full outline-none text-sm input-glow"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-white/60 text-xs uppercase tracking-wider font-medium">Room Type</label>
                <div className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 border border-white/10 focus-within:border-amber/50 transition-colors">
                  <i className="fas fa-bed text-amber"></i>
                  <select 
                    id="avail-room" 
                    value={formData.room}
                    onChange={handleChange}
                    className="bg-transparent text-white w-full outline-none text-sm appearance-none cursor-pointer"
                  >
                    {roomTypes.map(room => (
                      <option key={room} value={room} className="text-navy">{room}</option>
                    ))}
                  </select>
                  <i className="fas fa-chevron-down text-white/40 text-xs"></i>
                </div>
              </div>
            </div>
            <button type="submit" className="btn-shine w-full bg-amber hover:bg-amber-dark text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-amber/30 flex items-center justify-center gap-2 text-lg">
              <i className="fab fa-whatsapp text-xl"></i>
              Check Availability on WhatsApp
            </button>
          </form>
        </div>
      </div>
      <Toast show={toast.show} message={toast.message} />
    </section>
  );
};

export default CheckAvailability;