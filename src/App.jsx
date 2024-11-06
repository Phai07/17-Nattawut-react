import { useState } from 'react'
import './App.css'


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home  from './pages/Home';
import Owner from './pages/Owner';

export default function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/owner" element={<Owner />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
