import { useContext, useMemo } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./carrito.css";

function Carrito() {
  const navigate = useNavigate();

  const {
    carrito,
    incrementarCantidad,
    decrementarCantidad,
    eliminarDelCarrito,
    vaciarCarrito,
  } = useContext(CartContext);

  const total = useMemo(() => {
    return carrito.reduce(
      (acumulado, producto) =>
        acumulado + producto.precio * producto.cantidad,
      0
    );
  }, [carrito]);

  return (
    <main className="carrito">
  <h1>Mi carrito</h1>

  {carrito.length === 0 ? (
    <p className="carrito-vacio">Tu carrito está vacío.</p>
  ) : (
    <div className="carrito-contenido">
      <section className="productos-carrito">
        {carrito.map((producto, index) => {
          const subtotal = producto.precio * producto.cantidad;

          return (
            <article
              className="producto-carrito"
              key={`${producto.id}-${index}`}
            >
              <img
                src={producto.imagen}
                alt={`Camisa ${producto.equipo}`}
                width="150"
              />

              <div className="producto-info">
                <h2>{producto.equipo}</h2>

                <p>
                  {producto.equipacion} · {producto.temporada}
                </p>

                <p>Talla: {producto.talla}</p>

                <p>
                  Dorsal: {producto.dorsal || "Sin dorsal"}
                </p>

                <div className="cantidad-control">
                <button
                  onClick={() =>
                    decrementarCantidad(
                      producto.id,
                      producto.talla,
                      producto.dorsal
                    )
                  }
                >
                  -
                </button>

                <span>{producto.cantidad}</span>

                <button
                  onClick={() =>
                    incrementarCantidad(
                      producto.id,
                      producto.talla,
                      producto.dorsal
                    )
                  }
                >
                  +
                </button>
              </div>

                <p>
                  Precio unitario: ${producto.precio} USD
                </p>

                <p className="producto-subtotal">
                  Subtotal: ${subtotal} USD
                </p>

                <button
                  onClick={() =>
                    eliminarDelCarrito(
                      producto.id,
                      producto.talla,
                      producto.dorsal
                    )
                  }
                >
                  Eliminar
                </button>

              </div>
            </article>
          );
        })}
      </section>

      <div className="carrito-total">
        <h2>Total: ${total} USD</h2>

        <button
          className="checkout-button"
          onClick={() => navigate("/checkout")}
        >
          Finalizar compra
        </button>

        <button onClick={vaciarCarrito}>
          Vaciar carrito
        </button>
      </div>
    </div>
  )}
</main>
  );
}

export default Carrito;