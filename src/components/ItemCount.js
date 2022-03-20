import "./ItemCount.css";
import { useState } from "react";

export default function ItemCount({ stock, initial, onAdd}){
    const [contador, setContador] = useState(initial);
    
    function decrementarContador(){
        setContador((contador<=1) ? 1 : (contador - 1));
    }

    function aumentarContador(){
        setContador((contador >= stock) ? stock : (contador + 1) )
    }

    function agregarCarrito(){
        onAdd(contador);
    }
    
    return (
        <div className="itemCountProducto">
            <div className="divContador">
                <button className="botonContador" onClick={decrementarContador}>-</button>
                <p className="contador">{contador}</p>
                <button className="botonContador" onClick={aumentarContador}>+</button>
            </div>
            <button onClick={agregarCarrito}>Agregar al Carrito</button>
        </div>
    )
}