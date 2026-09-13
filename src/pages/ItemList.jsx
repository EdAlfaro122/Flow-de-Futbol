import ProductCard from "../components/ProductCard";
import "./ItemList.css";

function ItemList({ productos }) {
  return (
    <>
      <h1 className="catalogo-title">Catálogo</h1>

      <div className="products-grid">
        {productos.map((producto) => (
          <ProductCard
            key={producto.id}
            producto={producto}
          />
        ))}
      </div>
    </>
  );
}

export default ItemList;