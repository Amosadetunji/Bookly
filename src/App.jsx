import { useState } from 'react'
import {BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Signup from './Pages/Signup/Signup'
import Login from './Pages/Login/Login'
import Forgotpassword from './Pages/Forgotpassword/Forgotpassword'
import Resetpassword from './Pages/Resetpassword/Resetpassword'
import Myaccount from './Pages/Myaccount/Myaccount'
import Resetsus from './Pages/Resetsus/Resetsus'
function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='forgotpassword' element={<Forgotpassword/>}/>
      <Route path='resetpassword' element={<Resetpassword/>}/>
      <Route path='Myaccount' element={<Myaccount/>}/>
      <Route path='Resetsus' element={<Resetsus/>}/>


    </Routes>

    </BrowserRouter>
  )
}

export default App
