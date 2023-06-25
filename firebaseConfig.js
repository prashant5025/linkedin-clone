// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHq_K7YEO4g7gVf2Q96qwQPCP0JY48aRc",
  authDomain: "linkedin-clone-666c3.firebaseapp.com",
  projectId: "linkedin-clone-666c3",
  storageBucket: "linkedin-clone-666c3.appspot.com",
  messagingSenderId: "542940834377",
  appId: "1:542940834377:web:a89c66e18b2997cfefed98",
  measurementId: "G-B0YQ3SPMKT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);