import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from '../components/';
import { Home, Settings, Register, Login, Chat } from '../views/';

export default function App() {
  return (
    <Router>
      <NavBar />
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}
