// import './ItemDetailContainer.css'
import { useState, useEffect } from 'react';
import { obtenerProductos } from '../api';
import ItemDetail from './ItemDetail';


export default function ItemDetailContainer(){
    const [producto, setProducto] = useState();
    const idBuscar = 2;
    console.log('Id item a buscar' + idBuscar);
    useEffect(()=>{
        obtenerProductos().then(function(productos){
            const producto = productos.find((item) => item.id === idBuscar);
            setProducto(producto);
            
        })

    },[]);
    return (
        <div>
            { !producto  ? <p>Esperando los productos</p>: <ItemDetail item = {producto} />}
            {/* si producto es undeffined, producto no encontrado o no termino la promesa("Llamada al backend") */}
        </div>
    )
}