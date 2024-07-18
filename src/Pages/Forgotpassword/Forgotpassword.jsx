import React from 'react'
import './Forgotpassword.css'
import Navbar2 from '../../Components/Navbar2/Navbar2'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import forgotimg from '../../assets/forgotimg.png'
import { useNavigate } from 'react-router-dom';
import React3, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const Forgotpassword = () => {
  const navigate = useNavigate()
  const handleLogin = () => {navigate('/login')}



  const [loader, setLoader] = useState(false)
  const [data, setData] = useState({
      email: '',
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
    
    
    setError(newErrors);

    return Object.keys(newErrors).length === 0;
  }
  const handleSubmit = (e) => {
      e.preventDefault()
      // setLoader(true)
      const isValid = handleValidation2()
      if (isValid) {
        navigate('/resetpassword')
      }
    }



  return (
    <div className='forgotpassword'>
      <Navbar2/>
      <ToastContainer/>
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
        <form className='forgotform'  onSubmit={handleSubmit}>
          <div className='forgotform-control'>
            <label>Email</label>
            <input type="email"  name='email' value={data.email} onChange={handleChange} id={error?.email?'error-border': ''}/>
            {error?.email && <span>{error?.email}</span>}
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