import { BsCartFill } from 'react-icons/bs';
import { useCartContext } from 'context/cartContext';

export const CartWidget = () => {
    const { cart, getCartQty } = useCartContext ();
    console.log ({ cart });
    
    return (
        <div className='navbar_icons_cart'>
            <BsCartFill />{" "}
            <span className='navbar_icons_number'>{getCartQty()}</span>
        </div>
    )
}