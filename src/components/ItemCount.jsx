import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

const ItemCount = ({stock, onAdd}) => {

    const [contador, setContador] = useState (0);

    const handleAdd = () => {
        if (contador < stock) {
            setContador (contador + 1)
        };
    };

    const handleSubstract = () => {
        if (contador > 0) {
            setContador (contador - 1)
        };
    }

    useEffect (() => {
        console.log (stock)
    }, []);

    return (
    <div className='main_producto_counter'>
        <div className='main_producto_buttons_card'>
            <Button className='main_producto_button' onClick={() => handleAdd ()}>+</Button>
            <span>{contador}</span>
            <Button className='main_producto_button' onClick={() => handleSubstract ()}>-</Button> 
        </div>    
        <Button className = "main_producto_button" variant="primary" onClick={() => {if (contador) onAdd ()}}>Agregar</Button>
    </div>
    );
};

export default ItemCount;