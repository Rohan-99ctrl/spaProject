import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddDevs from './components/Admin/AddDevs';
import Admin from './components/Admin/Admin';
import Profile from './components/Team/Profile/Profile';
import Team from './components/Team/Team';
import Header from './components/Layouts/Header/Header';
import './App.css';
import Footer from './components/Layouts/Footer/Footer';
import EditDev from './components/Admin/EditDev';

function App() {
  return (
    <>

     
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path='/' element={ <Team></Team> } />
            <Route path='/team' element={ <Team></Team> } />
            <Route path='/profile/:username' element={ <Profile></Profile> } />
            <Route path='/admin' element={ <Admin></Admin> } />
            <Route path='/adddeveloper' element={ <AddDevs></AddDevs> } />
            <Route path='/editDevs/:username' element={ <EditDev></EditDev> } />
          </Routes>
          <Footer></Footer>
        </BrowserRouter>

    </>
  );
}

export default App;
