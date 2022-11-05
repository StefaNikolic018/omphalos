import React from 'react'
import useFirebaseContext from '../Context/Firebase/useFirebaseContext'

export default function Dashboard() {
  // TODO: 
  // 5. Install toastify and implement it when someone tries to access protected routes or login when logged in
  // 1. Create register page, think of image or things like that
  // 2. Think of removing email and password login, and also register if that's the case
  // 3. Fix the UI
  // 4. Refactor code and types
  const { user } = useFirebaseContext();
  return (
    <div>
      dashboard bro
    </div>
  )
}
