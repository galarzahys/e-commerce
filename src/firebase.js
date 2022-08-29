// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3wiAfm0wDIcdobT4_UNysKWVbresk9YA",
  authDomain: "my-e-commerce-gg.firebaseapp.com",
  projectId: "my-e-commerce-gg",
  storageBucket: "my-e-commerce-gg.appspot.com",
  messagingSenderId: "197219022731",
  appId: "1:197219022731:web:3806498591c3b09328a18e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);