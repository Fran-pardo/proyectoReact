import React, {createContext, useState} from "react";

export const CartContext = createContext([])

export const CartProvider = ({children}) => {

    const [items, setItems] = useState([])

    const addItem = (item, quantity) => (

        isInCart(item.id)
        ?
        setItems(items.map((prod) => {
            if (prod.id === item.id) {
                prod.quantity += quantity
            }
            return prod
        }))
        :
        setItems([...items, {id: item.id, name: item.nombre, price: item.precio, quantity: quantity }])

    )

    const removeItem = (id) => {

        setItems(items.filter(item => item.id !== id))

    }

    const clearItems = () => {
        setItems([])
    }

    const isInCart = (id) => {

        const found = items.find(item => item.id === id);
        return found

    }

    return (
        
        <CartContext.Provider value={{ items, addItem, removeItem, clearItems }}>
            {children}
        </CartContext.Provider>
    )

}