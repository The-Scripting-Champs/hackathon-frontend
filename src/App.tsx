import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { Signin } from './components/Signin';
import { Signup } from './components/Signup';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
