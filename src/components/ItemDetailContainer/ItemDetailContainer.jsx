import { useEffect, useState } from 'react';
import { getProduct } from '../../api/products';
import { Loader } from '../Loader/Loader';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
    const {productId} = useParams ();
    const [product, setProduct] = useState ([]);
    const [loading, setLoading] = useState (true);

    useEffect (() => {
        getProduct (productId)
        .then ((item) => {setProduct (item); setLoading (false);})
        .catch ((e) => console.log (e));
    }, [productId]);

    return (
        <div className='main_productos_detalle'>
            {loading ? <Loader/> : null}
            <ItemDetail className='main_producto_detalle'
            key = {product.id}
            imagen = {product.imagen}
            titulo = {product.titulo}
            precio = {product.precio}
            stock = {product.stock}
            descripcion = {product.descripcion}
            />
        </div>
    )
}