import React, { useState, useEffect, useCallback } from 'react';
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { FirebaseApp } from '@firebase/app';
import { useNavigate } from 'react-router-dom';



export default function useAuth(app: FirebaseApp) {
  const auth = getAuth(app);
  const navigate = useNavigate()
  const provider = new GoogleAuthProvider();

  const [user, setUser]: any = useState(false);
  const [isPending, setIsPending] = useState(true);

  const googleLogin = useCallback(async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(res);
      const token = credential?.accessToken;
      const user = res.user;
      setUser(user);
      navigate('/dashboard')
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

        const user = userCredential.user;
        console.log('eve me pokrecem se komso na gugl ', user);
        setUser(user);
        navigate('/dashboard')
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
        const user = userCredential.user;
        console.log('eve me pokrecem se komso ', user);
        setUser(user);
        navigate('/dashboard')
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
      setUser(false);
      console.log('logged out! ', res);
    } catch (e) {
      console.log('Problem with logging out! ', e);
    }
  }, [setUser]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setIsPending(false);
    })
  }
    , [])


  return { user, isPending, register, login, logout, googleLogin };
}
