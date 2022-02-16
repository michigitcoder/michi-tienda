import './ItemDetail.css';
import ItemCount from './ItemCount';
import {useState} from 'react'
import { Link } from 'react-router-dom';


export default function ItemDetail({item}){
    
    const [itemCount, setItemCount] = useState(0);
    function onAdd(cantidad){
        setItemCount(cantidad);     
    }
    
    return (
        <div className='divDetailItem'>
            <img className='imagenDetailProducto' src = {item.ruta} alt = {item.descripcion} /> 
            <p>Descripcion:  {item.descripcion}</p>
            <p>Precio USD {item.precio}</p>
            {itemCount===0 ?
                <ItemCount stock={item.stock} initial={1} onAdd ={onAdd}/>
                :<div className='cartelCompra' >
                    <p>Se {itemCount===1? 'agrego':'agregaron'} {itemCount} {item.descripcion} al Carrito</p>
                    <Link to={'/cart'}>Ir al carrito</Link>
                </div>
            }
        </div>
    )
}