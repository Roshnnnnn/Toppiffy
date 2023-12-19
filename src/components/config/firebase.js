import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtLjcBuhWqSjt7HUEOe1p1a91gRBTi4kE",
  authDomain: "chocokart-ee033.firebaseapp.com",
  projectId: "chocokart-ee033",
  storageBucket: "chocokart-ee033.appspot.com",
  messagingSenderId: "832109864732",
  appId: "1:832109864732:web:e1e7089f8f4caa2482fcd9",
  measurementId: "G-016L7KVFMV",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
