import { useEffect, useState } from 'react';
import {obtenerProductos, obtenerProductosByCategoria} from '../../productos';
import './style.css';
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({greeting}) => {

    const {categoryId} = useParams()
    const [productos, setProductos] = useState([]);

    useEffect( ()=> {
        
        ( async () => {

            if (categoryId !== undefined){

                const list = await obtenerProductosByCategoria(categoryId);
                setProductos(list)

            } else {

                const list = await obtenerProductos()
                setProductos(list)

            }
        })()

    }, [categoryId])

    return(

        <div className='container'>
            <h1 className="text-7xl underline">{greeting}</h1>
            <ItemList productos={productos} />
        </div>

    )

}

export default ItemListContainer;