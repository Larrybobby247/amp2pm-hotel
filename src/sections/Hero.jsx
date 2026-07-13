import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Hero = () => {
  const canvasRef = useRef(null);
  const particleCanvasRef = useRef(null);

  useEffect(() => {
    // Three.js Scene
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const geometries = [
      new THREE.IcosahedronGeometry(1, 0),
      new THREE.OctahedronGeometry(0.8, 0),
      new THREE.TetrahedronGeometry(0.6, 0),
      new THREE.SphereGeometry(0.5, 16, 16),
    ];

    const material = new THREE.MeshPhongMaterial({
      color: 0xD97706,
      transparent: true,
      opacity: 0.15,
      wireframe: true,
    });

    const shapes = [];
    for (let i = 0; i < 15; i++) {
      const geo = geometries[Math.floor(Math.random() * geometries.length)];
      const mesh = new THREE.Mesh(geo, material.clone());
      mesh.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10 - 5
      );
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      mesh.userData = {
        rotSpeed: { x: (Math.random() - 0.5) * 0.01, y: (Math.random() - 0.5) * 0.01 },
        floatSpeed: Math.random() * 0.002 + 0.001,
        floatOffset: Math.random() * Math.PI * 2,
      };
      scene.add(mesh);
      shapes.push(mesh);
    }

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xD97706, 1, 50);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0xF59E0B, 0.5, 50);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    camera.position.z = 8;

    let mouseX = 0, mouseY = 0;
    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    document.addEventListener('mousemove', handleMouseMove);

    let isActive = true;
    const heroSection = document.getElementById('hero');

    const observer = new IntersectionObserver((entries) => {
      isActive = entries[0].isIntersecting;
    }, { threshold: 0.1 });
    if (heroSection) observer.observe(heroSection);

    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      if (!isActive) return;
      const time = Date.now() * 0.001;
      shapes.forEach((shape) => {
        shape.rotation.x += shape.userData.rotSpeed.x;
        shape.rotation.y += shape.userData.rotSpeed.y;
        shape.position.y += Math.sin(time * shape.userData.floatSpeed + shape.userData.floatOffset) * 0.002;
      });
      camera.position.x += (mouseX * 2 - camera.position.x) * 0.02;
      camera.position.y += (-mouseY * 2 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Particle Canvas
    const pCanvas = particleCanvasRef.current;
    if (pCanvas) {
      const ctx = pCanvas.getContext('2d');
      pCanvas.width = window.innerWidth;
      pCanvas.height = window.innerHeight;

      const particles = [];
      const particleCount = 50;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * pCanvas.width,
          y: Math.random() * pCanvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }

      let pAnimationId;
      const animateParticles = () => {
        pAnimationId = requestAnimationFrame(animateParticles);
        ctx.clearRect(0, 0, pCanvas.width, pCanvas.height);
        particles.forEach(p => {
          p.x += p.speedX;
          p.y += p.speedY;
          if (p.x < 0) p.x = pCanvas.width;
          if (p.x > pCanvas.width) p.x = 0;
          if (p.y < 0) p.y = pCanvas.height;
          if (p.y > pCanvas.height) p.y = 0;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(217, 119, 6, ${p.opacity})`;
          ctx.fill();
        });
      };
      animateParticles();

      const handlePResize = () => {
        pCanvas.width = window.innerWidth;
        pCanvas.height = window.innerHeight;
      };
      window.addEventListener('resize', handlePResize);

      return () => {
        window.removeEventListener('resize', handlePResize);
        cancelAnimationFrame(pAnimationId);
      };
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      observer.disconnect();
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy px-6">
      {/* Background Image */}
      <div className="absolute inset-0 z-[1]">
        <img 
          src="https://res.cloudinary.com/yurlcwrp/image/upload/v1783533174/file_000000002d0872468b32dde7e1340e9f_oukrpo.png" 
          alt="AM2PM Hotel Building" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy z-[2]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/60 via-transparent to-navy/60 z-[2]"></div>
      </div>

      {/* Three.js Canvas */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-[1]"></canvas>

      {/* Particle Canvas */}
      <canvas ref={particleCanvasRef} className="absolute inset-0 pointer-events-none z-[2]"></canvas>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-amber/10 blur-3xl float z-[2]"></div>
      <div className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-amber/5 blur-3xl float-reverse z-[2]"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-champagne/10 blur-2xl float-slow z-[2]"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto py-16">
        <h1 className="font-cinzel text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 tracking-widest">
          <span className="block">AM2PM HOTEL & SUITES AUTOGRAPH</span>
        </h1>
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Where Comfort Meets Timeless Luxury and the Art of Exceptional Hospitality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a 
            href="https://wa.me/2349036096549" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-shine bg-amber hover:bg-amber-dark text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-amber/30 flex items-center gap-2"
          >
            <i className="fab fa-whatsapp"></i>
            Book on WhatsApp
          </a>
          <a 
            href="#rooms" 
            className="glass text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
          >
            <i className="fas fa-bed"></i>
            Explore Suites
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-white text-sm font-medium">
            <i className="fas fa-gem text-amber"></i>
            87+ Luxury Suites
          </span>
          <span className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-white text-sm font-medium">
            <i className="fas fa-shield-halved text-amber"></i>
            24/7 Power & Security
          </span>
          <span className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-white text-sm font-medium">
            <i className="fas fa-heart text-amber"></i>
            100% Satisfaction
          </span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-1 h-2 bg-amber rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;