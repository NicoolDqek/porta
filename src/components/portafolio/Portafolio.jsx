import './portafolio.css';

import React, {
  useEffect,
  useState,
} from 'react';

import proyectosData from '../../data/Data.json';
import Cards from '../layout/cards/Cards';

const Portafolio = () => {

  const [proyectos, setProyectos] = useState([]);  
  
 useEffect(() => {
    setProyectos(proyectosData.proyectos);
  }, []);
  return (
    <div>
   

 <div className='proyectos mt-3 pt-4'>
      <div className='container pro d-flex '>
         {proyectos.map(proyecto => (
         <Cards proyecto={proyecto} key={proyecto.id}/>
        ))}
        
        </div>  
    </div>
    </div>
  )
}

export default Portafolio
