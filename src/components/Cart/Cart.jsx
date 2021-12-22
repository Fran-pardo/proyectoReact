import React, {useContext} from "react";
import { CartContext } from "../Context/CartContext";

const Cart = () => {
    const {items, removeItem, clearItems} = useContext(CartContext)

    return (

        <div>

            <h1>Carrito</h1>

            {
                items.map((item) => (
                    <div key={item.id}>
                    <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'baseline', margin: '3rem', border: 'solid black 3px', padding: '1rem'}} key={item.id}>
                        <h4>{item.nombre}</h4>
                        <h5>{item.qty}</h5>
                        <button onClick={() => removeItem(item.id)}>Borrar Producto</button>
                        <button onClick={() => clearItems()}>Vaciar carrito</button>
                    </div>
                    <p>Total: US${item.precio * item.qty}</p>
                    </div>
                ))
            }
  
        </div>
    )
}


export default Cart