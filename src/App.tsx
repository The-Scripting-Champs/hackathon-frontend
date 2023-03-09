import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ClientManagement } from './components/ClientManagement/ClientManagement';
import Home from './components/Home';
import { Signin } from './components/Signin';
import { Signup } from './components/Signup';
import { TeamManagement } from './components/TeamManagement/TeamManagement';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/teams" element={<TeamManagement />} />
      <Route path="/clients" element={<ClientManagement />} />
    </Routes>
  );
}

export default App;
