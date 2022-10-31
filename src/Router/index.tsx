import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import Login from '../Components/Auth/Login';
import Register from '../Components/Auth/Register';

export default function Router() {
  // TODO:
  // - Create hook for mode switch
  // - Create hook for global state so that we can implement redirection with framer motion
  // - Create Global Context + React Query or Zustand Store + React Query
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Route>
      <Route path='*' element={<Home />} />
    </Routes>
  );
}
