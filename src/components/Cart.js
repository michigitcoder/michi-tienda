import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartCard from './CartCard'

export default function Cart(){
    const {carrito, clear} = useContext(CartContext);
return (
    <div>
        {carrito.map((item)=>{
            return <CartCard key={item.id } item={item}/>
        })}
        <button onClick={clear}>Vaciar Carrito</button>
    </div>
)       
}