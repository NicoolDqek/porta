import './homepage.css';

import React from 'react';

import { Link } from 'react-router-dom';

import img_p from '../../assets/p_img.png';
import Navbar from '../../components/layout/navbar/Navbar';

const HomePage = () => {
  return (
    <div className='container-fluid'>
    <div className='row'>
      
     
     <div className='info d-flex col-lg-11'>
      <div className='img'>
        <img src={img_p}></img>
      </div>
      <div className='details'>
        <h1>-SOY NiCOOL CUECA.<br/><span>Desarrolladora.</span></h1>
        <p>Estudiante con bases teoricas y practicas, Soy una persona
        abierta a aprender constantemente, siempre en busca de nuevas formas de
        mejorar y perfeccionar mis habilidades cada día.
</p>
<Link to='/about'><button>About Me<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
</svg></button></Link>
      </div>
      
     </div>
     <Navbar/>
     </div>
    </div>
    
  )
}

export default HomePage
