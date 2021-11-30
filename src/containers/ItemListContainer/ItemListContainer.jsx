import ItemCount from '../../components/ItemCount/ItemCount';

import './style.css';


const ItemListContainer = ({greeting}) => {

    return(

        <div className='container'>
            <h1>{greeting}</h1>
            <ItemCount stock={18} initial={1} onAdd={console.log('Producto agregado correctamente')}/>
        </div>

    )

}

export default ItemListContainer;