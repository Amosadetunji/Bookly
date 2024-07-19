import React from 'react'
import './Navbar3.css'
import Booklylogo from '../../assets/Booklylogo.png'
import { GiShoppingCart } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';


const Navbar3 = () => {
  //   const navigate = useNavigate()
  // const handleLogin = () => {navigate('/login')}
  return (
    <header className='header-container3'>
     <div className='logo-div3'>
       <img src={Booklylogo} alt="image not available" className='logo3'/> 
    </div>
    <nav className='nav3'>
    <ul>
        <li>Home</li>
        <li>Categories</li>
        <li>Request a book</li>
        <li>Cart <GiShoppingCart className='icon3'/></li>
        <button className='header-btn3'>My Account</button>
    </ul>
    
</nav>
   </header>
  )
}

export default Navbar3