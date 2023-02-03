import React, { useState, useCallback, useId } from 'react';

import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from 'firebase/firestore/lite';

import { IText } from 'src/interfaces/texts';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_APP_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_FIREBASE_SENDER_ID,
  appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_APP_MEASUREMENT_ID,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const db = getFirestore(app);
// Initialize Analytics
// const analytics = getAnalytics(app);

export default function useDb() {
  const [texts, setTexts] = useState<IText[] | unknown>([]);

  const textsCollection = collection(db, 'texts');
  // Get all texts
  const getTexts = useCallback(async () => {
    const textsSnapshot = await getDocs(textsCollection);
    const textsList = textsSnapshot.docs.map((doc) => doc.data());
    setTexts(textsList);
  }, [setTexts]);

  // TODO: Test the function and work on the the update function because the text needs to be onChange
  const addNewText = useCallback(
    async (name: string, body: string, userId: string) => {
      const id = useId();
      try {
        await addDoc(textsCollection, {
          body: body,
          created: {
            seconds: Math.round(Date.now() / 1000),
            nanoseconds: Math.round(Date.now() / 1000000),
          },
          id: id,
          last_edited: {
            seconds: Math.round(Date.now() / 1000),
            nanoseconds: Math.round(Date.now() / 1000000),
          },
          name: name,
          rhymes: [],
          searches: [],
          user_id: userId,
          whole: body,
        });
        console.log('New text added!');
      } catch (error) {
        console.log('Error with adding a new text: ', error);
      }
    },
    []
  );

  return { app, db, getTexts, texts, addNewText };
}
