import React from 'react';
import './NavBar.css';

export default function NavBar(){
    return <div><header className='header-flex'>
                        <a href='index.html'><h1>Michi Store</h1></a>
                        <nav>
                            <ul className ='menuBar'>
                                <li><a href='#'>Celulares</a></li>
                                <li><a href='#'>Parlantes</a></li>
                                <li><a href='#'>Otros</a></li>
                            </ul>
                        </nav>
                </header>
            </div>
}