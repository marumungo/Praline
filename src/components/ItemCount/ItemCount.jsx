import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

export const ItemCount = ({stock, onAdd}) => {

    const [contador, setContador] = useState (0);

    const handleAdd = (evt) => {
        evt.stopPropagation()
        if (contador < stock) {
            setContador (contador + 1)
        };
    };

    const handleSubstract = (evt) => {
        evt.stopPropagation()
        if (contador > 0) {
            setContador (contador - 1)
        };
    }

    useEffect (() => {
        console.log (stock)
    });

    return (
    <div className='main_producto_counter'>
        <div className='main_producto_buttons_card'>
            <Button className='main_producto_button' onClick={handleSubstract}>-</Button>
            <span>{contador}</span> 
            <Button className='main_producto_button' onClick={handleAdd}>+</Button>
        </div>    
        <Button className = "main_producto_button" variant="primary" 
            onClick={(evt) => {
                evt.stopPropagation()
                if (contador) onAdd (contador)
            }}
            >Agregar
        </Button>
    </div>
    );
};