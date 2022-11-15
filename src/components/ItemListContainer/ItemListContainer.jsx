import { Loader } from '../Loader/Loader';
import { Item } from '../Item/Item';

export const ItemListContainer = ({ products, loading, onAdd }) => {
    return (
        <div>
            <div className='main_productos'>
                {loading ? <Loader qty={3} /> : null}
                {products.map ((producto) => {
                    return (
                        <Item className='main_producto'
                            key = {producto.id}
                            id = {producto.id}
                            imagen = {producto.imagen}
                            titulo = {producto.titulo}
                            precio = {producto.precio}
                            stock = {producto.stock}
                            categoria = {producto.categoria}
                            onAdd = {onAdd}
                        />
                    );
                })}
            </div>
        </div>
    );
};