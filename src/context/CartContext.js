import react, { createContext, useState } from "react";

export const CartContext = createContext([]);

export default function CartContextProvider({children}){
    
    const [carrito, setCarrito] = useState([]);
    
    const addItem = (cantidad, item) =>{
        const index = carrito.findIndex(i => i.id === item.id)
        if (index > -1)
            {   const cantidadTotal = carrito[index].cantidad + cantidad;
                carrito[index].cantidad = cantidadTotal;
            }
        else setCarrito([...carrito, {...item, cantidad}]);
    }
    
    const isInCart = (id) => {
        return (carrito.some((producto)=> producto.id === id))
    }

    const clearCarrito = () => setCarrito([]);

    const removeItem = (id) =>{
        const carritoNuevo = carrito.filter((producto) => producto.id !== id);
        setCarrito(carritoNuevo);
    }
    
    const cantidadProductos = () => {
        let cantidadItem = 0;
        carrito.map((p) => cantidadItem = cantidadItem + p.cantidad);
        return cantidadItem;
    }
    const totalPrecio = () => {
        let total = 0;
        carrito.map((p) => total = total + (p.cantidad * p.precio));
        return total;
    }
    const listaCarrito = () => {
        let lista = [];
        carrito.map((p) => {
            lista = [...lista, {id: p.id,descripcion: p.descripcion,cantidad: p.cantidad,precioUnitario: p.precio}]
        })
        return lista;
    }
  
    return (
        <CartContext.Provider value = {{carrito, addItem, clearCarrito, removeItem,cantidadProductos,totalPrecio,listaCarrito}}>
           {children} 
        </CartContext.Provider>
    )
}


