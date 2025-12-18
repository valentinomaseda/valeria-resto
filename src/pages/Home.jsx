// pages/Home.jsx
import '../styles/home.css';
import Navbar from '../components/NavBar';
import Hero from '../components/Hero';
import MenuPreview from '../components/MenuPreview';
import Footer from '../components/Footer';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Home = () => {
  useScrollAnimation();

  return (
    <div className="container">
      <Navbar />
      <main>
        <div className="animate-on-scroll">
          <Hero />
        </div>
        <section className="sectionPadding animate-on-scroll">
          <h2 className="title">Sugerencias del Chef</h2>
          <div className="divider"></div>
          <MenuPreview />
        </section>
      </main>
      <div className="animate-on-scroll">
        <Footer />
      </div>
    </div>
  );
};

export default Home;