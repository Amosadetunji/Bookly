import React from 'react'
import './Footer.css'
import Booklylogo2 from '../../assets/Booklylogo2.png'
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";


const Footer = () => {
    const top = () => {
        window.scrollTo(0,1);
    };
  return (
    <div className='footercontainer'>
        <div className='back' onClick={top}>
            <MdKeyboardDoubleArrowUp className='backarrow'/>
            <h2>BACK TO TOP</h2>
        </div>
        <div className='parentfooter-div'>
            <div className='booklyfooter'>
                <img src={Booklylogo2} alt='image not available'/>
                <p>Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor 
incididunt ut labore et dolore
magna aliqua. Ut enim ad minim
veniam, </p>
            </div>
            <div className='booklyfooter-p'>
                <h2>Catatogues</h2>
                <p>Senior School 1</p>
                <p>Senior School 2</p>
                <p>Senior School 3</p>
                <p>Senior School 1</p>
                <p>Senior School 2</p>
                <p>Senior School 3</p>
                <p>Senior School 1</p>
            </div>
            <div className='booklyfooter-p'>
                <h2>Contact Us</h2>
                <p className='booklyfooter-pp'>543, Duke Avenue, <br/>Chicago, USA.</p>
                <p>+919 406 1234 <br/>dallaspizzaz@gmail.com</p>
            </div>
            <div className='booklyfooter-p'>
                <h2>Subscribe Us</h2>
                <form className='booklyfooter-form'>
                    <input type='email' placeholder='Enter your email '/>
                    <button><FaArrowRightLong className='arrowright'/></button>
                </form>
            </div>
        </div>
        <div className='downfooter-div'>
            <p><FaRegCopyright />Copyright 2022. All rights reserved. </p>
            <p>Made from all the goodness in the dough.</p>
        </div>
        
    </div>
  )
}

export default Footer