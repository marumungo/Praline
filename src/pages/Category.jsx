import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../api/products";
import { ItemListContainer } from "components/index";
import { Navigate } from "../../node_modules/react-router-dom/dist/index";

export const Category = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState ([]);
    const [loading, setLoading] = useState (true);

    useEffect(() => {
        setProducts ([]);
        setLoading (true);
        getProducts (categoryId)
        .then((items) => {
            setProducts (items);
            setLoading (false);
        })
        .catch((e) => console.log(e));
    }, [categoryId]);

    return (
        <>
            {!categoryId ? <Navigate to="/paginaNoEncontrada" replace /> : null}
            <main className="main">
                <div className='main_seccionProductos_categorias'>
                    <div className='main_tituloProductos'>
                        <hr />
                        <h1> PRODUCTOS </h1>
                        <hr />
                    </div>
                    <div className="main_tituloProductos_categoria">
                        <h2>
                            Lo mejor en <strong>{categoryId.toUpperCase()}</strong>{" "}
                        </h2>
                    </div>
                    <ItemListContainer products={products} loading={loading}/>
                </div>
            </main>
        </>
    );
};