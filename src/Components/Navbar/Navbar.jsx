import React from 'react'
import './Navbar.css'
import Booklylogo from '../../assets/Booklylogo.png'
import { GiShoppingCart } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';

 const Navbar = () => {
  const navigate = useNavigate()
  const handleLogin = () => {navigate('/login')}
  return (
   <header className='header-container'>
     <div className='logo-div'>
       <img src={Booklylogo} alt="image not available" className='logo'/> 
    </div>
    <nav className='nav'>
    <ul>
        <li>Home</li>
        <li>Categories</li>
        <li>Request a book</li>
        <li>Cart <GiShoppingCart className='icon'/></li>
        <button className='header-btn' onClick={handleLogin}>Login</button>
    </ul>
    
</nav>
   </header>
  )
}

export default Navbar
