import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

// ✅ Your Firebase configuration (from your Firebase console)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY, // keep this environment-based
  authDomain: "freecourseswebsite.firebaseapp.com",
  projectId: "freecourseswebsite",
  storageBucket: "freecourseswebsite.firebasestorage.app",
  messagingSenderId: "711713832039",
  appId: "1:711713832039:web:8135ca8ce61b2db735e8c2",
  measurementId: "G-C3HJWXWWV1",
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
















// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDxc8iIKRYoD0RXqGq2qT49FuyhbwbGM-Y",
//   authDomain: "freecourseswebsite.firebaseapp.com",
//   projectId: "freecourseswebsite",
//   storageBucket: "freecourseswebsite.firebasestorage.app",
//   messagingSenderId: "711713832039",
//   appId: "1:711713832039:web:8135ca8ce61b2db735e8c2",
//   measurementId: "G-C3HJWXWWV1"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);