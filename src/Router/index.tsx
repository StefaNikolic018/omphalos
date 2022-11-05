import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../Components/Auth/Login';

import Register from '../Components/Auth/Register';
import Dashboard from '../Pages/Dashboard';
import ProtectedLayout from './ProtectedLayout';

export default function Router() {
  // TODO:
  // - Create hook for mode switch
  // - Create hook for global state so that we can implement redirection with framer motion
  // - Create Global Context + React Query or Zustand Store + React Query
  return (
    <Routes>
      <Route path='/' element={<ProtectedLayout isUser={true} />}>
        <Route path='dashboard' element={<Dashboard />} />
      </Route>
      <Route path='/' element={<ProtectedLayout isUser={false} redirectPath="/dashboard" />}>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Route>

      <Route path='*' element={<ProtectedLayout isUser={true} />}>
        <Route path='dashboard' element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
