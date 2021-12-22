import React, {useContext} from "react";
import { CartContext } from "../Context/CartContext";

const Cart = () => {
    const {items, removeItem, clearItems} = useContext(CartContext)

    return (
        <div>

            {
                items.map((item) => (
                    <div key={item.id}>
                        <h1>{item.qty} | {item.nombre}</h1>
                        <button onClick={() => removeItem(item.id)}>Borrar Producto</button>
                        <button onClick={() => clearItems()}>Vaciar carrito</button>
                    </div>
                ))
            }
  
        </div>
    )
}


export default Cart