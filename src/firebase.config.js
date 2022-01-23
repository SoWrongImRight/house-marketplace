// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi1q5M_jyedXqUk7ztS3HUC9ZtS3wYsYQ",
  authDomain: "house-marketplace-app-746a7.firebaseapp.com",
  projectId: "house-marketplace-app-746a7",
  storageBucket: "house-marketplace-app-746a7.appspot.com",
  messagingSenderId: "331253750682",
  appId: "1:331253750682:web:057c1cf5cf238b6510b823"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()