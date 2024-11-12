import './port.css';

import React from 'react';

import Navbar from '../../components/layout/navbar/Navbar';
import Portafolio from '../../components/portafolio/Portafolio';

const Port = () => {
  return (
    <div className='porta'>
    <Navbar/>
    <h1 className='text-center'>MI <span>PORTAFOLIO</span></h1>
    <div className='portafolio'>
    <Portafolio/>

    </div>
    </div>
  )
}

export default Port
