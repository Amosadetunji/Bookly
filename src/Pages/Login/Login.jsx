import React from 'react'
import './Login.css'
import Navbar2 from '../../Components/Navbar2/Navbar2'
import { PiUserCircleLight } from "react-icons/pi";
import { IoCloseCircleOutline } from "react-icons/io5";
import loginimg from '../../assets/loginimg.png'
import { FaGoogle } from "react-icons/fa";
import { SiApple } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { PiRectangle } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';



const Login = () => {
  const navigate = useNavigate()
  const handleLogin = () => {navigate('/signup')}
  return (
    <div className='Login'>
        <Navbar2/>
        <div className='login-content'>
          <div className='login-contact'>
            <h2>< PiUserCircleLight className='add-log'/>Login</h2>
            <IoCloseCircleOutline className='closed-log'/>
          </div>
          <div className='login-p'>
          <p>Hi User, Welcome back to Bookly! We missed you</p>
          </div>
          <div className='login-form'>
            <div className='logform-container'>
              <form className='logform'>
                <div className='logform-control'>
                  <label>Email</label>
                  <input type="email"/>
                </div>
                <div className='logform-control'>
                  <label>Password</label>
                  <input type="password"/>
                </div>
                <div className='forgot'>
                <p><PiRectangle className='rectangle'/>Remember password</p>
                <span>Forgot password?</span>
                </div>
                <button type="Submit">Submit</button>
                <h3>Don’t have an account?<span onClick={handleLogin}> Sign Up </span></h3>
              </form>
            </div>
            <div>
              <img src={loginimg} alt='image not available'/>
            </div>
          </div>
          <div className='logdown-path'>
      <h2>Or continue with</h2>
      </div>
      <div className='logicon'>
        <div className='logfb'><FaGoogle/></div>
        <div className='logfb'><SiApple/></div>
        <div className='logfb'>< FaFacebookF/></div>
      </div>
          
        </div>
    </div>
  )
}

export default Login