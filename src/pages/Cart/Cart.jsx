import { useCartContext } from "context/cartContext";
import { useState } from "react";
import { addOrder } from "api/orders";
import { updateManyProducts } from "api/products";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Cart = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phone, setPhone] = useState("");

    const [email, setEmail] = useState ("");
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);

    function validEmail (email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    function handleEmail ({ target }) {
        setEmail (target.value)

        if (!validEmail(target.value)) {
            setError('Email inválido');
        } else {
            setError(null);
        }

        setMessage(target.value);
    }

    const { getTotal, cart, emptyCart } = useCartContext ();

    const createOrder = async () => {
        const items = cart.map (({ id, titulo, qty, precio }) => ({
            id,
            title: titulo,
            qty,
            price: precio
        }));

        const order = {
            buyer: {name, surname, phone, email},
            items,
            total: getTotal ()
        };

        await addOrder (order);
        
        await updateManyProducts (items);

        emptyCart ();
    }

    return (
        <main>
            <div className="carrito">
                <div className="carrito_titulo">
                    <hr />
                    <h1>CARRITO</h1>
                    <hr />
                </div>
                <div className="carrito_info">
                    {cart.map ((product) => (
                        <div className="carrito_producto">
                            <img src={product.imagen} alt="imagen de producto" />
                            <div className="carrito_producto_info" key={product.id}>
                                <div><strong>Nombre: </strong>{product.titulo}</div>
                                <div><strong>Cantidad: </strong>{product.qty}</div>
                                <div><strong>Precio: </strong>${product.precio.toLocaleString ("es-AR")}</div>
                                <div><strong>Subtotal: </strong>${(product.precio * product.qty).toLocaleString ("es-AR")}</div>
                            </div>
                        </div>
                    ))}
                    <hr />
                    <div className="carrito_total">TOTAL: <strong>${getTotal().toLocaleString ("es-AR")}</strong></div>
                </div>

                <div className="form">
                    <Form className="formLabels">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control className="formControl" type="text" onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control className="formControl" type="text" onChange={(e) => setSurname(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control className="formControl" type="number" onChange={(e) => setPhone(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control className="formControl" type="email" value={message} onChange = {handleEmail} />
                            {error && <h2 className="error">{error}</h2>}
                        </Form.Group>
                    </Form>

                    <Button className="formButton" onClick={createOrder}>FINALIZAR COMPRA</Button>
                </div>
            </div>
        </main>
    );
};