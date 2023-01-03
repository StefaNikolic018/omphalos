import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loader from '../Components/Loader'
import ProtectedLayout from './ProtectedLayout';
const Dashboard = lazy(() => import('../Pages/Dashboard'));
const Login = lazy(() => import('../Components/Auth/Login'));

export default function Router() {
  return (
    <Suspense fallback={<Loader />} >
      <Routes>
        <Route path='/' element={<ProtectedLayout isUser={true} />}>
          <Route path='dashboard' element={<Dashboard />} />
        </Route>
        <Route path='/' element={<ProtectedLayout isUser={false} redirectPath="/dashboard" />}>
          <Route path='login' element={<Login />} />
        </Route>
        <Route path='*' element={<ProtectedLayout isUser={true} />}>
          <Route path='dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
