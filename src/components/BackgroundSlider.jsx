// src/components/BackgroundSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
// Importamos los módulos necesarios de Swiper
import { Autoplay, EffectFade } from 'swiper/modules';

// Importamos los estilos base de Swiper
import 'swiper/css';
import 'swiper/css/effect-fade';
import '../styles/backgroundSlider.css';

// Imágenes de prueba (reemplázalas con fotos reales del resto)
const restaurantImages = [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1920", // Salón
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1920", // Barra
    "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1920", // Detalle
    "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1920"  // Ambiente
];

const BackgroundSlider = () => {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Autoplay, EffectFade]} // Activamos autoplay y efecto de desvanecido
        effect="fade" // Cambio suave entre fotos en vez de deslizar
        spaceBetween={0}
        slidesPerView={1}
        loop={true} // Que nunca termine
        speed={2000} // Duración de la transición (más suave)
        autoplay={{
          delay: 5000, // Tiempo que se queda cada imagen (5 segundos)
          disableOnInteraction: false, // Sigue rodando aunque toquen la pantalla
        }}
        className="mySwiper"
      >
        {restaurantImages.map((imgUrl, index) => (
          <SwiperSlide key={index}>
            {/* La imagen de fondo */}
            <div 
                className="slide-image"
                style={{ backgroundImage: `url(${imgUrl})` }}
            ></div>
            {/* La capa oscura superpuesta */}
            <div className="slide-overlay"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BackgroundSlider;