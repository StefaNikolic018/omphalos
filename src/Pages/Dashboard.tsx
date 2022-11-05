import React from 'react'
import useFirebaseContext from '../Context/Firebase/useFirebaseContext'

export default function Dashboard() {
  // TODO: 
  // 1. Create register page, think of image or things like that
  // 2. Think of removing email and password login, and also register if that's the case
  // 3. Fix the UI
  // 4. Refactor code and types
  // 5. 
  const { user } = useFirebaseContext();
  console.log(user);
  return (
    <div>
      dashboard bro
    </div>
  )
}
