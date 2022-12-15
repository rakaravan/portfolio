import React, {useState} from 'react';
import './Navbar.css'
import logo from '../../image/logo.jpg';
import data from './data';
import {IoIosMenu} from 'react-icons/io';
import {IoIosClose} from 'react-icons/io';



const Navbar = () => {

  const [isNavShowing, setIsNavShowing] = useState(false);

  

  return (
    <nav>
        <div className="container nav__container">
            <a href="index.html" className='nav__logo'>
                <img src={logo} alt="logo" />
            </a>
            <ul className={`nav__menu ${isNavShowing ? "nav__menu-hide" : ""}`}>
            {
                data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
            }
            </ul>
            <button id="theme__icon"  onClick={() => {
              setIsNavShowing( prev => !prev)
            }}> 
            {/* <IoIosClose/> */}
            
            {
              isNavShowing ? <IoIosMenu/> : <IoIosClose/>
            } 
            </button>
        </div>
    </nav>
  )
}

export default Navbar;