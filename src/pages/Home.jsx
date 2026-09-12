import HeroCarousel from "../components/HeroCarousel";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

function Home({ productos }) {
  return (
    <>
      <HeroCarousel />

      <section className="about-section">
        <h2>Flow de Fútbol</h2>

        <p>
          La mejor calidad del país con solo $10 de inicial por tu camisa.
          Envíos gratis en toda Venezuela.
        </p>
      </section>

      <section className="featured-section">
        <h2>Camisas destacadas</h2>

        <div className="featured-products">
          {productos.slice(0, 3).map((producto) => (
            <ProductCard
              key={producto.id}
              producto={producto}
            />
          ))}
        </div>

        <Link to="/catalogo" className="catalog-button">
          Ver catálogo completo
        </Link>
      </section>
    </>
  );
}

export default Home;