import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js";
import { errorMessage, successMessage } from "./handleSignIn.js";


const firebaseConfig = {
  apiKey: "AIzaSyAr5Q6XkY3dlus7-bVQqDhAcy81Ouy_iZg",
  authDomain: "fir-webmaster.firebaseapp.com",
  projectId: "fir-webmaster",
  storageBucket: "fir-webmaster.appspot.com",
  messagingSenderId: "796596340293",
  appId: "1:796596340293:web:490c94a5334d04a841852c"
}

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const createUser = async (email, password) => {

  try {
    
    const response = await createUserWithEmailAndPassword(auth, email, password);
  
    console.log(response.user);

  } catch (error) {
    
    console.log(error.message);

  }

}

const signIn = async (email, password) => {

  try {
    
    const response = await signInWithEmailAndPassword(auth, email, password);

    successMessage();
    
  } catch (error) {
    
    errorMessage();

  }

}

export { createUser, signIn }