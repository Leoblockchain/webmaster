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

const queryId= (idname) => document.getElementById(idname)

queryId("searchInput").addEventListener("change",(e) => {

})


export const getFindValue = async () => {

  const product = await getDocs(collection(db, "products"));

  const finds = []

  product.forEach  (product => {

    if (product.data().name === queryId("searchInput").value ) finds.push(product) ;

    
     
  })
       
    return finds;
console.log(finds)
}


export const getProducts = async () => {
  
  const querySnapshot = await getDocs(collection(db, "products"));

  return querySnapshot;

}

export const getMobiles = async () => {

  const products = await getDocs(collection(db, "products"));

  const mobiles = []

  products.forEach(product => {

    if (product.data().type === 'mobile') mobiles.push(product);

  });

  return mobiles;

}

export const getTablets = async () => {

  const products = await getDocs(collection(db, "products"));

  const tablets = []

  products.forEach(product => {

    if (product.data().type === 'tablet') tablets.push(product);

  });

  return tablets;
}

export const getNotebooks = async () => {

  const products = await getDocs(collection(db, "products"));

  const notebooks = []

  products.forEach(product => {

    if (product.data().type === 'notebook') notebooks.push(product);

  });

  return notebooks;
}

