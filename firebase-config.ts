// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqUeR6FI9oGBkR444PLs6TsaWq93AdxbE",
  authDomain: "authentication-f3996.firebaseapp.com",
  projectId: "authentication-f3996",
  storageBucket: "authentication-f3996.appspot.com",
  messagingSenderId: "427027208645",
  appId: "1:427027208645:web:90c4cf6e077f39ff7b93ac",
  measurementId: "G-Z614RX40Z5",
};

// https://authentication-f3996.firebaseapp.com/__/auth/handler

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleprovider = new GoogleAuthProvider();
export const twitterprovider = new TwitterAuthProvider();
export const facebookprovider = new FacebookAuthProvider();
// facebookProvider.addScope("email");
