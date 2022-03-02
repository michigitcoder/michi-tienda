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
            alert("Se realizo la venta con exito");
            clearCarrito();
            setOrdenCompra(undefined);
            }
    },[ordenCompra])

    const actualizarStock = () => {
        ordenCompra.items.map((i)=> {
            const docReference = doc(db,'items',i.id);
            getDoc(docReference)
                .then(docu=>{
                     console.log(docu.data().stock);
                     const stockOriginal = docu.data().stock;
                     const stockNuevo = stockOriginal - i.cantidad;
                     console.log("Stock nuevbo", stockNuevo);
                     updateDoc(docReference, {stock: stockNuevo});
                })
                .catch(error=>console.log(error))

        });
        // const itemsParaActualizar = await query(collection(db, "items"), where(documentId(), "in", itemsIdOrder));
        // await console.log("escribio" , itemsParaActualizar);
    }

    // const actualizarStock = async () =>{
    // //   try{
    //     // const itemsCollection = collection(db, 'items');
    //     // const cartItemsIDS = order.items.map(item => item.id);    
    //     // const itemsToUpdateQuery = await query(collection(db, "items"), where(documentId(), "in", cartItemsIDS)); //Query.
    //     // const itemsToUpdateQuerySnapshot = await getDocs(itemsToUpdateQuery); //Respuesta de la query.
    //     const itemsIdOrden = ordenCompra.items.map((i) =>  i.id);
    //     const itemsActualizar = await query(collection(db, 'items'), where(documentId(), 'in', itemsIdOrden ));
    //     console.log('items a actualizar', itemsActualizar);
    //     const itemsActualizarSnapshot = await getDocs(itemsActualizar);
    //     console.log('ni idea q hace',itemsActualizarSnapshot);
    //     const batch = writeBatch(db);
    //     console.log(itemsActualizarSnapshot.docs);
    //     itemsActualizarSnapshot.docs.forEach((itemSnapshot) =>{
    //         // batch.update(itemSnapshot.ref, {stock: itemSnapshot.data().stock - orden.items[index].cantidad}) //Stock del inventario - stock consumido en la compra.
    //     // console.log(itemSnapshot.data() ,orden.items[index].cantidad);
    //         console.log(ordenCompra.items[2].id);
    //         console.log(itemSnapshot.data().id);
    //         let stockResta = ordenCompra.items.find((i) => i.id === itemSnapshot.data().id);
            
    //         console.log(stockResta);
    //     });
    // }
// ordenCompra saque de parametro
    const subirCompra = /*async*/ () =>{
        const orderCollection = collection(db, 'orders');
        /*await*/ addDoc(orderCollection, ordenCompra)
            .then(()=>{
                console.log("Se realizo la venta", ordenCompra)
                setOrdenCompra(ordenCompra);
            })
            .catch((error) => console.log(error));
        
    }

    const cambioCampoFormulario = (evento) =>{
        setFormulario({...formulario, [evento.target.name]: evento.target.value})
    }

    const  confirmarOrden = /*async*/ (evento) =>{
        evento.preventDefault();
    // Cambio subirCompra por setOrdenCompra
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