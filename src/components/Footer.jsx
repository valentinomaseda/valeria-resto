// src/components/Footer.jsx
import  '../styles/footer.css';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footerMain">
      <div className="footerContent">
        {/* Columna 1: Branding */}
        <div className="footerColumn">
          <img src={logo} alt="Valeria Logo" className="footerLogo" />  
          <p className="footerTagline">Elegancia & Sabor en Arrecifes</p>
        </div>

        {/* Columna 2: Ubicación y Contacto */}
        <div className="footerColumn">
          <h4 className="columnTitle">Encontranos</h4>
          <p className="footerText">Esq. Sarmiento e Irlanda</p>
          <p className="footerText">Arrecifes, Buenos Aires</p>
          <p className="footerPhone">2478 - 460060</p>
        </div>

        {/* Columna 3: Horarios y Redes */}
        <div className="footerColumn">
          <h4 className="columnTitle">Horarios</h4>
          <p className="footerText">Miércoles a Domingos</p>
          <p className="footerText">20:00 hs - 01:00 hs</p>
          <div className="footerSocials">
            <a href="https://instagram.com/valeria.resto" target="_blank" rel="noreferrer">
              @valeria.resto
            </a>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <p>© {new Date().getFullYear()} Valeria Resto Bar. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;