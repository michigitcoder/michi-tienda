import './Item.css';
import { Link } from 'react-router-dom';

export default function Item({item}){
    
    return (
        <div className='divItem'>
            <Link to={`/producto/${item.id}`}>
                <img className='imagenProducto' src = {item.ruta} alt = {item.descripcion} /> 
                <p>Descripcion:  {item.descripcion}</p>
                <p>Precio USD {item.precio}</p>
            </Link>
        </div>
    )
}