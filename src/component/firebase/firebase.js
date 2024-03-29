// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWtNrdXnsbwYKD3iAlUvFHPoypuZlCA3c",
  authDomain: "meesho-cbd2d.firebaseapp.com",
  projectId: "meesho-cbd2d",
  storageBucket: "meesho-cbd2d.appspot.com",
  messagingSenderId: "824095208772",
  appId: "1:824095208772:web:dea7e76d2784f683ee9311",
  measurementId: "G-7JF2MMYP3W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const logInWithEmailAndPassword = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.log(err);
  }
};
const registerWithEmailAndPassword = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    return res;
  } catch (err) {
    console.log(err);
    // return err;
  }
};

export { db, logInWithEmailAndPassword, registerWithEmailAndPassword };
