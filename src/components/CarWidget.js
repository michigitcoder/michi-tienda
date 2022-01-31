import React, { useDebugValue } from 'react';
import './CarWidget.css';
import carritoImagen from '../imagenes/carrito.png'

function CarWidget(){
    return (
        <div className = 'divCarritoFlex'>
              <img className = 'iconoCarrito' src = {carritoImagen} alt = "Imagen carrito" />    
              <p>3</p>       
        </div>)
}

export default CarWidget;