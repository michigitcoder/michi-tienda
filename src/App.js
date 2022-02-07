import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


let itemPrueba = {  ruta:'https://http2.mlstatic.com/D_NQ_NP_971510-MLA46260077895_062021-O.jpg',
                descripcion: 'Redmi Note 9',
                precio: 320
};


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting = "Hola, bienvenidos a la tienda" />
      
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
