import { Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ItemListContainer from "./pages/ItemListContainer";
import Carrito from "./pages/Carrito";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import ItemDetailContainer from "./pages/ItemDetailContainer";
import Checkout from "./pages/Checkout";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase/config";

function App() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const consulta = await getDocs(collection(db, "productos"));

        const productosFirestore = consulta.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProductos(productosFirestore);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      } finally {
        setCargando(false);
      }
    };

    obtenerProductos();
  }, []);

  return (
    <div className="app">
      <Navbar />

      <main className="app-content">
        {cargando ? (
          <div className="loader-container">
            <div className="loader"></div>
            <p>Cargando productos...</p>
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<Home productos={productos} />} />

            <Route
              path="/catalogo"
              element={<ItemListContainer productos={productos} />}
            />

            <Route
              path="/producto/:id"
              element={<ItemDetailContainer productos={productos} />}
            />

            <Route path="/carrito" element={<Carrito />} />

            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;