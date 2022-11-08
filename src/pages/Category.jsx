import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../api/products";
import { ItemListContainer } from "components/index";

export const Category = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setProducts([]);
        setLoading(true);
        getProducts(categoryId)
        .then((items) => {
            setProducts(items);
            setLoading(false);
        })
        .catch((e) => console.log(e));
    }, [categoryId]);

    return (
        <>
        <div className="content">
            <h2>
            Lo mejor en la categoría <span>{categoryId}</span>{" "}
            </h2>
        </div>
        <main className="main">
                <div className='main_seccionProductos_categorias'>
                    <ItemListContainer products={products} loading={loading}/>
                </div>
            </main>
        </>
    );
};