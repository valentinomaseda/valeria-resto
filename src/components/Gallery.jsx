import '../styles/gallery.css';

const Gallery = () => {
  // Aquí pondrás las fotos del salón, la barra y el frente
  const images = [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4", 
    "https://images.unsplash.com/photo-1552566626-52f8b828add9",
    "https://images.unsplash.com/photo-1559339352-11d035aa65de"
  ];

  return (
    <div className="galleryGrid">
      {images.map((url, idx) => (
        <div key={idx} className="galleryItem">
          <img src={url} alt={`Local ${idx}`} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;