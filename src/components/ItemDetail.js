import './ItemDetail.css'

export default function ItemDetail({item}){
    
    return (
        <div className='divDetailItem'>
            <img className='imagenDetailProducto' src = {item.ruta} alt = {item.descripcion} /> 
            <p>Descripcion:  {item.descripcion}</p>
            <p>Precio USD {item.precio}</p>
            <button>Comprar</button>

        </div>
    )
}