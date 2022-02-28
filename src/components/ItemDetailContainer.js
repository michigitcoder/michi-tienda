// import './ItemDetailContainer.css'
import { useState, useEffect } from 'react';
import { getItem /*, getItems usaba getItems antes de Firestore*/ } from '../api';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer(){
    const [producto, setProducto] = useState();
    // const idBuscar = 2;
    const {productoId} = useParams();
    useEffect(()=>{
        // getItems().then(function(productos){
        //     const producto = productos.find((item) => item.id === Number(productoId));
        //     setProducto(producto); })
        getItem(productoId).then(productoPromesa =>{
            setProducto(productoPromesa)
        })
        .catch(error => {console.log(error)});   
        },[productoId]);
    return (
        <div>
            { !producto  ? <p>Esperando los productos</p>: <ItemDetail item = {producto} />}
            {/* si producto es undeffined, producto no encontrado o no termino la promesa("Llamada al backend") */}
        </div>
    )
}