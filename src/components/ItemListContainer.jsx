import { useEffect, useState } from 'react';
import { getProducts } from '../api/products';
import Loader from './Loader';
import Item from './Item';

const ItemListContainer = () => {
    const [productos, setProductos] = useState ([]);
    const [loading, setLoading] = useState (true);

    useEffect (() => {
        getProducts ()
        .then ((items) => {setProductos (items); setLoading (false);})
        .catch ((e) => console.log (e));
    }, []);

    return (
        <div className='main_productos'>
            {loading ? <Loader/> : null}
            {productos.map ((producto) => {
            return (
                <Item className='main_producto'
                key = {producto.id}
                imagen = {producto.imagen}
                titulo = {producto.titulo}
                precio = {producto.precio}
                stock = {producto.stock}
                />
            );
        })}
        </div>
    )
}

export default ItemListContainer;