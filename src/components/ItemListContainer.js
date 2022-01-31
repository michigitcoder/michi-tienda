import React from "react";
import './ItemListContainer.css'

export default function ItemListContainer({greeting}){
    return (
        <p className = "estiloSaludo">{greeting}</p>
    )
}