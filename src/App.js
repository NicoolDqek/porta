import './App.css';

import {
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';

import AboutMe from './pages/aboutMe/AboutMe';
import HomePage from './pages/homepage/HomePage';
import Port from './pages/port/Port';

function App() {
  const location = useLocation();
  return (
    <div >
      <Routes key={location.pathname}>
        <Route path='/'  element={<HomePage/>}></Route>
        <Route path='/about' element={<AboutMe/>}></Route>
        <Route path='/portafolio/' element={<Port/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
