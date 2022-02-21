import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './CartCard.css';
export default function CartCard( {item}){
    const {removeItem} = useContext(CartContext)
    const eliminarProducto = () => {
        removeItem(item.id);
    }
    return (
        <div className="cartFila">
                <img className='imagenProducto' src = {item.ruta} alt = {item.descripcion} />
                <p>{item.cantidad}</p>
                <p>{item.descripcion}</p>
                <p>USD {item.precio}</p>
                <button onClick={eliminarProducto}>Eliminar Producto</button>
        </div>
    )
}
