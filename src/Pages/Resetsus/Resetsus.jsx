import React from 'react'
import './Resetsus.css'
import { IoCloseCircleOutline } from "react-icons/io5";
import Resetsus1 from '../../assets/resetsusimg.png'
import { Link } from 'react-router-dom';

const Resetsus = () => {
  return (
    <div className='Resetsus'>
     
      <div className='resetsus-div'>
        <div>
        <img src={Resetsus1} alt='image not available'/>
        </div>
        <div>
        <IoCloseCircleOutline className='resetsus-out'/>
        </div>
        </div>
      
        
        <div className='resetsus-text'>
        <h2 className='reset-text'>Password changed successfully!</h2>
        <Link to='/login' className='resetp-text'><h3>Proceed to <span>Login</span></h3></Link>
        </div>
    </div>
  )
}

export default Resetsus