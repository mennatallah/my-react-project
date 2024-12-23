import React from 'react'
import {Link, NavLink } from 'react-router-dom'
import { useState } from "react";
import "./NavBar.css"
export default function NavBar() {
    const [menuOpen , setMenuOpen] =useState(false)

  return (
    <nav>
        <Link to ="/" className='title'>
        TestOPs Agency</Link>   
        <div className="menu" onClick={() => {
            setMenuOpen(!menuOpen)
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? "open":""}>
          <li>
            <NavLink to="/AboutUs">About Us</NavLink></li>
          <li><
            NavLink to ='/ContactUs'>Contact Us
             </NavLink></li>
        </ul>
    </nav>
  )
}

