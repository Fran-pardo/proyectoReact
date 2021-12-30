import React, {useContext} from "react";
import { useState } from "react";
import { CartContext } from "../Context/CartContext";

import { db } from '../../service/firebase/firebase';
import { addDoc, collection, getDoc, doc, writeBatch, Timestamp } from "firebase/firestore";

const Cart = () => {

    const {items, removeItem, clearItems, getTotal} = useContext(CartContext)
    const [procesandoOrden, setProcesandoOrden] = useState(false)

    const confirmOrder = () => {
        setProcesandoOrden(true)

        const objOrden = {
            buyer: 'Messi',
            items: items,
            total: '1000',
            phoneNumber: 1122334455,
            adress: 'adress 123',
            comment: 'comentario',
            date: Timestamp.fromDate(new Date())
        }

        const batch = writeBatch(db);
        const outOfStock = [];

        objOrden.items.forEach((prod) => {
            getDoc(doc(db, 'items', prod.id)).then((documentSnapshot) => {
                if(documentSnapshot.data().stock >= prod.qty) {
                    batch.update(doc(db, 'items', documentSnapshot.id), {
                        stock: documentSnapshot.data().stock - prod.qty
                    })
                } else {
                    outOfStock.push({id: documentSnapshot.id, ...documentSnapshot.data()})
                } 
            })
        })

        if(outOfStock.length === 0) {
            addDoc(collection(db, 'order'), objOrden).then(({ id }) => {
                batch.commit().then(() => {
                    alert(id + ' es el ID de tu compra')
                })
            }).catch((error) => {
                alert('Error al realizar la compra' + error)
            }).finally(() => {
                setProcesandoOrden(false)
                clearItems()
            })
        }

        addDoc(collection(db, 'orders'), objOrden).then(({ id }) => {
            console.log(id)
        })

    }

    if(procesandoOrden) {
        return <h3>Procesando pedido...</h3>
    }

    if(items.length === 0) {
        return (
            <div>
                <h1>Carrito</h1>
                <h3>No hay productos en carrito...</h3>
            </div>
        )
    }

    return (

        <div>

            <h1>Carrito</h1>

            {
                items.map((item) => (
                    <div key={item.id}>
                        <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', margin: '3rem', border: 'solid black 3px', padding: '1rem'}} key={item.id}>
                            <h4>{item.nombre}</h4>
                            <h5>{item.qty}</h5>
                            <p>Subtotal: US${item.precio * item.qty}</p>
                            <button onClick={() => removeItem(item.id)}>Borrar Producto</button>
                        </div>
                    </div>
                ))
            }
            <p>Total: US${getTotal()}</p>
            <button onClick={() => clearItems()}>Vaciar Carrito</button>
            <button onClick={() => confirmOrder()}>Realizar Compra</button>
  
        </div>
    )
}


export default Cart