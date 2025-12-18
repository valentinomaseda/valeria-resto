// src/components/FeaturedDishes.jsx
import '../styles/featuredDishes.css';

const FeaturedDishes = () => {
  const dishes = [
    {
      name: "Ojo de Bife Mar y Tierra",
      description: "Con deliciosa salsa de camarones",
      image: "https://images.unsplash.com/photo-1617727855707-bc77d2c8e9e6?q=80&w=1170",
    },
    {
      name: "Salmón al Papillote",
      description: "Fresco con verduras al vapor",
      image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?q=80&w=800",
    },
    {
      name: "Trucha a la Fiorentina",
      description: "Con colchón de espinacas a la crema",
      image: "https://images.unsplash.com/photo-1551248429-40975aa4de74?q=80&w=800",
    },
    {
      name: "Medallón de Lomo",
      description: "A la pimienta con guarnición",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800",
    }
  ];

  return (
    <div className="accordionContainer">
      {dishes.map((dish, index) => (
        <div key={index} className="accordionItem">
          <img src={dish.image} alt={dish.name} className="accordionImage" />
          <div className="accordionOverlay">
            <div className="accordionText">
              <h3 className="dishTitle">{dish.name}</h3>
              <p className="dishSubtitle">{dish.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedDishes;