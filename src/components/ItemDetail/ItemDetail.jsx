import {ItemCount} from '../ItemCount/ItemCount';

export const ItemDetail = ({imagen, titulo, precio, stock, descripcion}) => {
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
                    onAdd={() => console.log ("Agregado al carrito!")}
                    stock={stock}
                    />
                    <span className='stockDisponible'>Quedan <strong>{stock}</strong> disponibles!</span>
                </div>
            </div>
        </div>
    );
}