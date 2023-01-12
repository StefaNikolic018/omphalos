import React from 'react'
import Loader from '../Components/Loader'
import { Navigate, Outlet } from 'react-router-dom'
import useFirebaseContext from '../Context/Firebase/useFirebaseContext'

export default function ProtectedLayout({ redirectPath = '/login', children, isUser }: any) {
    const { user, isPending } = useFirebaseContext()

    if (isPending) {
        return <Loader />
    }
    const condition = isUser ? user : !user;

    return condition ? children ? children : <Outlet /> : <Navigate state={{ message: isUser ? 'You need to login first!' : "You are already logged in!" }} to={redirectPath} replace />
}