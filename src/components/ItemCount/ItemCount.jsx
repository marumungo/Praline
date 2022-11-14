import { useState } from 'react';
import Button from 'react-bootstrap/Button';

export const ItemCount = ({ stock, onAdd }) => {
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

    return (
    <div className='main_producto_counter'>
        <div className='main_producto_buttons_card'>
            <Button className='main_producto_button' onClick={handleSubstract}>-</Button>
            <span>{contador}</span> 
            <Button className='main_producto_button' onClick={handleAdd}>+</Button>
        </div>    
        <Button className = "main_producto_button" variant="primary" 
            onClick={() => {
                if (contador) onAdd (contador)
            }}
            >Agregar
        </Button>
    </div>
    );
};