import React, { useState } from 'react'
import './Login.css'
import Navbar2 from '../../Components/Navbar2/Navbar2'
import { PiUserCircleLight } from "react-icons/pi";
import { IoCloseCircleOutline } from "react-icons/io5";
import loginimg from '../../assets/loginimg.png'
import { FaGoogle } from "react-icons/fa";
import { SiApple } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { PiRectangle } from "react-icons/pi";
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



const Login = () => {
  const navigate = useNavigate()
  const handleLogin = () => {navigate('/signup')}

  const [loader, setLoader] = useState(false)
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const [error, setError] = useState()
    
    const handleChange = (e) => {
      console.log(e);
        const {name, value} = e.target
        setData({
            ...data, 
            [name]: value
        })
    }
    const handleValidation2 = () => {
      let newErrors = {};

    
      if (!data.email) {
        newErrors.email = "Email is required";
      }
      
      if (!data.password) {
        newErrors.password = "Password is required";
      }
      if(data.password.length < 7){
        newErrors.password = 'Password must be more than 6 characters '
      }
      
      setError(newErrors);
  
      return Object.keys(newErrors).length === 0;
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        // setLoader(true)
        const isValid = handleValidation2()
        if (isValid) {
          axios.post('https://medical-records-app-1.onrender.com/api/v1/admin/login', data)
          .then(response => {
              console.log(response);
              toast.success(response.data.message)
              // setLoader(false)
              if (response.status === 200) {
                  setInterval(() => { 
                      navigate('/Myaccount')
                  }, 2000);
              }
          })
          .catch(error => {
              console.log(error);
              toast.error(error.response.data.message)
          })
          .finally(() => {
              setLoader(false)
          })
        }
      }


  

  return (
    <div className='Login'>
      <ToastContainer />
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
              <form className='logform'  onSubmit={handleSubmit}>
                <div className='logform-control'>
                  <label>Email</label>
                  <input type="email"  name='email' value={data.email} onChange={handleChange} id={error?.email?'error-border': ''}/>
                  {error?.email && <span>{error?.email}</span>}
                </div>
                <div className='logform-control'>
                  <label>Password</label>
                  <input type="password" name='password' value={data.password} onChange={handleChange} id={error?.password?'error-border': ''}/>
                  {error?.password && <span>{error?.password}</span>}
                </div>
                <div className='forgot'>
                  <div className='forgot-got'>
                  <PiRectangle className='rectangle'/>
                  <p>Remember password</p>
                  </div>
                <Link to='/forgotpassword'><span>Forgot password?</span></Link>
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