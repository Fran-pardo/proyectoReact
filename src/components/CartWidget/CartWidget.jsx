import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';


const CartWidget = () => {

    const { items } = useContext(CartContext)
    let itemsInCart = 0;

    items.map((item) => {
        itemsInCart = itemsInCart + item.qty
    })

    return(

        <button style={{color: 'white', background: 'none', border: 'none', paddingLeft: 15, paddingRight: 15}}>
            <FontAwesomeIcon icon={faShoppingCart} />
            {itemsInCart}
        </button>

    )

}

export default CartWidget

