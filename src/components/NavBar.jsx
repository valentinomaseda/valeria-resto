import '../styles/navbar.css';
import V from '../assets/V.png';

const Navbar = () => (
  <nav className="navContainer">
    <ul className="navList">
      <li><a href="#inicio" className="navLink">Inicio</a></li>
      <li><a href="#nosotros" className="navLink">El Resto</a></li>
      <a href="#inicio">
        <img src={V} alt="Logo Valeria Resto Bar" className='logo-nav' />
      </a>
      <li><a href="#mapa" className="navLink">Ubicación</a></li>
      <li><a href="#menu" className="navLink">Destacados</a></li>
      <li><a href="#reservas" className="navLink">Reservar</a></li>
    </ul>
  </nav>
);

export default Navbar;