// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { fireStore } from "firebase/firestore";
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCagpm3nhH7_bVWIJGXWztgiIUIC-WDKRM",
  authDomain: "fir-auth-32861.firebaseapp.com",
  projectId: "fir-auth-32861",
  storageBucket: "fir-auth-32861.appspot.com",
  messagingSenderId: "114621275198",
  appId: "1:114621275198:web:5d596f55c145daec06056f",
};

let app;
if (firebase.app.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
export { auth };
// Initialize Firebase

// export const FIREBASE_APP = initializeApp(firebaseConfig);
// export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
