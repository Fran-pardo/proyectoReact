import { obtenerItem } from "../../productos";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useEffect, useState } from 'react';
import './style.css';


const ItemDetailContainer = () => {

    const [item, setItem] = useState([])

    useEffect(() => {
        const item = obtenerItem()
        item.then(item => {
            setItem(item)
        })

        return(() => {
            setItem([])
        })
    }, [])

    return (

        <div className="containerItemDetail">
            <ItemDetail item={item} />
        </div>

    )
}

export default ItemDetailContainer;
