import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard({ producto }) {
  return (
    <article className="product-card">

      <Link to={`/producto/${producto.id}`} className="product-image">
        <img
          src={producto.imagen}
          alt={`Camisa ${producto.equipo}`}
        />
      </Link>

      <div className="product-info">

        <span className="product-tag">
          Por encargo
        </span>

        <h2>{producto.equipo}</h2>

        <p className="product-details">
          {producto.equipacion} · {producto.temporada}
        </p>

        <p className="product-price">
          ${producto.precio} {producto.moneda}
        </p>

        <p className="product-deposit">
          Inicial desde ${producto.inicialMinima} {producto.moneda}
        </p>

        <button className="product-button">
          Encargar
        </button>

      </div>

    </article>
  );
}

export default ProductCard;