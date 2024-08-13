import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
//import { AppBar } from '@mui/material';
import  AppBar from './components/AppBar';
import WovenImageList from './components/WovenImageList';
function App() {
  return (
    <>
    <AppBar/>
    <WovenImageList/>
    </>
  );
}

export default App;
