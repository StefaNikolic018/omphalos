import React, { useState, useCallback } from 'react';
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
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
  // Get all texts
  const getTexts = useCallback(async () => {
    const textsCol = collection(db, 'texts');
    const textsSnapshot = await getDocs(textsCol);
    const textsList = textsSnapshot.docs.map((doc) => doc.data());
    console.log(textsList)
    setTexts(textsList);
  }, [setTexts]);

  return { app, db, getTexts, texts };
}
