import './cards.css';

import React from 'react';

const Cards = ({proyecto}) => {
const {nombre,tecnologias,img,url} = proyecto;

  return (
    <div className='card'>
      <a href={url}>
      <div data-text={nombre} className='img_Pr'>
        <img src={img}
          alt={nombre}></img>
      </div></a>
      <div className='p_info'>
          <ul className='d-flex tecnologias'>
          {tecnologias.map((tec, index) => (
            <li className='list-unstyled' key={index}>
              <img className='tecimg ' src={tec.logo} alt={tec.nombre} /> 
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Cards
