import React from 'react'
import Appbar from './Appbar.js';
import Destination from './Destination.js';
import Image from './Images.js'
import Icon from './Icon.js'
import Plan from './Plan.js'
import Form from './Form.js'
import Home from './Home.jsx'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login.js';
import RegistrationForm from './Registration.js';
import Payment from './Payment.jsx';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<RegistrationForm/>}></Route>
        <Route path='/Home' element={<Home/>}></Route> 
        <Route path='/destination' element={<Destination/>}></Route> 
        <Route path='/bactohome' element={<Home/>}></Route> 
        <Route path='/payment' element={<Payment/>}></Route> 
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
