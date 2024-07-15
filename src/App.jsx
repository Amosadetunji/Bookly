import { useState } from 'react'
import {BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Signup from './Pages/Signup/Signup'
import Login from './Pages/Login/Login'
import Forgotpassword from './Pages/Forgotpassword/Forgotpassword'
import Resetpassword from './Pages/Resetpassword/Resetpassword'
function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='forgotpassword' element={<Forgotpassword/>}/>
      <Route path='resetpassword' element={<Resetpassword/>}/>


    </Routes>

    </BrowserRouter>
  )
}

export default App
