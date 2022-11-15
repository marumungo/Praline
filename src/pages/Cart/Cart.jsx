import { useCartContext } from "context/cartContext";

export const Cart = () => {
    const { getTotal, cart } = useCartContext();

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
                                <div><strong>Precio: </strong>${product.precio.toLocaleString()}</div>
                                <div><strong>Subtotal: </strong>${(product.precio * product.qty).toLocaleString()}</div>
                            </div>
                        </div>
                    ))}
                    <hr />
                    <div className="carrito_total">TOTAL: <strong>${getTotal()}</strong></div>
                </div>
            </div>
        </main>
    );
};