
const Products = [
    {
        id: 1,
        imagen: require ("../images/producto1.jpg"),
        titulo: "Estantería modular",
        precio: "$5.200",
        stock: 20
    },

    {
        id: 2,
        imagen: require ("../images/producto2.jpg"),
        titulo: "Estantería madera",
        precio: "$3.800",
        stock: 15
    },

    {
        id: 3,
        imagen: require ("../images/producto3.jpg"),
        titulo: "Sillón mostaza",
        precio: "$7.800",
        stock: 34
    },

    {
        id: 4,
        imagen: require ("../images/producto4.jpg"),
        titulo: "Sillon tapizado",
        precio: "$6.500",
        stock: 5
    },

    {
        id: 5,
        imagen: require ("../images/producto5.jpg"),
        titulo: "Mesa vidrio",
        precio: "$12.000",
        stock: 9
    },

    {
        id: 6,
        imagen: require ("../images/producto6.jpg"),
        titulo: "Mesa blanca",
        precio: "$14.700",
        stock: 13
    },

    {
        id: 7,
        imagen: require ("../images/producto7.jpg"),
        titulo: "Escritorio madera",
        precio: "$21.300",
        stock: 7
    },

    {
        id: 8,
        imagen: require ("../images/producto8.jpg"),
        titulo: "Escritorio curvo",
        precio: "$23.400",
        stock: 3
    },

    {
        id: 9,
        imagen: require ("../images/producto9.png"),
        titulo: "Planta artificial",
        precio: "$2.100",
        stock: 54
    },

    {
        id: 10,
        imagen: require ("../images/producto10.jpg"),
        titulo: "Combo plantas",
        precio: "$3.600",
        stock: 27
    },

    {
        id: 11,
        imagen: require ("../images/producto11.png"),
        titulo: "Adorno jirafa",
        precio: "$1.300",
        stock: 56
    },

    {
        id: 12,
        imagen: require ("../images/producto12.jpg"),
        titulo: "Conjunto 3 cuadros",
        precio: "$4.700",
        stock: 32
    },

    {
        id: 13,
        imagen: require ("../images/producto13.jpg"),
        titulo: "Lámpara ADN",
        precio: "$7.800",
        stock: 21
    },

    {
        id: 14,
        imagen: require ("../images/producto14.jpg"),
        titulo: "Lámpara LED",
        precio: "$5.900",
        stock: 46
    },

    {
        id: 15,
        imagen: require ("../images/producto15.jpg"),
        titulo: "Silla madera",
        precio: "$4.400",
        stock: 35
    },

    {
        id: 16,
        imagen: require ("../images/producto16.jpg"),
        titulo: "Silla blanca",
        precio: "$7.100",
        stock: 32
    },
];

export const getProducts = () =>
    new Promise ((res, rej) => {
        setTimeout(() => {
            res (Products);
        }, 5000);
    });