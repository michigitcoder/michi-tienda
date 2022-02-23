// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {Routes, Route} from 'react-router-dom';
import CartContextProvider from './context/CartContext';
import Cart from './components/Cart'

let itemPrueba = {  ruta:'https://http2.mlstatic.com/D_NQ_NP_971510-MLA46260077895_062021-O.jpg',
                descripcion: 'Redmi Note 9',
                precio: 320
};


function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route 
            path='/' 
            element = {<ItemListContainer greeting = "Hola, bienvenidos a la tienda" />} 
          />
          <Route 
            path='/categoria/:categoria'
            element = {<ItemListContainer greeting = "Mostrando por categoria" />}
          />
          <Route 
            path='/producto/:productoId'
            element ={<ItemDetailContainer />}
          />
          <Route 
            path='/cart'
            element = {<Cart />}
          />
          <Route 
            path='*'
            element = {<p>Error 404</p>}
          />
        </Routes>
        {/* <p>MICHI-TIENDA</p> */}
      </CartContextProvider>
    </div>
  );
}

export default App;
