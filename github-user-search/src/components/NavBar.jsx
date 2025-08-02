import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/photo1.jpeg';

function Navbar() {

  const[menu, setMenu] =useState("Home")
  return (
    <div className='navbar-container'>
      <nav className="navbar">
        <h1 className="logo">MyApp</h1>
        <ul className="nav-links">
          <li onClick={()=>setMenu("Home")} className={menu === "Home"?"active":""}><Link to="/">Home</Link></li>
          <li onClick={()=>setMenu("About")} className={menu === "About"?"active":""}><Link to="/about">About</Link></li>
          <li onClick={()=>setMenu("Contact Us")} className={menu === "Contact Us"?"active":""}><Link to="/projects">Contact Us</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
