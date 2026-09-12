import { useState } from "react";
import "./ItemCount.css";

function ItemCount({ stock, onAdd }) {
  const stockDisponible = Number(stock);
  const [cantidad, setCantidad] = useState(1);

  const incrementar = () => {
    if (cantidad < stockDisponible) {
      setCantidad(cantidad + 1);
    }
  };

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  if (stockDisponible === 0) {
    return (
      <div className="item-count">
        <p>Sin stock</p>
      </div>
    );
  }

  return (
    <div className="item-count">
      <button type="button" onClick={decrementar}>
        −
      </button>

      <span>{cantidad}</span>

      <button type="button" onClick={incrementar}>
        +
      </button>

      <button type="button" onClick={() => onAdd(cantidad)}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;