// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey:import.meta.env.VITE_apiKey ,
  // authDomain:import.meta.env.VITE_authDomain ,
  // projectId:import.meta.env.VITE_projectId ,
  // storageBucket:import.meta.env.VITE_storageBucket ,
  // messagingSenderId:import.meta.env.VITE_messagingSenderId,
  // appId:import.meta.env.VITE_appId 
  
  apiKey: "AIzaSyBe2-2dleV1fnQgg-TaiscmGGKPGBkodnU",
  authDomain: "assignment-11-client-24c0e.firebaseapp.com",
  projectId: "assignment-11-client-24c0e",
  storageBucket: "assignment-11-client-24c0e.appspot.com",
  messagingSenderId: "528545233733",
  appId: "1:528545233733:web:1a815d9808ac071adf9c2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;