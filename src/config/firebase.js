import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB0M4-EmEc9O24su23ltZghshtHrycTR0g",
    authDomain: "reactcoder-f725f.firebaseapp.com",
    projectId: "reactcoder-f725f",
    storageBucket: "reactcoder-f725f.appspot.com",
    messagingSenderId: "784868488269",
    appId: "1:784868488269:web:e3c0c97386cb426c3a9804"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);