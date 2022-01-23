import React, {useContext, useRef} from "react";
import { useState } from "react";
import { CartContext } from "../Context/CartContext";
import Togglable from "../Toggeable/Toggeable";
import ContactForm from "../ConctactForm/ContactForm";
import './style.css';

import { db } from '../../service/firebase/firebase';
import { addDoc, collection, getDoc, doc, writeBatch, Timestamp } from "firebase/firestore";


const Cart = () => {

    const [procesandoOrden, setProcesandoOrden] = useState(false)

    const [contact, setContact] = useState({
        phone: '',
        adress: '',
        comment: ''
    })

    const {items, removeItem, clearItems, getTotal} = useContext(CartContext)

    const contactFormRef = useRef()

    const confirmOrder = () => {
        setProcesandoOrden(true)

        const objOrden = {
            buyer: 'Messi',
            items: items,
            total: getTotal(),
            phoneNumber: contact.phone,
            adress: contact.adress,
            comment: contact.comment,
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
            addDoc(collection(db, 'orders'), objOrden).then(({ id }) => {
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

    }

    if(procesandoOrden) {
        return <h3>Procesando pedido...</h3>
    }

    if(items.length === 0) {
        return (
            <div>
                <h1 style={{color: 'black', fontWeight: 'bold'}}>Carrito</h1>
                <h3>No hay productos en carrito...</h3>
            </div>
        )
    }

    return (

        <div>

            <h1 style={{color: 'black', fontWeight: 'bold'}}>Carrito</h1>

            {
                items.map((item) => (
                    <div className="carritoContainer" key={item.id}>

                        <div className="itemImg">

                            <img src={item.img} />

                        </div>

                        <div className="itemName">

                            <h4>{item.nombre}</h4>

                        </div>

                        <div>

                            <p>Cantidad: {item.qty}</p>

                        </div>

                        <div className="itemTotal">

                            <p>Subtotal: US${item.precio * item.qty}</p>
                            
                        </div>

                        <div>

                            <button className="btnBorrarProd" onClick={() => removeItem(item.id)}>Borrar Producto</button>

                        </div>

                    </div>
                ))
            }

            <div className="carritoTotal">

                <p>Total: US${getTotal()}</p>

            </div>
            
            <div className="carritoBotones">

                <button className="btnVaciar" onClick={() => clearItems()}>Vaciar Carrito</button>
                <button className="btnComprar" onClick={() => confirmOrder()}>Realizar Compra</button>
                

                {/* {(!procesandoOrden && items.length > 0) && <button onClick={() => confirmOrder()} className="Button">Confirmar Compra</button>} */}

                {/* {(!procesandoOrden && contact.phone !== '' && contact.adress !== '' && contact.comment !== '') &&
                    <div>
                        <h4>Telefono: {contact.phone}</h4>
                        <h4>Direccion: {contact.adress}</h4>
                        <h4>Comentario: {contact.comment}</h4>
                        <button onClick={() => setContact({ phone: '', adress: '', comment: ''})} className='Button' style={{backgroundColor: '#db4025'}}>Borrar datos de contacto</button>
                    </div>    
                }
                {(!procesandoOrden && items.length) > 0 && <Togglable buttonLabelShow={(contact.phone !== '' && contact.adress !== '' && contact.comment !== '') ? 'Editar contacto' : 'Agregar contacto'} ref={contactFormRef}>
                <ContactForm toggleVisibility={contactFormRef} setContact={setContact} />
                </Togglable> } */}

            </div>
            
  
        </div>
    )
}


export default Cart