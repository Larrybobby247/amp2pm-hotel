const Footer = () => {
  const handleNewsletter = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing! Check your email for confirmation.');
    e.target.reset();
  };

  return (
    <footer className="bg-navy-dark py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
                <img src="https://res.cloudinary.com/yurlcwrp/image/upload/v1783533160/file_0000000056e87243a918601251ac318a_kn1ao2.png" alt="AM2PM Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-cinzel text-sm font-bold text-white group-hover:text-amber transition-colors tracking-wider whitespace-nowrap">
                AM2PM HOTEL &  
              </span><br/>
              <span className="text-amber text-[12px]">SUITES AUTOGRAPH</span> 
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Elevating your stay in Ijebu Ode with comfortable lodging, dynamic entertainment, and seamless service.
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/am2pmhotelandsuites?igsh=MXQ2MXpjYXpodDB5ZQ==" target="_blank" rel="noopener noreferrer" className="social-icon w-10 h-10 rounded-lg bg-white/5 hover:bg-amber/20 flex items-center justify-center text-white/60 hover:text-amber transition-all">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61591934934804" target="_blank" rel="noopener noreferrer" className="social-icon w-10 h-10 rounded-lg bg-white/5 hover:bg-amber/20 flex items-center justify-center text-white/60 hover:text-amber transition-all">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://vm.tiktok.com/ZSXekjt7L/" target="_blank" rel="noopener noreferrer" className="social-icon w-10 h-10 rounded-lg bg-white/5 hover:bg-amber/20 flex items-center justify-center text-white/60 hover:text-amber transition-all">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-white/50 hover:text-amber text-sm transition-colors">About Us</a></li>
              <li><a href="#rooms" className="text-white/50 hover:text-amber text-sm transition-colors">Our Rooms</a></li>
              <li><a href="#amenities" className="text-white/50 hover:text-amber text-sm transition-colors">Amenities</a></li>
              <li><a href="#gallery" className="text-white/50 hover:text-amber text-sm transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-white/50 hover:text-amber text-sm transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/50 hover:text-amber text-sm transition-colors">Premium Accommodation</a></li>
              <li><a href="#" className="text-white/50 hover:text-amber text-sm transition-colors">Restaurant & Bar</a></li>
              <li><a href="#" className="text-white/50 hover:text-amber text-sm transition-colors">Swimming Pool</a></li>
              <li><a href="#" className="text-white/50 hover:text-amber text-sm transition-colors">Event Hall</a></li>
              <li><a href="#" className="text-white/50 hover:text-amber text-sm transition-colors">24/7 Security</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Newsletter</h4>
            <p className="text-white/50 text-sm mb-4">Subscribe for exclusive deals and updates.</p>
            <form onSubmit={handleNewsletter} className="flex gap-2">
              <input type="email" required className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-amber/50 transition-colors input-glow" placeholder="Your email" />
              <button type="submit" className="bg-amber hover:bg-amber-dark text-white px-4 py-3 rounded-lg transition-colors">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">&copy; 2026 AM2PM HOTEL & SUITES AUTOGRAPH. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;