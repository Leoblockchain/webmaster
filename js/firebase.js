import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";

import { 
  getFirestore, 
  collection, 
  getDocs 
} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAr5Q6XkY3dlus7-bVQqDhAcy81Ouy_iZg",
  authDomain: "fir-webmaster.firebaseapp.com",
  projectId: "fir-webmaster",
  storageBucket: "fir-webmaster.appspot.com",
  messagingSenderId: "796596340293",
  appId: "1:796596340293:web:490c94a5334d04a841852c"
}

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const getProducts = async () => {
  
  const querySnapshot = await getDocs(collection(db, "products"));

  return querySnapshot;

}

export const getMobiles = async (id) => {

  const products = await getDocs(collection(db, "products"));

  const mobiles = []

  products.forEach(product => {

    if (product.data().type === 'mobile') mobiles.push(product);

  });

  return mobiles;

}
