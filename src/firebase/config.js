import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjysDZaiKLoADouRKQEFmuDYH0Lowocd8",
  authDomain: "codex3-77800.firebaseapp.com",
  projectId: "codex3-77800",
  storageBucket: "codex3-77800.appspot.com",
  messagingSenderId: "1087771622045",
  appId: "1:1087771622045:web:bd9c2bfdfa96b5984e7274"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
