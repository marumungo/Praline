import { Loader } from '../Loader/Loader';
import { Item } from '../Item/Item';

export const ItemListContainer = ({ products, loading, onAdd }) => {
    return (
        <div>
            <div className='main_productos'>
                {loading && <Loader />}
                {products.map ((producto) => {
                    return (
                        <Item className='main_producto'
                            key = {producto.id}
                            {...producto}
                            onAdd = {onAdd}
                        />
                    );
                })}
            </div>
        </div>
    );
};