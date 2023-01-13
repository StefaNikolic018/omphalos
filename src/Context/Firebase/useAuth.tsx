import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import useDb from './useDb';



export default function useAuth() {
  const { app, texts, getTexts } = useDb();
  const navigate = useNavigate()

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [user, setUser]: any = useState(false);
  const [isPending, setIsPending] = useState(true);

  const googleLogin = useCallback(async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(res);
      // const token = credential?.accessToken;
      // const user = res.user;
    } catch (e) {
      console.log('Problem with Google sign in: ', e);
    }
  }, [setUser]);

  // Register
  const register = useCallback(
    async (email: string, password: string) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        // const user = userCredential.user;
      } catch (e) {
        console.log('Problem with registration! ', e);
      }
    },
    [setUser]
  );

  // Login
  const login = useCallback(
    async (email: string, password: string) => {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        // const user = userCredential.user;
      } catch (e) {
        console.log('Problem with logging in! ', e);
      }
    },
    [setUser]
  );

  // Logout
  const logout = useCallback(async () => {
    try {
      const res = await signOut(auth);
      console.log('logged out! ', res);
    } catch (e) {
      console.log('Problem with logging out! ', e);
    }
  }, [setUser]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      getTexts();
      setIsPending(false);
    })
  }
    , [])


  return { user, isPending, texts, register, login, logout, googleLogin };
}
