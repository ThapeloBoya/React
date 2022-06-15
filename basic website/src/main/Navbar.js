import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import logo from '../logo.svg'

function Navbar() {
    return (
        <nav className='navbar '>
            <ul>
                <li>
                    <img src={logo} className='App-logo' alt=''/>
                </li>
                <div className='menu'>
                <li>
                    <Link to='/' className='link'>Home</Link>
                </li>
                <li>
                    <Link to='/about' className='link'>About</Link>
                </li>
                <li>
                    <Link to='/Services' className='link'>Services</Link>
                </li>
                <li>
                    <Link to='/Contact' className='link'>Contact</Link>
                    </li>
                    </div>
            </ul>
        </nav>
        )
}

export default Navbar