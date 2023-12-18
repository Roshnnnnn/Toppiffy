import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvtyePIQOaon4Xdtj6EJdQfGUGg3oOWEU",
  authDomain: "chococart-5c595.firebaseapp.com",
  projectId: "chococart-5c595",
  storageBucket: "chococart-5c595.appspot.com",
  messagingSenderId: "544097057159",
  appId: "1:544097057159:web:4c992cec0aa2814d667b22",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
