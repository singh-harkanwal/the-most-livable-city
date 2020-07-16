import React from 'react';
import './Navbar.scss';
import logo from '../../the-most-livable-cities.png'

export const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="city tours logo"/>
    </nav>
  );
}
