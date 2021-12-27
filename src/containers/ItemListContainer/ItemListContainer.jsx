import { useEffect, useState } from 'react';
import {obtenerProductos, obtenerProductosByCategoria} from '../../productos';
import './style.css';
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';

import { db } from '../../service/firebase/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';


const ItemListContainer = ({greeting}) => {

    const {categoryId} = useParams()
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([]);

    useEffect( ()=> {
        if(!categoryId) {

            setLoading(true)

            getDocs(collection(db, 'items')).then((querySnapshot) => {
    
                console.log(querySnapshot)
                const products = querySnapshot.docs.map(doc => {
                    console.log(doc)
                    return { id: doc.id, ...doc.data()}
                })
                setProductos(products)
            }).catch((error) => {
                console.log('Error buscando items', error)
            }).finally(() => {
                setLoading(false)
            })
        } else {

            setLoading(true)
            
            getDocs(query(collection(db, 'items'), where('categoria', '==', categoryId))).then((querySnapshot) => {
    
                console.log(querySnapshot)
                const products = querySnapshot.docs.map(doc => {
                    console.log(doc)
                    return { id: doc.id, ...doc.data()}
                })
                setProductos(products)
            }).catch((error) => {
                console.log('Error buscando items', error)
            }).finally(() => {
                setLoading(false)
            })

        }
        

        // ( async () => {

        //     if (categoryId !== undefined){

        //         const list = await obtenerProductosByCategoria(categoryId);
        //         setProductos(list)

        //     } else {

        //         const list = await obtenerProductos()
        //         setProductos(list)

        //     }
        // })()

    }, [categoryId])

    if(loading) {
        return <h1>Loading...</h1>
    }

    return(

        <div className='container'>
            <h1 className="text-7xl underline">{greeting}</h1>
            <ItemList productos={productos} />
        </div>

    )

}

export default ItemListContainer;