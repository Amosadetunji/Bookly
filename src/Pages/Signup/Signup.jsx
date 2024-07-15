import React from 'react'
import './Signup.css'
import Navbar from '../../Components/Navbar/Navbar'
import { AiOutlineUserAdd } from "react-icons/ai";
import { IoCloseCircleOutline } from "react-icons/io5";
import Signupimg from '../../assets/signupimg.png'
import { FaGoogle } from "react-icons/fa";
import { SiApple } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate()
  const handleLogin = () => {navigate('/login')}
  return (
    <div className='sign'>
      <Navbar/>
      <div className='signup-content'>
      <div className='add-contact'>
        <h2><AiOutlineUserAdd className='add'/>SIGN UP</h2>
        <IoCloseCircleOutline className='closed'/>
      </div>
      <div className='signup-p'>
      <p>Become a member. You’ll enjoy exclusive deals, offers and rewards.</p>
    </div>

  <div className='signup-form'>
    <div className='form-container'>
      <form className='form'>
        <div className='form-control'>
            <label>Full Name</label>
            <input type="text" />
        </div>
        <div className='form-control'>
            <label>Mobile Number</label>
            <input type="number"/>
        </div>
        <div className='form-control'>
            <label>Email</label>
            <input type="email" />
        </div>
        <div className='form-control'>
            <label>Password</label>
            <input type="Password"/>
        </div>
        <div className='form-control'>
            <label>Re-enter password</label>
            <input type="password"/>
        </div>
        <p>By signing up, you agree to our <span>Terms & Conditions</span> and <span>Privacy policy.</span></p>
        <button type="Submit">SUbmit</button>
        <h3>Already have an account? <span  onClick={handleLogin}>Login</span></h3>
      </form>
      
    </div>
      <div className='signupimg'>
        <img src={Signupimg} alt='image not available'/>
      </div>
      </div>
      <div className='down-path'>
      <h2>Or continue with</h2>
      </div>
      <div className='icon-group'>
        <div className='fb'><FaGoogle/></div>
        <div className='fb'><SiApple/></div>
        <div className='fb'>< FaFacebookF/></div>
      </div>
      </div>


  </div>
  )
}

export default Signup