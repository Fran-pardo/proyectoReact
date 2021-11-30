import React, {useState} from 'react';

import './style.css';


const ItemCount = ({stock, initial, onAdd}) => {

    const [cantidad, setCantidad] = useState(initial);

    const sumarCantidad = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    }

    const restarCantidad = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    }


    return (

        <div>

            <div>
                <button className='boton' onClick={restarCantidad}>-</button>
                <span>{cantidad}</span>
                <button className='boton' onClick={sumarCantidad}>+</button>
            </div>

            <div>
                <h5>Cantidad</h5>
            </div>

            <div>
                <button onClick={onAdd}>Agregar al carrito</button>
            </div>


        </div>

    )
}

export default ItemCount;