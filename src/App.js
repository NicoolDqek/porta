import './App.css';

import {
  Route,
  Routes,
} from 'react-router-dom';

import AboutMe from './pages/aboutMe/AboutMe';
import HomePage from './pages/homepage/HomePage';
import Port from './pages/port/Port';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/'  element={<HomePage/>}></Route>
        <Route path='/about' element={<AboutMe/>}></Route>
        <Route path='/portafolio' element={<Port/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
