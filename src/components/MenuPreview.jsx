import '../styles/menuPreview.css';
import MenuItem from './MenuItem'; // Asumiendo que está en la misma carpeta

const MenuPreview = () => {
  const platos = [
    { name: "Bife de Chorizo", description: "a la pimienta c/ guarnición a elección", price: "19500" },
    { name: "Pacú Grillado", description: "con salsa y guarnición a elección", price: "18000" },
    { name: "Boga Grillada", description: "con salsa y guarnición a elección", price: "17000" },
  ];

  return (
    <section id="menu" className="menuContainer">
      <h2 className="sectionTitle">Sugerencias</h2>
      <div className="grid">
        {platos.map((plato, index) => (
          <MenuItem key={index} {...plato} />
        ))}
      </div>
    </section>
  );
};

export default MenuPreview;