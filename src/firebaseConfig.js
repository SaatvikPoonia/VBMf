import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAri65gL_u7YoLwMcqJmqJGNe9YLQWH1bY",
  authDomain: "vishnubuildingmaterial-c9f93.firebaseapp.com",
  projectId: "vishnubuildingmaterial-c9f93",
  storageBucket: "vishnubuildingmaterial-c9f93.firebasestorage.app",
  messagingSenderId: "943425813308",
  appId: "1:943425813308:web:70ca6c101b0c9b62397c39",
  measurementId: "G-EJ9FTCWL8N"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);