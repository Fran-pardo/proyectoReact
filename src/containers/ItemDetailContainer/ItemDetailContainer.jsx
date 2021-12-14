import { obtenerProductoById } from "../../productos";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useEffect, useState } from 'react';
import './style.css';
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const { paramId } = useParams()

    useEffect(() => {
        obtenerProductoById(paramId).then(item => {
            setItem(item)
        }).catch(err  => {
            console.log(err)
        })

        return (() => {
            setItem()
        })

    }, [paramId])

    return (

        <div className="containerItemDetail">
            <ItemDetail item={item} />
        </div>

    )
}

export default ItemDetailContainer;
