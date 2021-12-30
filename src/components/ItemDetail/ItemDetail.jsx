
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './style.css';

const ItemDetail = ({item}) => {

    const { addItem } = useContext(CartContext)

    const [add, setAdd] = useState(false)

    return (
        <div>
            <div className='containerImagenDetail'>
                <img className='imgItem' src={item?.img} alt="" />
            </div>

            <div className='defaultContainer'>

                <div className='containerIzq'>
                    <h2>{item?.nombre}</h2>
                    <p>{item?.anio} | {item?.km} km | {item?.transmision}</p>
                    <h3>Descripción</h3>
                    <p style={{textAlign: 'left'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam voluptas vel commodi exercitationem necessitatibus porro, nisi incidunt quidem sapiente, corporis est? Sunt ut mollitia doloribus aperiam harum! Nobis, ex? Error distinctio omnis quam quaerat provident praesentium, cupiditate perferendis. Natus quae perspiciatis ipsum maiores quod dignissimos, iste, odio delectus atque voluptas deserunt voluptatum corrupti? Laudantium harum dolores quae obcaecati ab cumque, perspiciatis vero minima ut possimus molestiae suscipit illum voluptas incidunt.</p>
                    {/* <p>{item?.description}</p> */}
                </div>

                <div className="containerDer">
                    <h4>US${item?.precio}</h4>
                    <ItemCount item={item} maxQuantity={item.stock} addItem={addItem} />
                </div>

            </div>
            
            {/* <div className='itemContainer'>
                
                <div>
                    <div className='itemNombre'>
                        <h2>{item?.nombre}</h2>
                        <p>{item?.anio} | {item?.km} km | {item?.transmision}</p>
                    </div>
                    <div className='itemPrecio'>
                        <h4>Precio: US${item?.precio}</h4>
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
            </div> */}
        </div>
    )
}


export default ItemDetail;