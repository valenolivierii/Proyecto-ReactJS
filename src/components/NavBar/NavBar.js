import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import "./NavBar.css";


const NavBar = () => {
    return (
        <nav className='navbar navbar-expand-lg bg-ligth p-3'>
      <div className='container'>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarTogglerDemo03'
          aria-controls='navbarTogglerDemo03'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <a className='navbar-brand' href='/'>
          PhoneStation
        </a>
        <div className='collapse navbar-collapse' id='navbarTogglerDemo03'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='/'>
                Inicio
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/'>
                Productos
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/'>
                Contacto
              </a>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};



export default NavBar;
