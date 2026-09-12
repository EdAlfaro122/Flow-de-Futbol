import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>Todos los derechos reservados © 2026 Flow de Fútbol</p>

      <div className="footer-socials">
  <a href="https://www.instagram.com/flowdefutbol/" target="_blank" rel="noopener noreferrer">
    <img src="/images/instagram-logo.webp" alt="Instagram" />
  </a>

  <a href="https://www.tiktok.com/@flowdefutbol?_r=1&_t=ZS-99Qjlt7JmXQ" target="_blank" rel="noopener noreferrer">
    <img src="/images/tiktok-logo.png" alt="TikTok" />
  </a>

  <a href="https://wa.me/c/584123518274" target="_blank" rel="noopener noreferrer">
    <img src="/images/whatsapp-logo.png" alt="WhatsApp" />
  </a>
</div>
    </footer>
  );
}

export default Footer;