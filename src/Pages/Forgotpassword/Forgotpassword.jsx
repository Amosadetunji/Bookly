import React from 'react'
import './Forgotpassword.css'
import Navbar2 from '../../Components/Navbar2/Navbar2'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import forgotimg from '../../assets/forgotimg.png'
import { useNavigate } from 'react-router-dom';

const Forgotpassword = () => {
  const navigate = useNavigate()
  const handleLogin = () => {navigate('/login')}
  return (
    <div className='forgotpassword'>
      <Navbar2/>
      <div className='forgot-content'>
        <div className='forgot-contact'>
          <IoArrowBackCircleOutline className='add-forgot'/>
          <IoCloseCircleOutline className='closed-forgot'/>
        </div>
        <div className='parent'>
          <div className='parentform'>
          <div className='lock-div'>
          <CiLock className='lock' />
          <h2>FORGOT PASSWORD</h2>
        </div>
        <p>Please enter the email you used to create your account and we will send you a link to reset your password</p>
        <form className='forgotform'>
          <div className='forgotform-control'>
            <label>Email</label>
            <input type="email"/>
          </div>
          <button type="submit">Next</button>
        </form>
        <h3>Return to <span onClick={handleLogin}>Login</span> </h3>
          </div>
          <div>
            <img src={forgotimg} atl='image not available'/>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Forgotpassword