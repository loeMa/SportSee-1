import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/user/:id" element={<Dashboard />}></Route>
      <Route path="*"></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
