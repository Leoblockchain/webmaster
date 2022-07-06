import { signIn } from "./firebase.js";

const signUpForm = document.querySelector('.signUpForm');

const email = document.querySelector('.email');

const password = document.querySelector('.password');

const message = document.querySelector('.message');

export const signUpEvent = () => {
  
  signUpForm.addEventListener('submit', (e) => {
    
    e.preventDefault();

    const userMail = email.value;

    const userPassword = password.value;

    signIn(userMail, userPassword);

  });

}