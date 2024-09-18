import './App.css';
import { BrowserRouter, Link, Route, Routes, } from 'react-router-dom';
import AppBar from './components/AppBar';
import Footer from './components/Footerblackbox';
import Booking from './pageCom/Booking';
import { Navbar } from './components/navbar';
// Pages
import Home from './pageCom/Home';
import Gallery from './pageCom/Gallery';
import { Signup } from './pageCom/SignUp';
import Pricing from './pageCom/Pricing';
// App.tsx
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Login from './pageCom/Login';
import Purchase from './pageCom/purchase';

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
    <Route path="/Home" element={<Home/>} />
    <Route path="/Gallery" element={<Gallery/>} />
    <Route path="/Pricing" element={<Pricing />} />
    <Route path="/Booking" element={<Booking />} />
    <Route path='/Log In' element={<Login />}/> 
    <Route path='/Sign Up' element={<Signup/>}/>
    <Route path='/here' element={<Signup/>}/>
    <Route path='/purchase' element={<Purchase/>}/>

    </Routes>
    <Footer/>
    </Router> 
  );
}

export default App;
