// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7ubk3TkI_P38BnMYzbolhqH2ZtyFZjss",
  authDomain: "job-box-1.firebaseapp.com",
  projectId: "job-box-1",
  storageBucket: "job-box-1.firebasestorage.app",
  messagingSenderId: "648310023818",
  appId: "1:648310023818:web:4b62930f35a5fd0f6aaf73",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
