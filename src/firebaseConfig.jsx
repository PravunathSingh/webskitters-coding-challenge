import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAidHibHTwApADzrJKwHO9lhgDfdtBefB0',
  authDomain: 'products-80837.firebaseapp.com',
  projectId: 'products-80837',
  storageBucket: 'products-80837.appspot.com',
  messagingSenderId: '348579758719',
  appId: '1:348579758719:web:d8b69a6d987c22a4ab754a',
  measurementId: 'G-DWDV50L33L',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
