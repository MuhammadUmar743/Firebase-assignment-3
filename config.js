 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
  import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
  import { getFirestore , setDoc , doc } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAtphqxu0c4NYvs9RwlxlYL7iGooKUoJ5I",
    authDomain: "signup-or-login-11148.firebaseapp.com",
    projectId: "signup-or-login-11148",
    storageBucket: "signup-or-login-11148.firebasestorage.app",
    messagingSenderId: "636777654043",
    appId: "1:636777654043:web:1a6a63dd085e07fe0f55be",
    measurementId: "G-9Z7ZDG1FCW"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  // Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export{
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    setDoc,
    doc,
    db
}