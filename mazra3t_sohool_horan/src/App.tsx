import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import AppBar from './components/AppBar';
//pages
import Home from './pageCom/Home';
import Gallery from './pageCom/Gallery';
import Pricing from './pageCom/Pricing';
import Booking from './pageCom/Booking';

function App() {
  return (
    <BrowserRouter>
      <AppBar />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Gallery">Gallery</Link></li>
        <li><Link to="/Pricing">Pricing</Link></li>
        <li><Link to="/Booking">Booking</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;