import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const { carrito } = useContext(CartContext);

  const totalUnidades = carrito.reduce(
    (total, producto) => total + producto.cantidad,
    0
  );

  return (
    <Link to="/carrito" className="cart-widget">
        🛒 {totalUnidades}
    </Link>
  );
}

export default CartWidget;