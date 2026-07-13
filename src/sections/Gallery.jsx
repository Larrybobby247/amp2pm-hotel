

import { useState, useEffect, useCallback, useRef } from 'react';
import { galleryImages } from '../data/galleryData';

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const overlayRef = useRef(null);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, []);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  }, []);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, []);

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeLightbox, nextImage, prevImage]);

  // Touch/swipe support
  useEffect(() => {
    if (!isOpen) return;
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => { touchStartX = e.changedTouches[0].screenX; };
    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) nextImage();
        else prevImage();
      }
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isOpen, nextImage, prevImage]);

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) closeLightbox();
  };

  const currentImage = galleryImages[currentIndex];

  return (
    <section id="gallery" className="py-20 lg:py-28 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-amber font-semibold text-sm uppercase tracking-widest mb-4 block">Visual Tour</span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-amber mb-4">
            EXPLORE OUR SPACES
          </h2>
          <p className="text-navy/60 max-w-2xl mx-auto">Take a visual journey through our beautifully curated spaces.</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-4 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="masonry-item group relative rounded-2xl overflow-hidden cursor-pointer break-inside-avoid mb-4"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={image.src.replace('w=1200', 'w=600')} 
                alt={image.caption} 
                className="w-full rounded-2xl group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-end p-4">
                <p className="text-white font-playfair text-lg">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== LIGHTBOX ===== */}
      {isOpen && (
        <div 
          ref={overlayRef}
          onClick={handleOverlayClick}
          className="fixed inset-0 z-[9999] bg-black/95 flex flex-col items-center justify-center"
        >
          {/* Close Button - Top Right */}
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/80 hover:text-white text-3xl z-10 transition-colors duration-300 hover:rotate-90"
            aria-label="Close lightbox"
          >
            <i className="fas fa-times"></i>
          </button>

          {/* Previous Button - Left */}
          <button 
            onClick={prevImage}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-amber text-white flex items-center justify-center z-10 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            aria-label="Previous image"
          >
            <i className="fas fa-chevron-left text-lg"></i>
          </button>

          {/* Next Button - Right */}
          <button 
            onClick={nextImage}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-amber text-white flex items-center justify-center z-10 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            aria-label="Next image"
          >
            <i className="fas fa-chevron-right text-lg"></i>
          </button>

          {/* Main Image - Center */}
          <div className="flex-1 flex items-center justify-center w-full px-16 md:px-24 py-8">
            <div className="relative max-w-5xl max-h-[70vh] w-full flex items-center justify-center">
              <img 
                src={currentImage?.src} 
                alt={currentImage?.caption}
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl transition-all duration-300"
              />
            </div>
          </div>

          {/* Caption */}
          <p className="text-white font-playfair text-xl md:text-2xl text-center mb-4 px-4">
            {currentImage?.caption}
          </p>

          {/* Image Counter */}
          <p className="text-white/50 text-sm mb-4">
            {currentIndex + 1} / {galleryImages.length}
          </p>

          {/* Thumbnails - Bottom */}
          <div className="flex gap-2 px-4 pb-6 max-w-[90vw] overflow-x-auto">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`flex-shrink-0 w-16 h-12 md:w-20 md:h-14 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  index === currentIndex 
                    ? 'border-amber opacity-100 scale-105' 
                    : 'border-transparent opacity-50 hover:opacity-80'
                }`}
              >
                <img 
                  src={image.thumb || image.src} 
                  alt={image.caption}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;