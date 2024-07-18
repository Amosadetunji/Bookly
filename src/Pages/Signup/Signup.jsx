import React, { useState } from 'react'
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

    const [loader, setLoader] = useState(false)
    const [data, setData] = useState({
        email: '',
        fullName: '',
        password: '',
        number: '',
        password2: '',
    })

    const [error, setError] = useState()
    
    const handleChange2 = (e) => {
      console.log(e);
        const {name, value} = e.target
        setData({
            ...data, 
            [name]: value
        })
    }
    const handleValidation2 = () => {
      let newErrors = {};

      if (!data.fullName) {
        newErrors.fullName = "Full name is required";
      }
      if (!data.email) {
        newErrors.email = "Email is required";
      }
      if (!data.number) {
        newErrors.number = "Phone number is required";
      }
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
    const handleSubmit2 = (e) => {
        e.preventDefault()
        // setLoader(true)
        const isValid = handleValidation2()
        if (isValid) {
          const formData = {
            fullName: data.fullName,
            email: data.email,
            password: data.password
          }
          axios.post('https://medical-records-app-1.onrender.com/api/v1/admin/create', formData)
          .then(response => {
              console.log(response);
              toast.success(response.data.message)
              // setLoader(false)
              if (response.status === 201) {
                  setInterval(() => { 
                      navigate('/login')
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

        // console.log(data);

  return (
    <div className='sign'>
      <ToastContainer />
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
      <form className='form' onSubmit={handleSubmit2}>
        <div className='form-control'>
            <label>Full Name</label>
            <input type="text" name='fullName' value={data.fullName} onChange={handleChange2} id={error?.fullName?'error-border': ''}/>
            {error?.fullName && <span>{error?.fullName}</span>}
            
        </div>
        <div className='form-control'>
            <label>Mobile Number</label>
            <input type="number" name='number' value={data.number} onChange={handleChange2} id={error?.number?'error-border': ''}/>
            {error?.number && <span>{error?.number}</span>}
        </div>
        <div className='form-control'>
            <label>Email</label>
            <input type="email" name='email' value={data.email} onChange={handleChange2} id={error?.email?'error-border': ''}/>
            {error?.email && <span>{error?.email}</span>}
        </div>
        <div className='form-control'>
            <label>Password</label>
            <input type="password" name='password' value={data.password} onChange={handleChange2} id={error?.password?'error-border': ''}/>
            {error?.password && <span>{error?.password}</span>}
        </div>
        <div className='form-control'>
            <label>Re-enter password</label>
            <input type="password" name='password2' value={data.password2} onChange={handleChange2} id={error?.password2?'error-border': ''}/>
            {error?.password2 && <span>{error?.password2}</span>}
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