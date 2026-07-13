import { useEffect, useState } from 'react';

const Loader = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div className="fixed inset-0 z-[10000] bg-navy flex items-center justify-center transition-opacity duration-800"
         style={{ opacity: hidden ? 0 : 1, visibility: hidden ? 'hidden' : 'visible' }}>
      <div className="text-center">
        <div className="w-[60px] h-[60px] border-[3px] border-amber/20 border-t-amber rounded-full animate-spin mx-auto mb-6"></div>
        <p className="text-amber font-cinzel text-2xl tracking-widest">AM2PM HOTEL & SUITES AUTOGRAPH</p>
        <p className="text-white/50 text-sm mt-2">Loading Experience...</p>
      </div>
    </div>
  );
};

export default Loader;