import React from 'react'
import './Navbar2.css'
import Booklylogo from '../../assets/Booklylogo.png'
import { GiShoppingCart } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';


const Navbar2 = () => {
  const navigate = useNavigate()
  const handleLogin = () => {navigate('/signup')}
  return (
    <header className='header-container2'>
     <div className='logo-div2'>
       <img src={Booklylogo} alt="image not available" className='logo2'/> 
    </div>
    <nav className='nav2'>
    <ul>
        <li>Home</li>
        <li>Categories</li>
        <li>Request a book</li>
        <li>Cart <GiShoppingCart className='icon2'/></li>
        <button className='header-btn2' onClick={handleLogin}>Get started</button>
    </ul>
    
</nav>
   </header>
  )
}

export default Navbar2