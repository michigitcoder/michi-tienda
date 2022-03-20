import { addDoc,doc, collection, getDoc, updateDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../firebase";


const CartOrden = () =>{
    const [formulario, setFormulario] = useState(); 
    const [ordenCompra, setOrdenCompra] = useState();
    const {listaCarrito, totalPrecio, clearCarrito} = useContext(CartContext);
    

    useEffect (()=>{
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
                     const stockOriginal = snapshot.data().stock;
                     const stockNuevo = stockOriginal - i.cantidad;
                     updateDoc(docReference, {stock: stockNuevo});
                })
                .catch(()=>console.log("ERROR EN ACTUALIZAR STOCK"))

        });
    }

    const subirCompra = () =>{
        const orderCollection = collection(db, 'orders');
        addDoc(orderCollection, ordenCompra)
            .then(({id})=>{
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
        if (formulario.email === formulario.emailConfirmacion){
                const formularioOrden = {nombre: formulario.nombre,
                                        telefono: formulario.telefono,
                                        email: formulario.email
                                        }
                setOrdenCompra({date: new Date().toDateString(),
                                buyer: formularioOrden,
                                items: listaCarrito(),
                                total: totalPrecio()
                                })
                            }
            else {
                alert("Los emails deben coincidir");
            }
    }
    return(
        <div>
            <form onSubmit={confirmarOrden}>
                <div>
                    <label>Nombre Completo:</label>
                    <input type="text" name="nombre" onChange={cambioCampoFormulario} required/>
                </div>
                <div>
                    <label>Nro de Teléfono:</label>
                    <input type="number" name="telefono" onChange={cambioCampoFormulario} required/>
                </div>
                <div>
                    <label>Ingrese Email:</label>
                    <input type="email" name="email" onChange={cambioCampoFormulario} required/>
                </div>
                <div>
                    <label>Confirmacion Email:</label>
                    <input type="email" name="emailConfirmacion" onChange={cambioCampoFormulario} required/>
                </div>
                <button type="submit">Finalizar Compra</button>
            </form>
        </div>
    )
} 

export default CartOrden;