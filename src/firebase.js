// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/compat/app";
import { getAnalytics } from "firebase/compat/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2s_OZ5KSKaR7hEGEi_CmUXUobOOOKXFw",
  authDomain: "todo-list-react-455c5.firebaseapp.com",
  projectId: "todo-list-react-455c5",
  storageBucket: "todo-list-react-455c5.appspot.com",
  messagingSenderId: "294986677795",
  appId: "1:294986677795:web:a0486917cec5c91d8e7b96",
  measurementId: "G-QCE0C914NK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);