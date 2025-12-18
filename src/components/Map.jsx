// src/components/Map.jsx
import '../styles/map.css';

const Map = () => {
  // Dirección codificada para la URL de Google Maps
  const address = "Sarmiento & Irlanda, Arrecifes, Provincia de Buenos Aires";
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=TU_API_KEY_AQUI&q=${encodeURIComponent(address)}`;

  /* Nota: Para un mock rápido, puedes usar el link de "Compartir > Incorporar mapa" 
     directamente desde Google Maps sin necesidad de una API Key.
  */
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.666616053427!2d-60.104443424269375!3d-34.061730573153364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bb9729a5953049%3A0x6b7727c62c45973!2sSarmiento%20%26%20Irlanda%2C%20Arrecifes%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar";

  return (
    <section id="ubicacion" className="mapSection animate-on-scroll">
      <h2 className="title">Dónde Encontrarnos</h2>
      <div className="divider"></div>
      <div className="mapContainer">
        <iframe
          src={embedUrl}
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de Valeria Resto Bar"
        ></iframe>
      </div>
    </section>
  );
};

export default Map;