// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDI4jR9kxmcUhgGNFYdbBr9v4Dzdu08cto",
    authDomain: "eleva-7f935.firebaseapp.com",
    projectId: "eleva-7f935",
    storageBucket: "eleva-7f935.firebasestorage.app",
    messagingSenderId: "124820676391",
    appId: "1:124820676391:web:e5974d7758654d5b4fd302"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);