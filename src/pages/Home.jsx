import { getProducts } from "api/products"
import { ItemListContainer } from "components/index"
import { Newsletter } from "components/index"
import { useEffect } from "react"
import { useState } from "react"
import imagen1 from "../images/imagen1.png"

export const Home = () => {
    const [products, setProducts] = useState ([]);
    const [loading, setLoading] = useState (true);

    useEffect (() => {
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
                <img className="imagenPresentacion" src={imagen1} alt="imagenPresentacion" />

                <div className='main_seccionProductos'>
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
    )
}