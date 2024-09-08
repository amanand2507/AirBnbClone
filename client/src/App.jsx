import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AirbnbNavbar from './components/Navbar/Navbar';
import IconMenu from './components/IconMenu/IconMenu';
import CardComponent from './components/Card/Card';
import Catalog from './pages/Catalog';
import Footer from './components/Footer/footer';
import Footer2 from './components/Footer/Footer2';
import AirbnbLogin from './pages/Login';
import AirbnbSignup from './pages/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import UpComing from './pages/UpComing';

function App() {
  return (
    <BrowserRouter>
      <AirbnbNavbar />

      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/login" element={<AirbnbLogin />} />
        <Route path="/signup" element={<AirbnbSignup />} />
        <Route path="*" element={<UpComing />} />
      </Routes>
      <Footer />
      <Footer2 />
    </BrowserRouter>
  );
}

export default App;
