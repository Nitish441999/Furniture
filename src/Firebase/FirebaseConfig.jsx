// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxFqULVs2j51dEWiuxOPjfVtlyfiTC9hw",
  authDomain: "furniture-13957.firebaseapp.com",
  projectId: "furniture-13957",
  storageBucket: "furniture-13957.appspot.com",
  messagingSenderId: "400766853856",
  appId: "1:400766853856:web:580c3b6e4c90ffcceb6685"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }