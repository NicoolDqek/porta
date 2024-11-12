import './aboutme.css';

import React from 'react';

import ex_img from '../../assets/study.png';
import Navbar from '../../components/layout/navbar/Navbar';

const AboutMe = () => {
  return (
    <div className='bg-black' >
      <Navbar />
      <div className='about'>
        <h1>About <span>Me</span></h1>
        <div className='table'>
          <table>
            <tr>
              <td><span>Nombre: </span>NICOOL DAYANA</td>
              <td><span>Apellido: </span>CUECA VELANDIA</td>
            </tr>
            <tr>
              <td><span>Edad: </span>20 Años</td>
              <td><span>Ciudad: </span>BOGOTA</td>
            </tr>
            <tr>
              <td><span>Idioma: </span>ESPAÑOL</td>
              <td><span>Telefono: </span>3118713672</td>
            </tr>
          </table>
          <a  href={require("../../assets/Nicool-Dayana-Cueca-Velandia-CV.pdf")} download='cv'>
          <button >Download Cv<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
          </svg></button></a>
        </div>
      </div>
      <h1 className='st text-center'>skills</h1>
      <div className='skills container'>

        <div className='skill'>
          <h6>HTML</h6>
          <h5>80%</h5>
        </div>
        <div className='skill'>
          <h6>JavaScript</h6>
          <h5>60%</h5>
        </div>
        <div className='skill'>
          <h6>MySQL</h6>
          <h5>50%</h5>
        </div>
        <div className='skill'>
          <h6>Bootstrap</h6>
          <h5>60%</h5>
        </div>
        <div className='skill'>
          <h6>CSS</h6>
          <h5>80%</h5>
        </div>
      </div>
       <h1 className='text-center fw-bold text-white et'>Edu<span>cacion</span></h1>
      <div className='education '>
        <div className='tableE container'>
          <table>
            <tr>
              <td>
                <div className='d-flex'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-bookmark-check-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5m8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
                </svg>
                <h6>2009-2021</h6></div>
                <h5>Colegio Gerardo Molina Ramirez</h5>
                <h5>Educacion Basica</h5>
              </td>
              <td>
                <div className='d-flex'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-bookmark-check-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5m8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
                </svg>
                <h6>2022-actualmente</h6></div>
                <h5>Politecnico Gran Colombiano</h5>
                <h5>6 Semestre</h5>
              </td>
            </tr>
            <tr>
              <td>
                <div className='d-flex'>
                <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-bookmark-check-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5m8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
                </svg>
                <h6>2020-2021</h6></div>
                <h5>Manejo de Eventos,Clases y Objetos</h5>
                <h5>Sena</h5>
              </td>
              <td>
                <div className='d-flex'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-bookmark-check-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5m8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
                </svg>
                <h6>dic 2021-feb 2022</h6></div>
                <h5>Fundamentos de la Progrmacion</h5>
                <h5>MisionTic2022</h5>
              </td>
            </tr>
          </table>
        </div>
        <div className='img_E'>
          <img src={ex_img} className='ex_img'></img>
        </div>
      </div>
    </div>



  )
}

export default AboutMe
