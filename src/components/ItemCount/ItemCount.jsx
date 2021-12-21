import React, {useState} from 'react';
import './style.css';


const ItemCount = ({item, quantity, addItem, maxQuantity}) => {

    const [count, setCount] = useState(0);
    

    const sumarCantidad = () => {
        if (count < maxQuantity) {
            setCount(count + 1);
        }
    }

    const restarCantidad = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    return (

        <div>

            <p>{count}</p>
            <button onClick={restarCantidad}>-</button>
            <button onClick={sumarCantidad}>+</button>
            <button onClick={() => addItem({item, quantity})}>Agregar al carrito</button>

        </div>
        
    )
}


export default ItemCount;