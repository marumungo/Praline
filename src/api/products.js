const products = [
    {
        id: 1,
        categoria: "estanterias",
        imagen: require ("../images/producto1.jpg"),
        titulo: "Estantería modular",
        precio: "$5.200",
        stock: 20,
        descripcion: "Estantería de madera con amplios módulos rectangulares para almacenar tus pertenencias con toda la onda!"
    },

    {
        id: 2,
        categoria: "estanterias",
        imagen: require ("../images/producto2.jpg"),
        titulo: "Estantería madera",
        precio: "$3.800",
        stock: 15,
        descripcion: "Estantería de madera con tres pisos para almacenar tus pertenencias con toda la onda!"
    },

    {
        id: 3,
        categoria: "sillas",
        imagen: require ("../images/producto3.jpg"),
        titulo: "Sillón mostaza",
        precio: "$7.800",
        stock: 34,
        descripcion: "Sillón individual de ecocuero con un color mostaza que se adecúa a cualquier espacio"
    },

    {
        id: 4,
        categoria: "sillas",
        imagen: require ("../images/producto4.jpg"),
        titulo: "Sillon tapizado",
        precio: "$6.500",
        stock: 5,
        descripcion: "Sillón individual tapizado para brindar mayor comodidad, y darle a su vez, una hermosa terminación"
    },

    {
        id: 5,
        categoria: "mesas",
        imagen: require ("../images/producto5.jpg"),
        titulo: "Mesa vidrio",
        precio: "$12.000",
        stock: 9,
        descripcion: "Mesa de vidrio con apoyo de acero. La base es abstracta y responde a las nuevas tendencias"
    },

    {
        id: 6,
        categoria: "mesas",
        imagen: require ("../images/producto6.jpg"),
        titulo: "Mesa blanca",
        precio: "$14.700",
        stock: 13,
        descripcion: "Mesa blanca simple, con base de madera revestida para brindarle una mayor duración y resistencia"
    },

    {
        id: 7,
        categoria: "escritorios",
        imagen: require ("../images/producto7.jpg"),
        titulo: "Escritorio madera",
        precio: "$21.300",
        stock: 7,
        descripcion: "Escritorio de madera que combina el roble con un color blanco, que da un aspecto sobrio y elegante"
    },

    {
        id: 8,
        categoria: "escritorios",
        imagen: require ("../images/producto8.jpg"),
        titulo: "Escritorio curvo",
        precio: "$23.400",
        stock: 3,
        descripcion: "Escritorio con curvas para brindar una mayor fluidez y flexibilidad a los espacios"
    },

    {
        id: 9,
        categoria: "decoracion",
        imagen: require ("../images/producto9.png"),
        titulo: "Planta artificial",
        precio: "$2.100",
        stock: 54,
        descripcion: "Maceta con planta real, para darle vida a tus ambientes"
    },

    {
        id: 10,
        categoria: "decoracion",
        imagen: require ("../images/producto10.jpg"),
        titulo: "Combo plantas",
        precio: "$3.600",
        stock: 27,
        descripcion: "Maceta con planta real, para darle vida a tus ambientes"
    },

    {
        id: 11,
        categoria: "decoracion",
        imagen: require ("../images/producto11.png"),
        titulo: "Adorno jirafa",
        precio: "$1.300",
        stock: 56,
        descripcion: "Combo de tres adornos de jirafas, con tres bellos colores en combinación unos con los otros"
    },

    {
        id: 12,
        categoria: "decoracion",
        imagen: require ("../images/producto12.jpg"),
        titulo: "Conjunto 3 cuadros",
        precio: "$4.700",
        stock: 32,
        descripcion: "Combo de tres cuadros con lineas abstractas, que contrastan las sombras con la claridad de tonos beiges"
    },

    {
        id: 13,
        categoria: "decoracion",
        imagen: require ("../images/producto13.jpg"),
        titulo: "Lámpara ADN",
        precio: "$7.800",
        stock: 21,
        descripcion: "Lámpara LED que con dos espirales recorre su altura de 1,20m"
    },

    {
        id: 14,
        categoria: "decoracion",
        imagen: require ("../images/producto14.jpg"),
        titulo: "Lámpara LED",
        precio: "$5.900",
        stock: 46,
        descripcion: "Lámpara LED de 1,10m con distintas tonalidades posibles, que varían entre tonos fríos y cálidos"
    },

    {
        id: 15,
        categoria: "sillas",
        imagen: require ("../images/producto15.jpg"),
        titulo: "Silla madera",
        precio: "$4.400",
        stock: 35,
        descripcion: "Silla de madera ideal para ubicarla en exteriores"
    },

    {
        id: 16,
        categoria: "sillas",
        imagen: require ("../images/producto16.jpg"),
        titulo: "Silla blanca",
        precio: "$7.100",
        stock: 32,
        descripcion: "Silla blanca con base de madera de roble revestida para brindarle mayor durabilidad"
    },
];

export const getProducts = (categoryId) =>
    new Promise ((res, rej) => {
        const response = categoryId
        ? products.filter ((p) => p.categoria === categoryId) : products;
        setTimeout(() => {
            res (response);
        }, 3000);
    });

export const getProduct = (productId) =>
new Promise ((res, rej) => {
    const response = products.find ((product) => product.id === +productId);
    setTimeout(() => {
        res (response);
    });
});