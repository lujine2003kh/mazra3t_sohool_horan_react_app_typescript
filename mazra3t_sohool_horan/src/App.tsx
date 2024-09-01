import './App.css';
import { BrowserRouter, Link, Route, Routes, } from 'react-router-dom';
import AppBar from './components/AppBar';
import Footer from './components/footer';
import Booking from './pageCom/Booking';
import Gallery from './pageCom/Gallery';
import { Navbar } from './components/navbar';
// Pages
import Home from './pageCom/Home';
import Pricing from './pageCom/Pricing';
import Login from './pageCom/logPage';
// App.tsx
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
    <AppBar/>
      {/* <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/Gallery">Gallery</Link></li>
    <li><Link to="/Pricing">Pricing</Link></li>
    <li><Link to="/Booking">Booking</Link></li>
      </ul>  */}
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Gallery" element={<Gallery />} />
    <Route path="/Pricing" element={<Pricing />} />
    <Route path="/Booking" element={<Booking />} />
    {/* <Route path="/login" element={<logPage/>} /> */}
    </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
