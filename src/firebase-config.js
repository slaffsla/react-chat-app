// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjxth98QKNY3N5_IpneyJW3GVf96uzKkQ",
  authDomain: "cool-chat-app-ddee0.firebaseapp.com",
  projectId: "cool-chat-app-ddee0",
  storageBucket: "cool-chat-app-ddee0.appspot.com",
  messagingSenderId: "947739135805",
  appId: "1:947739135805:web:73e01b0ba26cd4832c3f54",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
