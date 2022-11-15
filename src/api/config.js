import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyACF1FWWAHbiM3a-w8mdye2jiPny5Nf93A",
    authDomain: "praline-45663.firebaseapp.com",
    projectId: "praline-45663",
    storageBucket: "praline-45663.appspot.com",
    messagingSenderId: "644834333873",
    appId: "1:644834333873:web:6bf85102787b97d005fe90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Firestore 
export const db = getFirestore (app);