import './cards.css';

import React from 'react';

const Cards = ({proyecto}) => {
const {nombre,tecnologias,img,url} = proyecto;

  return (
    <div className='card'>
      <a href={url}>
      <div className='img_Pr'>
        <img src={img}
          alt={nombre}></img>
      </div></a>
      <div className='p_info'>
        <h4>{nombre}</h4>
          <ul className='d-flex align-align-items-center'>
          {tecnologias.map((tec, index) => (
            <li className='list-unstyled h-50' key={index}>
              <img className='tecimg h-50 w-75' src={tec.logo} alt={tec.nombre} /> 
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Cards
