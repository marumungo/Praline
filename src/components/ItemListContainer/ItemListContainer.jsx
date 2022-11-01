import { useEffect, useState } from 'react';
import { getProducts } from '../../api/products';
import { Loader } from '../Loader/Loader';
import { Item } from '../Item/Item';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {
    const {categoryId} = useParams ();
    const [productos, setProductos] = useState ([]);
    const [loading, setLoading] = useState (true);

    useEffect (() => {
        getProducts (categoryId)
        .then ((items) => {setProductos (items); setLoading (false);})
        .catch ((e) => console.log (e));
    }, [categoryId]);

    return (
        <div>
            <div className='main_tituloProductos'>
                <hr />
                <h1> PRODUCTOS </h1>
                <hr />
            </div>
            <div className='main_productos'>
                {loading ? <Loader/> : null}
                {productos.map ((producto) => {
                    return (
                        <Item className='main_producto'
                        key = {producto.id}
                        id = {producto.id}
                        imagen = {producto.imagen}
                        titulo = {producto.titulo}
                        precio = {producto.precio}
                        stock = {producto.stock}
                        categoria = {producto.categoria}
                        />
                    );
                })}
            </div>
        </div>
    )
}