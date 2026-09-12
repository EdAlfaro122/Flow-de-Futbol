import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import "./ItemDetailContainer.css";
import ItemCount from "../components/ItemCount";
import { CartContext } from "../context/CartContext";

function ItemDetailContainer({ productos }) {
  const { id } = useParams();
  const [dorsalSeleccionado, setDorsalSeleccionado] = useState("");
  const [tallaSeleccionada, setTallaSeleccionada] = useState("");
  const [agregado, setAgregado] = useState(false);

  const { agregarAlCarrito } = useContext(CartContext);

  const producto = productos.find(
    (producto) => producto.id === Number(id)
  );

  if (!producto) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <main className="product-detail">

      <div className="product-detail-image">
        <img
          src={producto.imagen}
          alt={`Camisa ${producto.equipo}`}
        />
      </div>

      <div className="product-detail-info">

        <span className="product-tag">
          Por encargo
        </span>

        <h1>{producto.equipo}</h1>

        <p className="product-detail-details">
          {producto.equipacion} · {producto.temporada}
        </p>

        <p className="product-detail-price">
          ${producto.precio} {producto.moneda}
        </p>

        <p className="product-detail-deposit">
          Inicial desde ${producto.inicialMinima} {producto.moneda}
        </p>

        <div className="jersey-number">
          <h3>Dorsal</h3>

          <select
            value={dorsalSeleccionado}
            onChange={(e) => setDorsalSeleccionado(e.target.value)}
          >
            <option value="">Sin dorsal</option>

            {producto.dorsales.map((dorsal) => (
              <option key={dorsal} value={dorsal}>
                {dorsal}
              </option>
            ))}

            <option value="personalizado">Personalizado</option>
          </select>

          {dorsalSeleccionado === "personalizado" && (
            <div className="custom-number">
              <label htmlFor="custom-name">Nombre</label>

              <input
                id="custom-name"
                type="text"
                placeholder="Escribe el nombre"
              />

              <label htmlFor="custom-number">Número</label>

              <input
                id="custom-number"
                type="number"
                placeholder="Ej: 10"
              />
            </div>
          )}
        </div>

        <div className="jersey-sizes">
          <h3>Talla</h3>

          <div className="size-options">
            {producto.tallas.map((talla) => (
              <button
                key={talla}
                type="button"
                className={tallaSeleccionada === talla ? "selected" : ""}
                onClick={() => setTallaSeleccionada(talla)}
              >
                {talla}
              </button>
            ))}
          </div>
        </div>

        {producto.stock > 0 && !agregado && (
          <ItemCount
            stock={producto.stock}
            onAdd={(cantidad) => {
              const nuevoProducto = {
                id: producto.id,
                equipo: producto.equipo,
                equipacion: producto.equipacion,
                temporada: producto.temporada,
                precio: producto.precio,
                moneda: producto.moneda,
                imagen: producto.imagen,
                cantidad: cantidad,
                talla: tallaSeleccionada,
                dorsal: dorsalSeleccionado,
              };

              agregarAlCarrito(nuevoProducto);

              setAgregado(true);
            }}
          />
        )}

        {producto.stock === 0 && (
          <button
            type="button"
            disabled
            className="reserve-button"
          >
            No tenemos stock actualmente
          </button>
        )}

        {agregado && (
          <p>Producto agregado al carrito.</p>
        )}

      </div>

      <section className="order-info">
        <h2>¿Cómo funciona tu pedido?</h2>

        <div className="order-steps">
          <div className="order-step">
            <span>1</span>
            <p>Elige tu camisa, talla y dorsal.</p>
          </div>

          <div className="order-step">
            <span>2</span>
            <p>Paga tu inicial</p>
          </div>

          <div className="order-step">
            <span>3</span>
            <p>Gestionamos tu encargo</p>
          </div>

          <div className="order-step">
            <span>4</span>
            <p>Recibe tu camisa</p>
          </div>
        </div>
      </section>

    </main>
  );
}

export default ItemDetailContainer;