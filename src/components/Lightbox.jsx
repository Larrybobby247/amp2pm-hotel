import { useEffect, useRef } from 'react';
import { useLightbox } from '../hooks/useLightbox';
import { galleryImages } from '../data/galleryData';

const Lightbox = () => {
  const {
    isOpen,
    currentIndex,
    currentImage,
    closeLightbox,
    nextImage,
    prevImage,
    goToImage
  } = useLightbox(galleryImages);

  const overlayRef = useRef(null);

  // Handle click outside to close
  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      closeLightbox();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[9999] bg-black/95 flex flex-col items-center justify-center transition-opacity duration-400"
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
  );
};

export default Lightbox;