
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPyVOSxoekyQSWhvHOJdaAiJAZbd9hvZ8",
  authDomain: "new-project-1c4ba.firebaseapp.com",
  projectId: "new-project-1c4ba",
  storageBucket: "new-project-1c4ba.appspot.com",
  messagingSenderId: "523118668751",
  appId: "1:523118668751:web:517219c3932b5e1f85c0ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

