import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import CheckAvailability from './sections/CheckAvailability';
import About from './sections/About';
import Rooms from './sections/Rooms';
import Amenities from './sections/Amenities';
import Gallery from './sections/Gallery';
import FAQ from './sections/FAQ';
import Testimonials from './sections/Testimonials';
import SpecialOffers from './sections/SpecialOffers';
import SocialMedia from './sections/SocialMedia';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-ivory text-navy antialiased">
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <CheckAvailability />
        <About />
        <Rooms />
        <Amenities />
        <Gallery />
        <FAQ />
        <Testimonials />
        {/* <SpecialOffers /> */}
        <SocialMedia />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;