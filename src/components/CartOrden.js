import { addDoc,doc, collection, documentId, where, query, getDocs, writeBatch, getDoc, updateDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../firebase";


const CartOrden = () =>{
    const [formulario, setFormulario] = useState(); //Iniciar el formulario vacio sin datos
    const [ordenCompra, setOrdenCompra] = useState();
    const {listaCarrito, totalPrecio, clearCarrito} = useContext(CartContext);
    // ordenCompra = {
    //     date: fecha al "Finalizar Compra",
    //     buyer: valor del formulario (formulario),
    //     items: carrito, 
    //     total: totalPrecio (funcion de CartContext)
    // }

    useEffect (()=>{
        console.log("Actualizar los stocks", ordenCompra);
        if (ordenCompra!== undefined){
            subirCompra();
            actualizarStock();
            clearCarrito();
            setOrdenCompra(undefined);
            }
    },[ordenCompra])

    const actualizarStock = () => {
        ordenCompra.items.map((i)=> {
            const docReference = doc(db,'items',i.id);
            getDoc(docReference)
                .then(snapshot=>{
                    //  console.log(snapshot.data().stock);
                     const stockOriginal = snapshot.data().stock;
                     const stockNuevo = stockOriginal - i.cantidad;
                     updateDoc(docReference, {stock: stockNuevo});
                })
                .catch(()=>console.log("ERROR EN ACTUALIZAR STOCK"))

        });
        // const itemsParaActualizar = await query(collection(db, "items"), where(documentId(), "in", itemsIdOrder));
        // await console.log("escribio" , itemsParaActualizar);
    }

    const subirCompra = () =>{
        const orderCollection = collection(db, 'orders');
        addDoc(orderCollection, ordenCompra)
            .then(({id})=>{
                console.log("Se realizo la venta: ", ordenCompra);
                console.log("Id orden: ",id);
                // setIdOrden(id);
                setOrdenCompra(ordenCompra);
                alert(`Se realizo la venta con exito: ID = ${id}`);
            })
            .catch(() => console.log("ERROR EN SUBIR COMPRA"));
    }

    const cambioCampoFormulario = (evento) =>{
        setFormulario({...formulario, [evento.target.name]: evento.target.value})
    }

    const  confirmarOrden = (evento) =>{
        evento.preventDefault();
        setOrdenCompra({date: new Date().toDateString(),
                        buyer: formulario,
                        items: listaCarrito(),
                        total: totalPrecio()
                        })
    }
    console.log(ordenCompra);
    return(
        <div>
            <form onSubmit={confirmarOrden}>
                <div>
                    <label>Nombre Completo:</label>
                    <input type="text" name="nombre" onChange={cambioCampoFormulario}/>
                </div>
                <div>
                    <label>Teléfono:</label>
                    <input type="text" name="telefono" onChange={cambioCampoFormulario}/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" onChange={cambioCampoFormulario}/>
                </div>
                <button type="submit">Finalizar Compra</button>
            </form>
        </div>
    )
} 

export default CartOrden;