// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-i5MkcsVKB7RmG4FUP8lsFZpfFDxUKIo",
  authDomain: "airbnb-website-42057.firebaseapp.com",
  projectId: "airbnb-website-42057",
  storageBucket: "airbnb-website-42057.appspot.com",
  messagingSenderId: "181650777685",
  appId: "1:181650777685:web:86db07df98f14922a716dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;