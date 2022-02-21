import './NavBar.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

export default function NavBar(){
    return <div><header className='header-flex'>
                        <h1><Link to={'/'}>Michi Store</Link></h1>
                        <nav>
                            <ul className ='menuBar'>
                                <li><Link to={'/categoria/telefonos'}>Telefonos</Link></li>
                                <li><Link to={'/categoria/tablets'}>Tablet</Link></li>
                                <li><Link to={'/categoria/parlantes'}>Parlantes</Link></li>
                            </ul>
                            <Link to={'/cart'}><CartWidget /></Link>
                        </nav>
                </header>
            </div>
}