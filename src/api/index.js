
import { getDocs, collection, getDoc, doc, query, where } from "firebase/firestore";
import { db } from "../firebase";
function getItemsFirestore(category){
    //Referecncia a la coleccion, debe tener la referencia a la DB
    //y el nombre de la coleccion 
    // collection(db,¨items¨)
    // Si no se le pasa parametro category hace getDocs de toda la coleccion, sino filtra por category
    return new Promise((resolve, reject) =>{ 
        if (!category){
            getDocs(collection(db,'items'))
                .then(snapshot => {
                    const productos = snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()}))
                    resolve(productos);
                })
                .catch(error => {console.log(error);
                                reject(error);
                })
        }
        else {
            const itemsFilterCollection = query(collection(db,'items'), where('categoria','==', category));
            getDocs(itemsFilterCollection)
                .then(snapshot => {
                    const productos = snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()}));
                    resolve(productos);
                })
                .catch(error => {console.log(error);
                                reject(error);
                })
        }
    })};

function getItems(category){
    return getItemsFirestore(category);
}

function getItem(id){
    return new Promise((resolve, reject) =>{
        getDoc(doc(db,'items',id))
            .then(snapshot => {
                const producto = {id: snapshot.id , ...snapshot.data()};
                resolve(producto);
            })
            .catch(error=>{
                console.log(error);
                reject(error);
            })
    })
}

export {getItems, getItem}

