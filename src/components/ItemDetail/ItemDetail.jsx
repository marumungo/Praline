import {ItemCount} from '../ItemCount/ItemCount';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getProduct } from 'api/products';

export const ItemDetail = ({imagen, titulo, precio, stock, descripcion}) => {
    const {productId} = useParams ();
    const [product, setProduct] = useState ([]);

    useEffect (() => {
        getProduct (productId).then ((data) => {
            setProduct (data);
        })
    }, [productId]);

    const handleAdd = (qty) => {
            console.log ("producto agregado", {...product, qty})
    };

    return (
        <div className='main_producto_detalle'>
            <img src={imagen} alt="imagenProducto" />
            <div>
                <div>
                    <h1 className='main_producto_title_detalle'>{titulo}</h1>
                    <p className='main_producto_price_detalle'>{precio}</p>
                    <p className='main_producto_descripcion_detalle'>{descripcion}</p>
                </div>
                <div className='main_producto_itemCount'>
                    <ItemCount
                    onAdd={handleAdd}
                    stock={stock}
                    />
                    <span className='stockDisponible'>Quedan <strong>{stock}</strong> disponibles!</span>
                </div>
            </div>
        </div>
    );
}