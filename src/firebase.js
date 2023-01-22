// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAYipph1HzQ4cKcZRPpZEkSQaNgH7bz0Kw',
  authDomain: 'todo-app-firebase-ab008.firebaseapp.com',
  projectId: 'todo-app-firebase-ab008',
  storageBucket: 'todo-app-firebase-ab008.appspot.com',
  messagingSenderId: '489517998043',
  appId: '1:489517998043:web:09857a92b05ef3669fd1fe',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
