const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/2349036096549" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30 transition-all duration-300 hover:scale-110 group"
    >
      <i className="fab fa-whatsapp text-white text-2xl"></i>
      <span className="absolute right-16 bg-navy text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat on WhatsApp
      </span>
    </a>
  );
};

export default FloatingWhatsApp;