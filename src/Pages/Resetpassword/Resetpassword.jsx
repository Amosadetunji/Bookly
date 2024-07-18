import React from 'react'
import './Resetpassword.css'
import Navbar2 from '../../Components/Navbar2/Navbar2'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
import { MdLockReset } from "react-icons/md";
import resetimg from '../../assets/resetimg.png'
import { useNavigate } from 'react-router-dom';
import React4, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom';


const Resetpassword = () => {
  const navigate = useNavigate()
  const handleLogin = () => {navigate('/login')}


  const [loader, setLoader] = useState(false)
    const [data, setData] = useState({
        password: '',
        password2:'',
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

  
      if (!data.password) {
        newErrors.password = "Password is required";
      }
      if(data.password.length < 7){
        newErrors.password = 'Password must be more than 6 characters '
      }
      if (!data.password2) {
        newErrors.password2 = "Confirm password is required";
      } else if (data.password !== data.password2) {
        newErrors.password2 = "Passwords must match";
      }
      
      setError(newErrors);
  
      return Object.keys(newErrors).length === 0;
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        // setLoader(true)
        const isValid = handleValidation2()
        if (isValid) {
         navigate('/login')
        }
      }

  return (
    <div className='resetpassword'>
        <Navbar2/>
        <ToastContainer/>


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
        <form className='resetform' onSubmit={handleSubmit}>
          <div className='resetform-control'>
            <label>Enter New Password</label>
            <input type="password" name='password' value={data.password} onChange={handleChange} id={error?.password?'error-border': ''}/>
            {error?.password && <span>{error?.password}</span>}
          </div>
          <div className='resetform-control'>
            <label>Confirm New Password</label>
            <input type="password" name='password2' value={data.password2} onChange={handleChange} id={error?.password2?'error-border': ''}/>
            {error?.password2 && <span>{error?.password2}</span>}
          </div>
         <Link to='/resetsus'><button type="submit">Saved</button></Link>
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