import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router';
import NewArrivels from './Components/NewArrivels/NewArrivels';
// import Home from './Components/Navbar/Home/Home';
import Hero from './Components/Hero/Hero';
import CameraBattary from './Components/CameraBattary/CameraBattary';
import PossiblitiesPerformance from './Components/PossiblitiesPerformance/PossiblitiesPerformance';
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
    <Home />
    <Routes>
      <Route path='/' element={''} />
      <Route path='/NewArrivels' element={<NewArrivels />} />
      <Route />
    </Routes>
    </>
  );
}

export default App;
