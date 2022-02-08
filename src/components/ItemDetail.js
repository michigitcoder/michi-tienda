import './ItemDetail.css'

export default function ItemDetail({item}){
    
    return (
        <div className='divItem'>
            <img className='imagenProducto' src = {item.ruta} alt = {item.descripcion} /> 
            <p>Descripcion:  {item.descripcion}</p>
            <p>Precio USD {item.precio}</p>

        </div>
    )
}