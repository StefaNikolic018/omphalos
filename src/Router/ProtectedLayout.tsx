import { Navigate, Outlet } from 'react-router-dom'

import Loader from '../Components/Loader'
import useFirebaseContext from '../Context/Firebase/useFirebaseContext'

export default function ProtectedLayout({ redirectPath = '/login', isUser }: any) {
    const { user, isPending } = useFirebaseContext()

    if (isPending) {
        return <Loader />
    }

    const condition = isUser ? user : !user;
    return condition ? <Outlet /> : <Navigate state={{ message: isUser ? 'You need to login to do that!' : "You are alerady logged in!" }} to={redirectPath} replace />
}
