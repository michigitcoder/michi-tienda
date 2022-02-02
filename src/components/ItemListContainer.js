import './ItemListContainer.css'
import ItemCount from "./ItemCount";
export default function ItemListContainer({greeting}){
    function agregarItems(){
        console.log('Se agregaron los items');
    }
    return (
        <div>
            <p className = "estiloSaludo">{greeting}</p>;
            <ItemCount stock = {8} initial = {4} onAdd = {agregarItems} />
        </div>
    )
}