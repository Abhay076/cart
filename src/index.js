import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyDQjDimQgU6yarGL2xM6L6dMzjjepJelU8",
    authDomain: "cart-ed5a9.firebaseapp.com",
    projectId: "cart-ed5a9",
    storageBucket: "cart-ed5a9.appspot.com",
    messagingSenderId: "403265534600",
    appId: "1:403265534600:web:be0b1c77da90daefaabd3d"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
ReactDOM.render(<App />, document.getElementById('root'));
