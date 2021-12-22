import React, {useState} from 'react';
import './style.css';


const ItemCount = ({item, addItem, maxQuantity}) => {

    const [qty, setQty] = useState(1);
    

    const sumarCantidad = () => {
        if (qty < maxQuantity) {
            setQty(qty + 1);
        }
    }

    const restarCantidad = () => {
        if (qty > 0) {
            setQty(qty - 1);
        }
    }

    return (

        <div>

            <p>{qty}</p>
            <button className="py-2 px-4 m-4 rounded" onClick={restarCantidad}>-</button>
            <button className="py-2 px-4 m-4 rounded" onClick={sumarCantidad}>+</button>
            <button className="py-2 px-4 m-4 rounded" onClick={() => addItem(item, qty)}>Agregar al carrito</button>

        </div>
        
    )
}


export default ItemCount;