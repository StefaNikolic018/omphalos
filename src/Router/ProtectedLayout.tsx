import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useFirebaseContext from '../Context/Firebase/useFirebaseContext'

export default function ProtectedLayout({ redirectPath = '/login', children, isUser }: any) {
    const { user } = useFirebaseContext()
    const condition = isUser ? user : !user;
    return condition ? children ? children : <Outlet /> : <Navigate state={{ message: isUser ? 'You need to login to do that!' : "You are alerady logged in!" }} to={redirectPath} replace />
}
