import '../styles/ctaButtons.css';

const CTAButtons = () => {
  const whatsappUrl = "https://wa.me/542478460060?text=Hola!%20Quisiera%20hacer%20una%20reserva";
  const pdfMenuUrl = "AQUI_TU_LINK_DE_GOOGLE_DRIVE"; // Pega el link compartido del PDF

  return (
    <div className="ctaContainer">
      <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btnPrimary">
        Reservar Mesa
      </a>
      <a href={pdfMenuUrl} target="_blank" rel="noreferrer" className="btnSecondary">
        Ver Menú Completo (PDF)
      </a>
    </div>
  );
};

export default CTAButtons;