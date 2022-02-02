import "./ItemCount.css";
import { useState } from "react";

export default function ItemCount({ stock, initial, onAdd}){
    const [contador, setContador] = useState(initial);
    
   
    function decrementarContador(){
        setContador((contador<=1) ? 1 : (contador - 1));
        //<= 1 para que siempre tengas algo para agregar al carrito, 
        //sino seria sustituirlo por <=0 para aplicarlo como pedia el desafio
    }

    function aumentarContador(){
        setContador((contador >= stock) ? stock : (contador + 1) )
    }

    
    return (
        <div className="cardProducto">
            <p className="tituloCard">Redmi Note 10</p>
            <div className="divContador">
                <button className="botonContador" onClick={decrementarContador}>-</button>
                <p className="contador">{contador}</p>
                <button className="botonContador" onClick={aumentarContador}>+</button>
            </div>
            <button onClick={onAdd}>Agregar al Carrito</button>
        </div>
    )
}