import React from 'react'
import Appbar from './Appbar.js';
import Ooty from './Ooty.js';
import Image from './Images.js'
import Icon from './Icon.js'
import Plan from './Plan.js'
import Form from './Form.js'
import './App.css'

function App() {
  return (
    <>
    <div className='imp'>
   <header>
   <Appbar />
   </header>
   <hr></hr>
   <Ooty/>
   <Image />
   <Icon/>
   <Plan/>
   <Form/>
   </div>
   </>
  );
}

export default App;
