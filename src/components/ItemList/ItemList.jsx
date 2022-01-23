import Item from '../Item/Item';
import './ItemList.css'

const ItemList = ({productos}) => {

    return(
        <div className='bgContenedor'>

            <div>
                <h2 className='ourVehicles'>Nuestros Vehiculos</h2>
            </div>

            <div>
                <ul className='listContainer'>
                    {productos.map(producto => <Item key={producto.id} producto={producto} /> )}
                </ul>
            </div>
        </div>
    )   

}

export default ItemList;