import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ClientManagement } from './components/ClientManagement/ClientManagement';
import { Dashboard } from './components/Dashboard/Dashboard';
import Home from './components/Home';
import { Nav } from './components/Nav';
import { Signin } from './components/Signin';
import { Signup } from './components/Signup';
import { CreateTasks } from './components/Tasks/CreateTasks';
import { TasksPage } from './components/Tasks/TasksPage';
import { TeamManagement } from './components/TeamManagement/TeamManagement';
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <>
    <UserProvider>
      <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/teams" element={<TeamManagement />} />
      <Route path="/clients" element={<ClientManagement />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/tasks" element={<TasksPage />} />
      <Route path="/create" element={<CreateTasks />} />
    </Routes>
    </UserProvider>
    <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
    
  );
}

export default App;
