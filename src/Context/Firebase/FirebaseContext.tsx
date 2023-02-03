import React, { createContext, ReactNode } from 'react';
import { IText } from 'src/interfaces/texts';
import useAuth from './useAuth';
// Import the functions you need from the SDKs you need

type FirebaseContextType = {
  user: boolean | any;
  isPending: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  googleLogin: () => Promise<void>;
  texts: IText[] | unknown;
  addNewText: (name: string, body: string, userId: string) => Promise<void>;
};

export const FirebaseContext = createContext<FirebaseContextType>({
  user: false,
  isPending: true,
  login: async (email: string, password: string) => {},
  register: async (email: string, password: string) => {},
  logout: async () => {},
  googleLogin: async () => {},
  texts: [],
  addNewText: async (name: string, body: string, userId: string) => {},
});

export default function FirebaseContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const {
    user,
    isPending,
    texts,
    register,
    login,
    logout,
    googleLogin,
    addNewText,
  } = useAuth();

  return (
    <FirebaseContext.Provider
      value={{
        user,
        isPending,
        login,
        register,
        logout,
        googleLogin,
        texts,
        addNewText,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
}
