import { lazy, Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import useFirebaseContext from '../Context/Firebase/useFirebaseContext'

import Loader from '../Components/Loader'
const Dashboard = lazy(() => import('../Pages/Dashboard'))
const Login = lazy(() => import('../Components/Auth/Login'))

export default function Router() {
  const { user, isPending } = useFirebaseContext()

  if (isPending) {
    return <Loader />
  }

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={user ? <Dashboard /> : <Login />} />
        <Route
          path="*"
          element={
            <Navigate
              state={{ message: 'Sorry, non-existing page!' }}
              to="/"
              replace
            />
          }
        />
      </Routes>
    </Suspense>
  )
}
