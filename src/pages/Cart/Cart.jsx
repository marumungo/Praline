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
                        <div className="carrito_producto" key={product.id}>
                            <div>Nombre : {product.titulo}</div>
                            <div>Cantidad : {product.qty}</div>
                            <div>Precio : {product.precio}</div>
                            <hr />
                        </div>
                    ))}
                    <div>TOTAL : ${getTotal()}</div>
                </div>
            </div>
        </main>
    );
};