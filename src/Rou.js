import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login.js'
import Registration from './Registration.js'

export default function App() {
    return (
      <div>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Login/>}></Route>
              <Route path='/contact' element={<Registration/>}></Route>
          </Routes>
      </BrowserRouter>
      </div>
    )
  }