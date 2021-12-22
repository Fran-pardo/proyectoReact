
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({item}) => {

    const { addItem } = useContext(CartContext)

    const [add, setAdd] = useState(false)

    return (
        <div>
            <div className='itemContainer'>
                <img className='imgItem' src={item?.img} alt="" />
                <div>
                    <div className='itemNombre'>
                        <h2>{item?.nombre}</h2>
                        <p>{item?.anio} | {item?.km} km | {item?.transmision}</p>
                    </div>
                    <div className='itemPrecio'>
                        <h4>Precio: {item?.precio}</h4>
                        <button>Reservar vehículo</button>
                    </div>
                </div>
            </div>

            {
                add 
                ? 
                <Link to="/cart">Finalizar Compra</Link>
                :
                <ItemCount item={item} maxQuantity={item.stock} addItem={addItem} />
            }
    
            <div className='descripcionContainer'>
                <h2>Descripción</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit commodi reprehenderit ipsam asperiores illo quo officiis consectetur possimus repellendus exercitationem autem vitae inventore aperiam molestias laboriosam necessitatibus corporis, sed in quod ab perspiciatis est eveniet quis corrupti? Commodi eligendi molestias praesentium eum incidunt dolor iste tempora officia iure. Illum, obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis perspiciatis mollitia sint quae iste maiores voluptate quia fugiat vel magnam molestiae, debitis, suscipit quas deleniti.</p>
            </div>
            <div className='caracteristicasContainer'>
                <h2>Caracteristicas</h2>
                <div>
                    <h4 className='tituloGeneral'>General</h4>
                    <li className='caracteristicas'>
                        <ul>
                            Transmisión: {item?.transmision}
                        </ul>
                        <ul>
                            Stock Id: {item?.id}
                        </ul>
                        <ul>
                            Numero de puertas: {item?.puertas}
                        </ul>
                    </li>
                </div>
            </div>
        </div>
    )
}


export default ItemDetail;