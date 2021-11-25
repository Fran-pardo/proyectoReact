import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {

    return(

        <button style={{color: 'white', backgroundColor: 'blue', border: 'none', paddingLeft: 15, paddingRight: 15}}>
            <FontAwesomeIcon icon={faShoppingCart} />
            1
        </button>

    )

}

export default CartWidget

