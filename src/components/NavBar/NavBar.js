import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import {NavLink} from 'react-router-dom';


const NavBar = () => {
  const setLinkColor = ({ isActive }) => (isActive ? { color: 'black' } : { color: '#0000008c' });
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
        <a className='navbar-brand' to='/'>
          PhoneStation
        </a>
        <div className='collapse navbar-collapse' id='navbarTogglerDemo03'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink className='nav-link active' aria-current='page' to='/'>
                Inicio
              </NavLink>
            </li>
            <li className='nav-item dropdown'>
              <NavLink className='nav-link dropdown-toggle' to='/' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Productos
              </NavLink>
              <ul class="dropdown-menu">
                <li><NavLink class="dropdown-item" style={setLinkColor} to="/productos/macbooks">MackBooks</NavLink></li>
                <li><NavLink class="dropdown-item" style={setLinkColor} to="/productos/iphones">Iphones</NavLink></li>
              </ul>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};



export default NavBar;
