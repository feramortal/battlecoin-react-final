import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6pJgvtuN5CW3UbyR18W3nHd_umJIvs7o",
  authDomain: "battlecoin-a4e81.firebaseapp.com",
  projectId: "battlecoin-a4e81",
  storageBucket: "battlecoin-a4e81.firebasestorage.app",
  messagingSenderId: "297621227692",
  appId: "1:297621227692:web:1acf82b6750fbac582f709",
  measurementId: "G-Q6ET9R0M2K"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);