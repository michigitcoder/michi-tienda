import './ItemListContainer.css'
import { useState, useEffect } from 'react';
import { getItems } from '../api';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';


export default function ItemListContainer({greeting}){
    const [productos, setProductos] = useState([]);
    const {categoria} = useParams();
    useEffect(()=>{
                    (!categoria ? 
                                getItems().then(function(productos){
                                    setProductos(productos);
                                }).catch(()=>console.log("Error al cargar productos sin categoria"))
                                :getItems(categoria).then(function(productos){
                                    const productosFiltrados = productos.filter((p)=> p.categoria === categoria)
                                    setProductos(productosFiltrados);
                                }).catch(()=>console.log(`Error al cargar productos categoria: ${categoria}`))
                    )
                }
        ,[categoria]);

    return (
        <div className='divItemListContainer'>
            <p className = "estiloSaludo">{greeting}</p>
            { productos.length === 0 ? <p>Esperando los productos</p>: <ItemList productos={productos}/>}
        </div>
    )
}