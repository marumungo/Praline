import ItemCount from './ItemCount';
import Card from 'react-bootstrap/Card';

const Item = ({imagen, titulo, precio, stock}) => {
    return (
        <Card className = "main_producto">
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title className = "main_producto_title">{titulo}</Card.Title>
                <Card.Text className = "main_producto_price">{precio}</Card.Text>
                <ItemCount 
                onAdd={() => console.log ("Agregado al carrito!")}
                stock={stock}
                />
            </Card.Body>
        </Card>
    );
}

export default Item;