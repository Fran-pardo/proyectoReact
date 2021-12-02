import Item from '../Item/Item';
import './ItemList.css'

const ItemList = ({productos}) => {

    return(
        <ul className='listContainer'>
            {productos.map(producto => <Item key={producto.id} producto={producto} /> )}
        </ul>
    )

}

export default ItemList;