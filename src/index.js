// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq6JioMd-i9FHhyl1blnRem5dNiUmMihk",
  authDomain: "lab-2-authentication.firebaseapp.com",
  projectId: "lab-2-authentication",
  storageBucket: "lab-2-authentication.appspot.com",
  messagingSenderId: "833409540801",
  appId: "1:833409540801:web:5257a8e3384dce9091aa40",
  measurementId: "G-DD8K624MDD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)

const googleSignInBtn = document.querySelector('.google-sign-in');
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

googleSignInBtn.addEventListener('click', () => {
  signInWithPopup(auth, provider).then((result) => {
    const user = result.user;
    alert(`Hello ${user.displayName}!`);

  }).catch((error) => {
    const errorMessage = error.message;
    alert(`Error: ${errorMessage}`);
  });

});