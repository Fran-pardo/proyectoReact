import { obtenerProductoById } from "../../productos";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useEffect, useState } from 'react';
import './style.css';
import { useParams } from "react-router-dom";

import { db } from '../../service/firebase/firebase';
import { getDoc, doc } from 'firebase/firestore';


const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)
    const { paramId } = useParams()

    useEffect(() => {

        setLoading(true)

        getDoc(doc(db, 'items', paramId)).then((querySnapshot) => {
            const product = { id: querySnapshot.id, ...querySnapshot.data()}
            setItem(product)
        }).catch((error) => {
            console.log('Error buscando item', error)
        }).finally(() => {
            setLoading(false)
        })


        // obtenerProductoById(paramId).then(item => {
        //     setItem(item)
        // }).catch(err  => {
        //     console.log(err)
        // })

        return (() => {
            setItem()
        })

    }, [paramId])

    if(loading) {
        return <h1>Loading...</h1>
    }

    return (

        <div className="containerItemDetail">
            <ItemDetail item={item} />
        </div>

    )
}

export default ItemDetailContainer;
