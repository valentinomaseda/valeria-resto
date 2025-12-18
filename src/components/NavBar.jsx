import '../styles/navbar.css';

const Navbar = () => (
  <nav className="navContainer">
    <ul className="navList">
      <li><a href="#home" className="navLink">Inicio</a></li>
      <li><a href="#menu" className="navLink">Menú</a></li>
      <li><a href="#reservas" className="navLink">Reservas</a></li>
    </ul>
  </nav>
);

export default Navbar;