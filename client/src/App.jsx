import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AirbnbNavbar from './components/Navbar/Navbar';
import IconMenu from './components/IconMenu/IconMenu';

function App() {
  return (
    <>
      <AirbnbNavbar />
      <IconMenu />
    </>
  );
}

export default App;
