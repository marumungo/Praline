import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

export const Item = ({imagen, titulo, precio, stock, id, onAdd}) => {
    const navigate = useNavigate ();
    return (
        <Card onClick={() => navigate (`/producto/${id}`)} className = "main_producto">
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title className = "main_producto_title">{titulo}</Card.Title>
                <Card.Text className = "main_producto_price">{precio}</Card.Text>
                <Button className = "main_producto_button" onClick={(e) => {
                    e.stopPropagation();
                    onAdd?.({ titulo });
                }}
                >Agregar
                </Button>
                <div className='stockDisponible'>
                    <span>Quedan <strong>{stock}</strong> disponibles!</span>
                </div>
            </Card.Body>
        </Card>
    );
};