// import React from 'react';
import './CartWidget.css';
import carritoImagen from '../imagenes/carrito.png'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function CartWidget(){
    const {cantidadProductos} = useContext(CartContext);
    return (
        <div className = 'divCarritoFlex'>
              <img className = 'iconoCarrito' src = {carritoImagen} alt = "Imagen carrito" />    
              <p>{cantidadProductos()}</p>       
        </div>)
}

export default CartWidget;