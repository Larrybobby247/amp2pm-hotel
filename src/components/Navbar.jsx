import { useState, useEffect } from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 100;

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#rooms', label: 'Rooms' },
    { href: '#amenities', label: 'Amenities' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#testimonials', label: 'Reviews' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'glass-dark' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-13 h-13 rounded-lg overflow-hidden flex items-center justify-center">
              <img 
                src="https://res.cloudinary.com/yurlcwrp/image/upload/v1783533160/file_0000000056e87243a918601251ac318a_kn1ao2.png" 
                alt="AM2PM Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-cinzel text-sm font-bold text-white group-hover:text-amber transition-colors tracking-wider whitespace-nowrap">
                AM2PM HOTEL &  
              </span>
              <span className="text-amber text-[12px]">SUITES AUTOGRAPH</span> 
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="nav-link text-white/80 hover:text-white text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="tel:+2348125759816" 
              className="hidden md:flex items-center gap-2 text-white/80 hover:text-amber transition-colors text-sm"
            >
              <i className="fas fa-phone text-xs text-amber"></i>
              <span>+234 812 575 9816</span>
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-shine bg-amber hover:bg-amber-dark text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-amber/30"
            >
              Book Now
            </a>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white text-xl"
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden glass-dark border-t border-white/5 transition-all duration-300 ${
        mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block text-white/80 hover:text-amber transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;