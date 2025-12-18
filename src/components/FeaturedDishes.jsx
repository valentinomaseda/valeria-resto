import '../styles/featuredDishes.css';

const FeaturedDishes = () => {
  const dishes = [
    {
      name: "Ojo de Bife Mar y Tierra",
      description: "Con deliciosa salsa de camarones y guarnición.",
      image: "https://images.unsplash.com/photo-1617727855707-bc77d2c8e9e6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Placeholder de bife premium
    },
    {
      name: "Salmón al Papillote",
      description: "Salmón fresco con verduras al vapor, ligero y elegante.",
      image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?q=80&w=800", // Placeholder de salmón
    },
    {
      name: "Ensalada de Frutos de Mar",
      description: "Camarones, mejillones y salmón rosado sobre colchón de lechuga.",
      image: "https://images.unsplash.com/photo-1551248429-40975aa4de74?q=80&w=800", // Placeholder de ensalada mariscos
    }
  ];

  return (
    <div className="featuredGrid">
      {dishes.map((dish, index) => (
        <div key={index} className="dishCard">
          <div className="dishImageContainer">
            <img src={dish.image} alt={dish.name} className="dishImage" />
          </div>
          <div className="dishInfo">
            <h3 className="dishName">{dish.name}</h3>
            <p className="dishDescription">{dish.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedDishes;