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
        if (qty > 1) {
            setQty(qty - 1);
        }
    }

    return (

        <div className='itemCount'>

            <div className='contador'>
                <button className="botonQuantity" onClick={restarCantidad}>-</button>
                <p className='quantity'>{qty}</p>
                <button className="botonQuantity" onClick={sumarCantidad}>+</button>
            </div>
            <button className="botonAgregar" onClick={() => addItem(item, qty)}>Agregar al carrito</button>

        </div>
        
    )
}


export default ItemCount;