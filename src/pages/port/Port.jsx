import './port.css';

import React from 'react';

import Navbar from '../../components/layout/navbar/Navbar';
import Portafolio from '../../components/portafolio/Portafolio';

const Port = () => {
  return (
    <div className='porta '>

    <div className="container-fluid">
      <div className="row">
        
    <h1 className='text-center'>MI <span>PORTAFOLIO</span></h1>
    <div className='portafolio col-lg-12'>
    <Portafolio/>
 
    </div>
    <Navbar/>
      </div>
      
      
      </div>  
   
    </div>
  )
}

export default Port
