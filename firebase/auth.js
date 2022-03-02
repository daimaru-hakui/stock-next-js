import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyATfUAWiAAxU6DG8lSQK-EX2gupAK3shSY",
  authDomain: "daimaru-zaiko.firebaseapp.com",
  projectId: "daimaru-zaiko",
  storageBucket: "daimaru-zaiko.appspot.com",
  messagingSenderId: "357276759173",
  appId: "1:357276759173:web:a1c087155c53fcc1c325ec"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
