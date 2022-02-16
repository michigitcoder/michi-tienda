import './ItemListContainer.css'
// import ItemCount from "./ItemCount";
import { useState, useEffect } from 'react';
import { getItems } from '../api';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';


export default function ItemListContainer({greeting}){
    const [productos, setProductos] = useState([]);
    const {categoria} = useParams();
    // const productosFiltrados = [];
    useEffect(()=>{
                    (!categoria ? 
                                getItems().then(function(productos){
                                    setProductos(productos);
                                })
                                :getItems().then(function(productos){
                                    const productosFiltrados = productos.filter((p)=> p.categoria === categoria)
                                    setProductos(productosFiltrados);
                                })
                    )
                }
        ,[categoria]);

    // function agregarItems(cantidad){
    //     console.log('Se agregaron  ' + cantidad + ' items');
    // }

    return (
        <div className='divItemListContainer'>
            <p className = "estiloSaludo">{greeting}</p>
            { productos.length === 0 ? <p>Esperando los productos</p>: <ItemList productos={productos}/>}
            {/* si el array de productos es 0, no se ha terminado la promesa ("Llamada al backend") */}
            {/* <ItemCount stock = {8} initial = {4} onAdd = {agregarItems} /> */}
        </div>
    )
}