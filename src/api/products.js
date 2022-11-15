import { db } from "./config";
import { collection, getDocs, query, where, doc, getDoc, addDoc } from "firebase/firestore";

const productsRef = collection (db, "items");

export const getProducts = async (categoryId) => {
    const products = [];

    const q = categoryId
    ? query(productsRef, where ("categoria", "==", categoryId))
    : productsRef;

    const querySnapshot = await getDocs (q);

    querySnapshot.forEach ((doc) => {
        products.push ({ ...doc.data(), id: doc.id });
    });

    return products;
};

export const getProduct = async (productId) => {
    const document = doc(db, "items", productId);

    const docSnap = await getDoc (document);

    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
    }

    return null;
};


const products = [
    {
        categoria: "estanterias",
        imagen: "images/producto1.jpg",
        titulo: "Estantería modular",
        precio: 5200,
        stock: 20,
        descripcion: "Estantería de madera con amplios módulos rectangulares para almacenar tus pertenencias con toda la onda!"
    },

    {
        categoria: "estanterias",
        imagen: "images/producto2.jpg",
        titulo: "Estantería madera",
        precio: 3800,
        stock: 15,
        descripcion: "Estantería de madera con tres pisos para almacenar tus pertenencias con toda la onda!"
    },

    {
        categoria: "sillas",
        imagen: "images/producto3.jpg",
        titulo: "Sillón mostaza",
        precio: 7800,
        stock: 34,
        descripcion: "Sillón individual de ecocuero con un color mostaza que se adecúa a cualquier espacio"
    },

    {
        categoria: "sillas",
        imagen: "images/producto4.jpg",
        titulo: "Sillon tapizado",
        precio: 6500,
        stock: 5,
        descripcion: "Sillón individual tapizado para brindar mayor comodidad, y darle a su vez, una hermosa terminación"
    },

    {
        categoria: "mesas",
        imagen: "images/producto5.jpg",
        titulo: "Mesa vidrio",
        precio: 12000,
        stock: 9,
        descripcion: "Mesa de vidrio con apoyo de acero. La base es abstracta y responde a las nuevas tendencias"
    },

    {
        categoria: "mesas",
        imagen: "images/producto6.jpg",
        titulo: "Mesa blanca",
        precio: 14700,
        stock: 13,
        descripcion: "Mesa blanca simple, con base de madera revestida para brindarle una mayor duración y resistencia"
    },

    {
        categoria: "escritorios",
        imagen: "images/producto7.jpg",
        titulo: "Escritorio madera",
        precio: 21300,
        stock: 7,
        descripcion: "Escritorio de madera que combina el roble con un color blanco, que da un aspecto sobrio y elegante"
    },

    {
        categoria: "escritorios",
        imagen: "images/producto8.jpg",
        titulo: "Escritorio curvo",
        precio: 23400,
        stock: 3,
        descripcion: "Escritorio con curvas para brindar una mayor fluidez y flexibilidad a los espacios"
    },

    {
        categoria: "decoracion",
        imagen: "images/producto9.png",
        titulo: "Planta artificial",
        precio: 2100,
        stock: 54,
        descripcion: "Maceta con planta real, para darle vida a tus ambientes"
    },

    {
        categoria: "decoracion",
        imagen: "images/producto10.jpg",
        titulo: "Combo plantas",
        precio: 3600,
        stock: 27,
        descripcion: "Maceta con planta real, para darle vida a tus ambientes"
    },

    {
        categoria: "decoracion",
        imagen: "images/producto11.png",
        titulo: "Adorno jirafa",
        precio: 1300,
        stock: 56,
        descripcion: "Combo de tres adornos de jirafas, con tres bellos colores en combinación unos con los otros"
    },

    {
        categoria: "decoracion",
        imagen: "images/producto12.jpg",
        titulo: "Conjunto 3 cuadros",
        precio: 4700,
        stock: 32,
        descripcion: "Combo de tres cuadros con lineas abstractas, que contrastan las sombras con la claridad de tonos beiges"
    },

    {
        categoria: "decoracion",
        imagen: "images/producto13.jpg",
        titulo: "Lámpara ADN",
        precio: 7800,
        stock: 21,
        descripcion: "Lámpara LED que con dos espirales recorre su altura de 1,20m"
    },

    {
        categoria: "decoracion",
        imagen: "images/producto14.jpg",
        titulo: "Lámpara LED",
        precio: 5900,
        stock: 46,
        descripcion: "Lámpara LED de 1,10m con distintas tonalidades posibles, que varían entre tonos fríos y cálidos"
    },

    {
        categoria: "sillas",
        imagen: "images/producto15.jpg",
        titulo: "Silla madera",
        precio: 4400,
        stock: 35,
        descripcion: "Silla de madera ideal para ubicarla en exteriores"
    },

    {
        categoria: "sillas",
        imagen: "images/producto16.jpg",
        titulo: "Silla blanca",
        precio: 7100,
        stock: 32,
        descripcion: "Silla blanca con base de madera de roble revestida para brindarle mayor durabilidad"
    },
];

export const cargarData = () => {
    products.forEach (async (product) => {
        await addDoc (productsRef, product)
    });
};