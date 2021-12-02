import { useEffect, useState } from 'react';
import ItemCount from '../../components/ItemCount/ItemCount';
import obtenerProductos from '../../productos';
import './style.css';
import ItemList from '../../components/ItemList/ItemList';


const ItemListContainer = ({greeting}) => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        const list = obtenerProductos()
        list.then(list => {
            setProductos(list)
        })

        return(() => {
            setProductos([])
        })
    }, [])

    return(

        <div className='container'>
            <h1>{greeting}</h1>
            <ItemList productos={productos} />
            <ItemCount stock={18} initial={1} onAdd={ () => console.log('Producto agregado correctamente')} />
        </div>

    )

}

export default ItemListContainer;