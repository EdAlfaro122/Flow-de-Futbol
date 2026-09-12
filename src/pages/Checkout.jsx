import { useContext, useMemo } from "react";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import "./checkout.css";

export default function Checkout() {
  const { carrito, vaciarCarrito } = useContext(CartContext);

  const total = useMemo(() => {
    return carrito.reduce(
      (acumulado, producto) => acumulado + producto.precio * producto.cantidad,
      0
    );
  }, [carrito]);

  const iniciarCompra = async () => {
    if (carrito.length === 0) {
      Swal.fire("Carrito vacío", "No tienes productos para comprar", "warning");
      return;
    }

    const resultado = await Swal.fire({
      title: "Datos del comprador",
      html: `
        <input id="nombre" class="swal2-input" placeholder="Nombre completo">
        <input id="email" type="email" class="swal2-input" placeholder="Correo electrónico">
        <input id="telefono" type="tel" class="swal2-input" placeholder="Teléfono">
      `,
      confirmButtonText: "Continuar",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      preConfirm: () => {
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefono = document.getElementById("telefono").value.trim();

        if (!nombre || !email || !telefono) {
          Swal.showValidationMessage("Por favor, completa todos los campos");
          return false;
        }
        return { nombre, email, telefono };
      },
    });

    if (!resultado.isConfirmed) return;

    try {
      const productosFiltrados = carrito.map(
        ({ id, equipo, equipacion, precio, cantidad }) => ({
          id,
          equipo,
          equipacion,
          precio,
          cantidad
        })
      );

      const orden = {
        comprador: resultado.value,
        productos: productosFiltrados,
        total: total,
        fecha: new Date(), 
      };

      const docRef = await addDoc(collection(db, "ordenes"), orden);
      
      vaciarCarrito();
      
      await Swal.fire({
        title: "¡Gracias por tu compra!",
        text: `Recibimos tu pedido correctamente. ID de orden: ${docRef.id}`,
        icon: "success",
        confirmButtonText: "Aceptar",
      });

    } catch (error) {
      console.error("Error al guardar la orden:", error);
      Swal.fire({
        title: "Error",
        text: "No pudimos guardar tu pedido. Intenta nuevamente.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };

  return ( <main className="checkout"> 
    <h1>Finalizar compra</h1> 
  
  {carrito.length === 0 ? ( 
    <p className="checkout-vacio"> 
    No hay productos en el carrito. </p> 
    ) : ( 
    
    <section className="checkout-resumen"> 
    <h2>Resumen de tu pedido</h2> 
    
    <ul className="checkout-productos"> 
      {carrito.map((producto, index) => ( 
        <li className="checkout-producto" key={`${producto.id}-${index}`} > 

        <div> 
          <p className="checkout-producto-nombre"> {producto.equipo} </p> 
          <p className="checkout-producto-detalle"> {producto.equipacion} · {producto.temporada} </p> 
        </div> 
        <div className="checkout-producto-detalle"> {producto.cantidad} × ${producto.precio} USD 
        </div> 
        
        <strong> ${(producto.precio * producto.cantidad).toFixed(2)} USD </strong> 
        </li> ))} 
        </ul> 
        <div className="checkout-total"> 
          <h3>Total a pagar: ${total.toFixed(2)} USD</h3> 
        </div> 
        
        <button className="checkout-button" onClick={iniciarCompra} > 
          Confirmar y Pagar 
        </button> 
        </section> )} 
        </main> 
        ); 
      }