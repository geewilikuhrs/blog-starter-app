import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBYwV9cMBE3tG3lHjS2-Dk6_CGLIlbShbI",
    authDomain: "blog-e2981.firebaseapp.com",
    projectId: "blog-e2981",
    storageBucket: "blog-e2981.appspot.com",
    messagingSenderId: "299145721441",
    appId: "1:299145721441:web:92bcd12389e7803a881c20"
  };

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)