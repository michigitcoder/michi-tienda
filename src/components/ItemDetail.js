import './ItemDetail.css';
import ItemCount from './ItemCount';
import {useState, useContext} from 'react'
import { Link } from 'react-router-dom';
import {CartContext} from '../context/CartContext';


export default function ItemDetail({item}){
    const [itemCount, setItemCount] = useState(0);
    
    const {addItem} = useContext(CartContext);
    
    function onAdd(cantidad){
        setItemCount(cantidad); 
        addItem(cantidad, item);
    }
    
    return (
        <div className='divDetailItem'>
            <img className='imagenDetailProducto' src = {item.ruta} alt = {item.descripcion} /> 
            <p>Descripcion:  {item.descripcion}</p>
            <p>Precio USD {item.precio}</p>
            {itemCount===0
                ?<ItemCount stock={item.stock} initial={1} onAdd ={onAdd}/>
                :<div className='cartelCompra' >
                    <p>Se {itemCount===1? 'agrego':'agregaron'} {itemCount} {item.descripcion} al Carrito</p>
                    <Link to={'/cart'}>Ir al carrito</Link>
                </div>
            }
        </div>
    )
}