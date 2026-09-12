import { useState } from "react";
import ItemList from "./ItemList";

function ItemListContainer({ productos }) {
  const [paisSeleccionado, setPaisSeleccionado] = useState("Todos");

  const paises = [
    "España",
    "Inglaterra",
    "Italia",
    "Alemania",
    "Argentina",
    "Portugal",
  ];

  const productosFiltrados =
    paisSeleccionado === "Todos"
      ? productos
      : productos.filter((producto) => producto.pais === paisSeleccionado);

  return (
    <>

      <div className="categorias">
        <button
          onClick={() => setPaisSeleccionado("Todos")}
          className={paisSeleccionado === "Todos" ? "categoria-activa" : ""}
        >
          Todos
        </button>

        {paises.map((pais) => (
          <button
            key={pais}
            onClick={() => setPaisSeleccionado(pais)}
            className={paisSeleccionado === pais ? "categoria-activa" : ""}
          >
            {pais}
          </button>
        ))}
      </div>

      <ItemList productos={productosFiltrados} />
    </>
  );
}

export default ItemListContainer;
