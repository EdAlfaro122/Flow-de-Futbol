import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase/config";

const productos = [
  {
    "id": 1,
    "equipo": "Real Madrid",
    "equipacion": "Local",
    "temporada": "2026/27",
    "precio": 45,
    "inicialMinima": 10,
    "dorsales": [
      "Mbappe",
      "Vini JR",
      "Bellingham"
    ],
    "tallas": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": 8,
    "moneda": "USD",
    "imagen": "/images/realmadrid-local.webp"
  },
  {
    "id": 2,
    "equipo": "Real Madrid",
    "equipacion": "Visitante",
    "temporada": "2026/27",
    "precio": 45,
    "inicialMinima": 10,
    "dorsales": [
      "Mbappe",
      "Vini JR",
      "Bellingham"
    ],
    "tallas": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": 10,
    "moneda": "USD",
    "imagen": "/images/realmadrid-visitante.webp"
  },
  {
    "id": 3,
    "equipo": "Barcelona",
    "equipacion": "Local",
    "temporada": "2026/27",
    "precio": 45,
    "inicialMinima": 10,
    "dorsales": [
      "Lamine Yamal",
      "Raphinha",
      "Pedri"
    ],
    "tallas": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": 10,
    "moneda": "USD",
    "imagen": "/images/barcelona-local.webp"
  },
  {
    "id": 4,
    "equipo": "Barcelona",
    "equipacion": "Visitante",
    "temporada": "2026/27",
    "precio": 45,
    "inicialMinima": 10,
    "dorsales": [
      "Lamine Yamal",
      "Raphinha",
      "Pedri"
    ],
    "tallas": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": 5,
    "moneda": "USD",
    "imagen": "/images/barcelona-visitante.webp"
  },
  {
    "id": 5,
    "equipo": "Manchester City",
    "equipacion": "Local",
    "temporada": "2026/27",
    "precio": 45,
    "inicialMinima": 10,
    "dorsales": [
      "Haaland",
      "Foden",
      "Cherki"
    ],
    "tallas": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": 5,
    "moneda": "USD",
    "imagen": "/images/city-local.webp"
  },
  {
    "id": 6,
    "equipo": "Argentina",
    "equipacion": "Local",
    "temporada": "2026",
    "precio": 45,
    "inicialMinima": 10,
    "dorsales": [
      "Messi",
      "Julian"
    ],
    "tallas": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": 10,
    "moneda": "USD",
    "imagen": "/images/argentina-local.webp"
  },
  {
    "id": 7,
    "equipo": "Argentina",
    "equipacion": "Visitante",
    "temporada": "2026",
    "precio": 45,
    "inicialMinima": 10,
    "dorsales": [
      "Messi",
      "Julian"
    ],
    "tallas": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": 10,
    "moneda": "USD",
    "imagen": "/images/argentina-visitante.webp"
  },
  {
    "id": 8,
    "equipo": "Bayern Munich",
    "equipacion": "Visitante",
    "temporada": "2026/27",
    "precio": 45,
    "inicialMinima": 10,
    "dorsales": [
      "Kane",
      "Olise",
      "Luis Diaz"
    ],
    "tallas": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": 5,
    "moneda": "USD",
    "imagen": "/images/bayern-visitante.webp"
  },
  {
    "id": 9,
    "equipo": "España",
    "equipacion": "Local",
    "temporada": "2026",
    "precio": 45,
    "inicialMinima": 10,
    "dorsales": [
      "Pedri",
      "Olmo",
      "Ferrán",
      "Cucurella",
      "Cubarsi"
    ],
    "tallas": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": 5,
    "moneda": "USD",
    "imagen": "/images/espana-local.webp"
  },
  {
    "id": 10,
    "equipo": "España",
    "equipacion": "Visitante",
    "temporada": "2026",
    "precio": 45,
    "inicialMinima": 10,
    "dorsales": [
      "Pedri",
      "Olmo",
      "Ferrán",
      "Cucurella",
      "Cubarsi"
    ],
    "tallas": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": 5,
    "moneda": "USD",
    "imagen": "/images/espana-visitante.webp"
  },
  {
    "id": 11,
    "equipo": "Inter de Milan",
    "equipacion": "Local",
    "temporada": "2026/27",
    "precio": 45,
    "inicialMinima": 10,
    "dorsales": [
      "Lautaro",
      "Thuram"
    ],
    "tallas": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": 5,
    "moneda": "USD",
    "imagen": "/images/inter-local.webp"
  },
  {
    "id": 12,
    "equipo": "Liverpool",
    "equipacion": "Local",
    "temporada": "2026/27",
    "precio": 45,
    "inicialMinima": 10,
    "dorsales": [
      "Szoboszlai",
      "Mac Allister",
      "Isak"
    ],
    "tallas": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": 5,
    "moneda": "USD",
    "imagen": "/images/liverpool-local.webp"
  },
  {
    "id": 13,
    "equipo": "Portugal",
    "equipacion": "Local",
    "temporada": "2026",
    "precio": 45,
    "inicialMinima": 10,
    "dorsales": [
      "Ronaldo",
      "Neves",
      "Vitinha"
    ],
    "tallas": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": 5,
    "moneda": "USD",
    "imagen": "/images/portugal-local.webp"
  },
  {
    "id": 14,
    "equipo": "Portugal",
    "equipacion": "Visitante",
    "temporada": "2026",
    "precio": 45,
    "inicialMinima": 10,
    "dorsales": [
      "Ronaldo",
      "Neves",
      "Vitinha"
    ],
    "tallas": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": 5,
    "moneda": "USD",
    "imagen": "/images/portugal-visitante.webp"
  }
];

const cargarProductos = async () => {
  try {
    for (const producto of productos) {
      const docRef = await addDoc(
        collection(db, "productos"),
        producto
      );

      console.log(
        `Producto ${producto.id} creado con ID: ${docRef.id}`
      );
    }

    console.log("✅ Todos los productos fueron cargados");
  } catch (error) {
    console.error("❌ Error al cargar productos:", error);
  }
};

cargarProductos();


