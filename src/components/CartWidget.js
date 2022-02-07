// import React from 'react';
import './CartWidget.css';
import carritoImagen from '../imagenes/carrito.png'

function CartWidget(){
    return (
        <div className = 'divCarritoFlex'>
              <img className = 'iconoCarrito' src = {carritoImagen} alt = "Imagen carrito" />    
              <p>3</p>       
        </div>)
}

export default CartWidget;