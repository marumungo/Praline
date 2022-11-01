import {ItemCount} from '../ItemCount/ItemCount';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

export const Item = ({imagen, titulo, precio, stock, id}) => {
    const navigate = useNavigate ();
    return (
        <Card onClick={() => navigate (`/producto/${id}`)} className = "main_producto">
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title className = "main_producto_title">{titulo}</Card.Title>
                <Card.Text className = "main_producto_price">{precio}</Card.Text>
                <ItemCount
                onAdd={() => console.log ("Agregado al carrito!")}
                stock={stock}
                />
                <span className='stockDisponible'>Quedan <strong>{stock}</strong> disponibles!</span>
            </Card.Body>
        </Card>
    );
}