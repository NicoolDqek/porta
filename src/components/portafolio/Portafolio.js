import './portafolio.css';

import React, {
  useEffect,
  useState,
} from 'react';

import proyectosData from '../../data/Data.json';
import Cards from '../layout/cards/Cards';

const Portafolio = () => {

  const [proyectos, setProyectos] = useState([]); // Estado para almacenar los proyectos

 useEffect(() => {
    setProyectos(proyectosData.proyectos);
  }, []);
  return (
    <div>
      <div className='filtros'>
    <ul>
        <li>Proyectos</li>
        <li>Diseño</li>
        
    </ul>
</div>
 <div className='proyectos'>
      <div className='container pro d-flex flex-wrap justify-content-center'>
         {proyectos.map(proyecto => (
         <Cards proyecto={proyecto} key={proyecto.id}/>
        ))}
        
        </div>  
    </div>
    </div>
  )
}

export default Portafolio
