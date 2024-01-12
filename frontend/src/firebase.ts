import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCGuzarhYaxVW9SFkN5JYh4nSSJXBqMm1g",
  authDomain: "fir-team-alcohol.firebaseapp.com",
  projectId: "fir-team-alcohol",
  storageBucket: "fir-team-alcohol.appspot.com",
  messagingSenderId: "276709586083",
  appId: "1:276709586083:web:5d710db104f39bef523b16",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getStorage(app);
