import React, { useContext } from 'react';
import { FirebaseContext } from './FirebaseContext';
export default function useFirebaseContext() {
  // { user, register, login, logout }
  const firebaseData = useContext(FirebaseContext);

  return { ...firebaseData };
}
