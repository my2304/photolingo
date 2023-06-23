// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIa4TjczeC7Wct6IuNPPMdahc6Fz3z5E0",
  authDomain: "photolingo-a42ca.firebaseapp.com",
  projectId: "photolingo-a42ca",
  storageBucket: "photolingo-a42ca.appspot.com",
  messagingSenderId: "584232915712",
  appId: "1:584232915712:web:2673b6211800302ba899e5"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

const handleSignUp = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("Registered with", user.email);
    } catch (error) {
      alert(error.message);
    }
   };


const handleLogin = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("Logged in with", user.email);
    } catch (error) {
      alert(error.message);
    }
   };
  

export{auth, handleSignUp, handleLogin};
