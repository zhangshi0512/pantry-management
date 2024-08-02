import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCnFII3MMm0MmrXwQsU8lZ-OhS89iPsLE",
  authDomain: "pantry-management-d4121.firebaseapp.com",
  projectId: "pantry-management-d4121",
  storageBucket: "pantry-management-d4121.appspot.com",
  messagingSenderId: "58706071699",
  appId: "1:58706071699:web:d5daabe12ab16b2ff37d66",
  measurementId: "G-T8X4ETDBGL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, analytics };
