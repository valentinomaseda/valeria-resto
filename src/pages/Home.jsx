// src/pages/Home.jsx
import '../styles/home.css';
import Navbar from '../components/NavBar';
import Hero from '../components/Hero';
import FeaturedDishes from '../components/FeaturedDishes';
import Gallery from '../components/Gallery';
import CTAButtons from '../components/CTAButtons';
import Footer from '../components/Footer';
import useScrollAnimation from '../hooks/useScrollAnimation';
import Map from '../components/Map';

const Home = () => {
  useScrollAnimation();

  return (
    <div className="container" id="inicio"> {/* ID para el inicio */}
      <Navbar />
      <main>
        {/* Sección de Portada */}
        <div className="animate-on-scroll">
          <Hero />
        </div>

        {/* Sección de Reservas y Menú PDF */}
        <section id="reservas" className="animate-on-scroll">
          <CTAButtons />
        </section>

        {/* Sección de Galería del Lugar */}
        <section id="nosotros" className="sectionPadding animate-on-scroll">
          <h2 className="title">Nuestro Espacio</h2>
          <div className="divider"></div>
          <Gallery />
        </section>

        {/* Sección de Platos Destacados */}
        <section id="menu" className="sectionPadding animate-on-scroll">
          <h2 className="title">Sugerencias del Chef</h2>
          <div className="divider"></div>
          <FeaturedDishes />
        </section>
        
        {/* Sección de Mapa */}
        <section id="mapa" className="sectionPadding animate-on-scroll">
          <h2 className="title">Dónde Encontrarnos</h2>
          <div className="divider"></div>
          <Map />
        </section>
      </main>
      
      <div className="animate-on-scroll">
        <Footer />
      </div>
    </div>
  );
};

export default Home;