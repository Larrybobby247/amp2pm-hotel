const SocialMedia = () => {
  const socials = [
    { icon: "fa-tiktok", label: "TikTok", color: "#FE2C55", href: "https://vm.tiktok.com/ZSXekjt7L/" },
    { icon: "fa-instagram", label: "Instagram", color: "#E4405F", href: "https://www.instagram.com/am2pmhotelandsuites?igsh=MXQ2MXpjYXpodDB5ZQ==" },
    { icon: "fa-facebook-f", label: "Facebook", color: "#1877F2", href: "https://www.facebook.com/profile.php?id=61591934934804" },
  ];

  return (
    <section id="social" className="py-20 lg:py-28 px-6 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-amber/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-amber/5 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <span className="text-amber font-semibold text-sm uppercase tracking-widest mb-4 block">Stay Connected</span>
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-amber mb-6">
          FOLLOW US
        </h2>
        <p className="text-white/60 text-lg max-w-2xl mx-auto mb-12">
          Stay updated with our latest offers, events, and behind-the-scenes moments. Follow AM2PM HOTEL & SUITES AUTOGRAPH on social media.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {socials.map((social, index) => (
            <a 
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon group flex flex-col items-center gap-3"
            >
              <div 
                className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `${social.color}20`;
                  e.currentTarget.style.borderColor = `${social.color}50`;
                  e.currentTarget.querySelector('i').style.color = social.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.querySelector('i').style.color = 'white';
                }}
              >
                <i className={`fab ${social.icon} text-3xl text-white transition-colors duration-300`}></i>
              </div>
              <span className="text-white/60 group-hover:text-white text-sm font-medium transition-colors">{social.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;