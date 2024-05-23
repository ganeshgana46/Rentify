import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import PostProperty from './components/PostProperty';
import ViewProperties from './components/ViewProperties';
import './App.css';
import Navbar from './components/Navbar';
import Logo from './components/Logo';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
        <Route path="/logo" element={<Logo />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post" element={<PostProperty />} />
          <Route path="/view" element={<ViewProperties />} />
          <Route path="/" element={<ViewProperties />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
