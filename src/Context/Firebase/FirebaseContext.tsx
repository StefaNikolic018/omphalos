import React, { createContext, ReactNode } from 'react';
import useAuth from './useAuth';
import useDb from './useDb';
// Import the functions you need from the SDKs you need

export const FirebaseContext = createContext<any>({
  user: false,
  login: async () => { },
  register: async () => { },
  logout: async () => { },
  googleLogin: async () => { },
});

export default function FirebaseContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { app, texts, getTexts, db } = useDb();
  const { user, register, login, logout, googleLogin } = useAuth(app);

  return (
    <FirebaseContext.Provider
      value={{ user, login, register, logout, getTexts, texts, googleLogin }}
    >
      {children}
    </FirebaseContext.Provider>
  );
}
