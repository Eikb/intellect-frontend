import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import { AppBar } from '@mui/material';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import AboutUs from './pages/AboutUs';
import CoursePage from './pages/CoursesPage';
import Contact from './pages/Contact';
import InformationInput from './pages/InformationInput';
import Stapler from './pages/Stapler';


function App() {
  return (
    <>
   <ResponsiveAppBar/>
     <Routes>
    <Route path="/" element={ <Home/> } />
    <Route path="/uberuns" element={ <AboutUs/> } />
    <Route path="/kurse" element={ <CoursePage/> } />
    <Route path="/kontakt" element={ <Contact/> } />
    <Route path="/buchen/:id" element={ <InformationInput/> } />
    <Route path="/stapler" element={ <Stapler/> } />



  </Routes>

    </>
   
  );
}

export default App;
