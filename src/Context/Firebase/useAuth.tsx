import React, { useState, useCallback } from 'react';
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { FirebaseApp } from '@firebase/app';

export default function useAuth(app: FirebaseApp) {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [user, setUser] = useState({});

  const googleLogin = useCallback(async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(res);
      const token = credential?.accessToken;
      const user = res.user;
      setUser(user);
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
        setUser(user);
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
        console.log('eve me pokrecem se komso');
        const user = userCredential.user;
        setUser(user);
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
      setUser({});
      console.log('logged out! ', res);
    } catch (e) {
      console.log('Problem with logging out! ', e);
    }
  }, [setUser]);

  return { user, register, login, logout, googleLogin };
}
