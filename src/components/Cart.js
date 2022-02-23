import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartCard from './CartCard'

export default function Cart(){
    const {carrito, clear, totalPrecio} = useContext(CartContext);
    const total = totalPrecio();
return (
    <>
    {carrito.length===0 
    ?<>
        <p>Carrito Vacio</p>
        <Link to={'/'}>IR A COMPRAR</Link>
     </>
    :<div>
            {carrito.map((item)=>{
                return <CartCard key={item.id } item={item}/>
            })}
            <button onClick={clear}>Vaciar Carrito</button>
            <p>TOTAL USD = {total}</p>
            <button>FINALIZAR COMPRA</button>
            
        </div>
    }
    </>
)       
}