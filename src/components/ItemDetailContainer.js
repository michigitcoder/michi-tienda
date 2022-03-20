
import { useState, useEffect } from 'react';
import { getItem  } from '../api';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer(){
    const [producto, setProducto] = useState();
    const {productoId} = useParams();
    useEffect(()=>{
        getItem(productoId).then(productoPromesa =>{
            setProducto(productoPromesa)
        })
        .catch(error => {console.log(error)});   
        },[productoId]);
    return (
        <div>
            { !producto  ? <p>Esperando los productos</p>: <ItemDetail item = {producto} />}
        </div>
    )
}