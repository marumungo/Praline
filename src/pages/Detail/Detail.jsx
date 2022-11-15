import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProduct } from "api/products";
import { ItemCount } from "components/index";
import { useCartContext } from "context/cartContext";

export const Detail = () => {
    const { productId } = useParams ();
    const { addProduct } = useCartContext ();
    const [product, setProduct] = useState ({});

    useEffect (() => {
        getProduct (productId).then((data) => {
            setProduct (data);
        });
    }, [productId]);

    const handleAdd = (qty) => {
        addProduct (product, qty);
    };

    return (
        <main>
            <div className='main_producto_detalle'>
                <img src={product.imagen} alt="imagenProducto" />
                <div>
                    <div>
                        <h1 className='main_producto_title_detalle'>{product?.titulo}</h1>
                        <p className='main_producto_price_detalle'>{product?.precio}</p>
                        <p className='main_producto_descripcion_detalle'>{product?.descripcion}</p>
                    </div>
                    <div className='main_producto_itemCount'>
                        <ItemCount
                        onAdd={handleAdd}
                        stock={product?.stock}
                        />
                        <span className='stockDisponible'>Quedan <strong>{product?.stock}</strong> disponibles!</span>
                    </div>
                </div>
            </div>
        </main>
    )
}