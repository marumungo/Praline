import { useCartContext } from "context/cartContext";
import { useState } from "react";
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";
import { addOrder } from "api/orders";
import { updateManyProducts } from "api/products";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Cart = () => {
    const navigate = useNavigate ();

    const [name, setName] = useState ("");
    const [phone, setPhone] = useState ("");
    const [email, setEmail] = useState ("");

    const { getTotal, cart, emptyCart } = useCartContext ();

    const createOrder = async () => {
        const items = cart.map (({ id, titulo, qty, precio }) => ({
            id,
            title: titulo,
            qty,
            price: precio
        }));

        const order = {
            buyer: {name, phone, email},
            items,
            total: getTotal ()
        };

        const ide = await addOrder (order);
        
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
                            <img src={product.imagen} alt="" />
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

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" onChange = {(e) => setName (e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control type="number" onChange = {(e) => setPhone (e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" onChange = {(e) => setEmail (e.target.value)} />
                    </Form.Group>
                </Form>

                <Button onClick={createOrder}>Comprar</Button>
            </div>
        </main>
    );
};