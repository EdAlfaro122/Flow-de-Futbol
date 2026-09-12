import ProductCard from "../components/ProductCard";

function ItemList({ productos }) {
  return (
    <>
      <h1>Catálogo</h1>

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