import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJ9rHmFR_RIL45ExZ8zc3X27-JeUZ4MzY",
  authDomain: "pref-quiz.firebaseapp.com",
  projectId: "pref-quiz",
  storageBucket: "pref-quiz.appspot.com",
  messagingSenderId: "523203994585",
  appId: "1:523203994585:web:2e1ae347626f1dc63d6fc8",
  measurementId: "G-EZ20ZGV162",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
