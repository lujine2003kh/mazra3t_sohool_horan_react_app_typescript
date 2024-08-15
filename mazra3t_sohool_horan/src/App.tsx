import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
//import { AppBar } from '@mui/material';
import {BrowserRouter,Link,Route,Routes}from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import  AppBar from './components/AppBar';
import WovenImageList from './components/WovenImageList';
//pages
import Home from './pageCom/Home';
import Gallery from './pageCom/Gallery';
import Pricing from './pageCom/Pricing';
import Booking from './pageCom/Booking';
function App() {
  return (
    <>
    <AppBar/>
    <BrowserRouter>
      <ul>
        <li><Link to="/">Home</Link></li>
         <li><Link to="/Info">Gallery</Link></li>
         <li><Link to="/News">Pricing</Link></li>
        <li><Link to="/Contact">Booking</Link></li>
       </ul>
       <Routes>
       <Route path="/Home" element={<Home/>}/>
         <Route path="/Gallery" element={<Gallery/>}/>
         <Route path="/Pricing" element={<Pricing/>}/>
         <Route path="/Booking" element={<Booking/>}/>
       </Routes>
     </BrowserRouter>
    <WovenImageList/>
    </>
  );
}

export default App;
