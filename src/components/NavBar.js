import './NavBar.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function NavBar(){
    const {cantidadProductos} = useContext(CartContext);
    return <div><header className='header-flex'>
                        <h1><Link to={'/'}>Michi Store</Link></h1>
                        <nav>
                            <ul className ='menuBar'>
                                <li><Link to={'/categoria/telefonos'}>Telefonos</Link></li>
                                <li><Link to={'/categoria/tablets'}>Tablet</Link></li>
                                <li><Link to={'/categoria/parlantes'}>Parlantes</Link></li>
                            </ul>
                            <>
                                {cantidadProductos()!==0
                                &&<Link to={'/cart'}><CartWidget /></Link>
                                }
                            </>
                        </nav>
                </header>
            </div>
}