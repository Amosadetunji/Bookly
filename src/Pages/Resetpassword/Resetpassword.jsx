import React from 'react'
import './Resetpassword.css'
import Navbar2 from '../../Components/Navbar2/Navbar2'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
import { MdLockReset } from "react-icons/md";
import resetimg from '../../assets/resetimg.png'
import { useNavigate } from 'react-router-dom';

const Resetpassword = () => {
  const navigate = useNavigate()
  const handleLogin = () => {navigate('/login')}
  return (
    <div className='resetpassword'>
        <Navbar2/>


        <div className='reset-content'>
        <div className='reset-contact'>
          <IoArrowBackCircleOutline className='add-reset'/>
          <IoCloseCircleOutline className='closed-reset'/>
        </div>
        <div className='re-parent'>
          <div className='re-parentform'>
          <div className='re-lock-div'>
          < MdLockReset className='re-lock' />
          <h2>RESET PASSWORD</h2>
        </div>
        <p>We have just sent a verification code to your email. Please enter the email below.</p>
        <form className='resetform'>
          <div className='resetform-control'>
            <label>Enter New Password</label>
            <input type="password"/>
          </div>
          <div className='resetform-control'>
            <label>Confirm New Password</label>
            <input type="password"/>
          </div>
          <button type="submit">Saved</button>
        </form>
        <h3>Return to <span  onClick={handleLogin}>Login</span> </h3>
          </div>
          <div>
            <img src={resetimg} atl='image not available'/>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Resetpassword