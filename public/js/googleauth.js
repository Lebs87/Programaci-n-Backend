import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js'
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "https:/www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpL1_8wSbJNdxX4m7K8MKFYK5WRDB1STE",
  authDomain: "backend-pf2.firebaseapp.com",
  databaseURL: "https://backend-pf2-default-rtdb.firebaseio.com",
  projectId: "backend-pf2",
  storageBucket: "backend-pf2.appspot.com",
  messagingSenderId: "748751061552",
  appId: "1:748751061552:web:93a781525c76df65ec63f5"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth()
const provider = new GoogleAuthProvider()

export const authModule = { auth, provider, signInWithPopup, onAuthStateChanged }
