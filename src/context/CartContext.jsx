import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito((carritoActual) => {
      const productoExistente = carritoActual.find(
        (item) =>
          item.id === producto.id &&
          item.talla === producto.talla &&
          item.dorsal === producto.dorsal
      );

      if (productoExistente) {
        const nuevaCantidad =
          productoExistente.cantidad + producto.cantidad;

        // No permite superar el stock disponible
        if (nuevaCantidad > productoExistente.stock) {
          return carritoActual;
        }

        return carritoActual.map((item) =>
          item.id === producto.id &&
          item.talla === producto.talla &&
          item.dorsal === producto.dorsal
            ? {
                ...item,
                cantidad: nuevaCantidad,
              }
            : item
        );
      }

      // No permite agregar más unidades que el stock disponible
      if (producto.cantidad > producto.stock) {
        return carritoActual;
      }

      return [...carritoActual, producto];
    });
  };

  const eliminarDelCarrito = (id, talla, dorsal) => {
    setCarrito((carritoActual) =>
      carritoActual.filter(
        (item) =>
          !(
            item.id === id &&
            item.talla === talla &&
            item.dorsal === dorsal
          )
      )
    );
  };

  const incrementarCantidad = (id, talla, dorsal) => {
    setCarrito((carritoActual) =>
      carritoActual.map((item) => {
        if (
          item.id === id &&
          item.talla === talla &&
          item.dorsal === dorsal
        ) {
          // No permite superar el stock
          if (item.cantidad >= item.stock) {
            return item;
          }

          return {
            ...item,
            cantidad: item.cantidad + 1,
          };
        }

        return item;
      })
    );
  };

  const decrementarCantidad = (id, talla, dorsal) => {
    setCarrito((carritoActual) =>
      carritoActual.map((item) =>
        item.id === id &&
        item.talla === talla &&
        item.dorsal === dorsal
          ? {
              ...item,
              cantidad: Math.max(1, item.cantidad - 1),
            }
          : item
      )
    );
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <CartContext.Provider
      value={{
        carrito,
        setCarrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        incrementarCantidad,
        decrementarCantidad,
        vaciarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}