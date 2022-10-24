import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemListContainer = ({imagen, titulo, precio}) => {
    return (
        <Card className = "main_producto">
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title className = "main_producto_title">{titulo}</Card.Title>
                <Card.Text className = "main_producto_price">{precio}</Card.Text>
                <Button className = "main_producto_button" variant="primary">Agregar</Button>
            </Card.Body>
        </Card>
    );
}

export default ItemListContainer;