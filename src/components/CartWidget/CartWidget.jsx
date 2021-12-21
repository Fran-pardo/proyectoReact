import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';


const CartWidget = () => {

    return(

        <button style={{color: 'white', background: 'none', border: 'none', paddingLeft: 15, paddingRight: 15}}>
            <FontAwesomeIcon icon={faShoppingCart} />
            0
        </button>

    )

}

export default CartWidget

