import { getProducts } from "api/products"
import { ItemListContainer, Newsletter } from "components/index"
import { useEffect, useState } from "react"

export const Home = () => {
    const [products, setProducts] = useState ([]);
    const [loading, setLoading] = useState (true);

    useEffect (() => {
        // cargarData ();
        setProducts ([]);
        setLoading (true);
        getProducts ()
        .then ((items) => {
            setProducts (items)
            setLoading (false);
        })
        .catch ((e) => console.log (e));
    }, []);

    const agregarCarrito = (producto) => {
        console.log (producto)
    }

    return (
            <main className="main">
                <img className="imagenPresentacion" src="/images/imagen1.png" alt="imagenPresentacion" />

                <div className='main_seccionProductos'>
                    <div className='main_tituloProductos'>
                        <hr />
                        <h1> PRODUCTOS </h1>
                        <hr />
                    </div>
                    <ItemListContainer 
                    products={products}
                    loading={loading}
                    onAdd={agregarCarrito}
                    />
                </div>

                <div className='main_newsletter'>
                    <Newsletter />
                </div>
            </main>
    );
};