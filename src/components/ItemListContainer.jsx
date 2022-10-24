import Item from './Item';

import producto1 from '../images/producto1.jpg';
import producto2 from '../images/producto2.jpg';
import producto3 from '../images/producto3.jpg';
import producto4 from '../images/producto4.jpg';
import producto5 from '../images/producto5.jpg';
import producto6 from '../images/producto6.jpg';
import producto7 from '../images/producto7.jpg';
import producto8 from '../images/producto8.jpg';
import producto9 from '../images/producto9.png';
import producto10 from '../images/producto10.jpg';
import producto11 from '../images/producto11.png';
import producto12 from '../images/producto12.jpg';
import producto13 from '../images/producto13.jpg';
import producto14 from '../images/producto14.jpg';
import producto15 from '../images/producto15.jpg';
import producto16 from '../images/producto16.jpg';

const ItemListContainer = () => {
    return (
        <div className='main_productos'>
            <Item className='main_producto'
            imagen = {producto1}
            titulo = "Estantería modular"
            precio = "$5.200"
            />

            <Item className='main_producto'
            imagen = {producto2}
            titulo = "Estantería madera"
            precio = "$3.800"
            />

            <Item className='main_producto'
            imagen = {producto3}
            titulo = "Sillón mostaza"
            precio = "$7.800"
            />

            <Item className='main_producto'
            imagen = {producto4}
            titulo = "Sillon tapizado"
            precio = "$6.500"
            />

            <Item className='main_producto'
            imagen = {producto5}
            titulo = "Mesa vidrio"
            precio = "$12.000"
            />

            <Item className='main_producto'
            imagen = {producto6}
            titulo = "Mesa blanca"
            precio = "$14.700"
            />

            <Item className='main_producto'
            imagen = {producto7}
            titulo = "Escritorio madera"
            precio = "$21.300"
            />

            <Item className='main_producto'
            imagen = {producto8}
            titulo = "Escritorio curvo"
            precio = "$23.400"
            />

            <Item className='main_producto'
            imagen = {producto9}
            titulo = "Planta artificial"
            precio = "$2.100"
            />

            <Item className='main_producto'
            imagen = {producto10}
            titulo = "Combo plantas"
            precio = "$3.600"
            />

            <Item className='main_producto'
            imagen = {producto11}
            titulo = "Adorno jirafa"
            precio = "$1.300"
            />

            <Item className='main_producto'
            imagen = {producto12}
            titulo = "Conjunto 3 cuadros"
            precio = "$4.700"
            />

            <Item className='main_producto'
            imagen = {producto13}
            titulo = "Lámpara ADN"
            precio = "$7.800"
            />

            <Item className='main_producto'
            imagen = {producto14}
            titulo = "Lámpara LED"
            precio = "$5.900"
            />

            <Item className='main_producto'
            imagen = {producto15}
            titulo = "Silla madera"
            precio = "$4.400"
            />

            <Item className='main_producto'
            imagen = {producto16}
            titulo = "Silla blanca"
            precio = "$7.100"
            />
        </div>
    );
}

export default ItemListContainer;