// src/components/NavBar.jsx
import '../styles/navbar.css';

const Navbar = () => (
  <nav className="navContainer">
    <ul className="navList">
      <li><a href="#inicio" className="navLink">Inicio</a></li>
      <li><a href="#nosotros" className="navLink">El Resto</a></li>
      <li><a href="#menu" className="navLink">Destacados</a></li>
      <li><a href="#reservas" className="navLink">Reservar</a></li>
    </ul>
  </nav>
);

export default Navbar;