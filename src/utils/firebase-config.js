import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAjAfuXwW6EaDf-fi-6LkhpzmHpucpWv0Y",
  authDomain: "pageblox-server-4c58a.firebaseapp.com",
  projectId: "pageblox-server-4c58a",
  storageBucket: "pageblox-server-4c58a.appspot.com",
  messagingSenderId: "624958838328",
  appId: "1:624958838328:web:e1d3736fee2fd49b6538cd",
  measurementId: "G-TS0MBHV5RX"
}


// Initialize Firebase

const app = initializeApp(firebaseConfig)
export const database = getFirestore(app)
export const auth = getAuth(app)