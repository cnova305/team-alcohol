import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA58iX3Ci4nV67q9cZ3hyK_mHsIYJpgLAQ",
  authDomain: "team-alcohol.firebaseapp.com",
  projectId: "team-alcohol",
  storageBucket: "team-alcohol.appspot.com",
  messagingSenderId: "76866548015",
  appId: "1:76866548015:web:ec3b66c2901b56a626f1da",
  measurementId: "G-L1P7CCKXFB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getStorage(app);
