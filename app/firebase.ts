import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

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
const db = getFirestore(app);
const auth = getAuth(app);

let analytics;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { db, auth, analytics };
