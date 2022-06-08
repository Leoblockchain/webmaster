// SIN OBJETOS

// let userName = 'pepito';

// let userAge = 25;

// let userMail = 'pepito@gmail.com';

// CON OBJETOS

// const user = {name: 'pepito', age: 25, mail: 'pepito@gmail.com', isAlive: true} // Objeto literal

// console.log(user);



// ACCEDER A PROPIEDADES

// console.log(user.name); //pepito

// console.log(user.age); // 25

// console.log(user.mail); // pepito@gmail.com

// console.log(user.isAlive); // false

// La sintaxis es -> objeto.propiedad


// ASIGNAR NUEVOS VALORES A PROPIEDADES

// user.name = 'maria';

// // console.log(user.name);

// user.age = 105;

// // console.log(user.age);

// if (user.age > 100) {

//   user.isAlive = false;
  
// }

// console.log(user.isAlive);



// CLASES

// class User { // PascalCase

//   constructor(name, age, mail, isAlive) {

//     this.name = name;

//     this.age = age;

//     this.mail = mail;

//     this.isAlive = isAlive;

//   }

// }


// const newUser = new User('homero', 40, 'homero@gmail.com', true);

// console.log(newUser);

// const newUserB = new User('luis', 50, 'luis@gmail.com', true);

// console.log(newUserB.isAlive);

// newUser.age = 50;

// console.log('la nueva edad es: ' + newUser.age);


// class Gato {

//   constructor(color, edad, nombre) {

//     this.color = color;

//     this.edad = edad;

//     this.nombre = nombre;

//   }

//   maullar() {

//     console.log('miau');

//   }  

// }

// const newGato = new Gato('blanco', 2, 'elmichi');


/* 

  Importante acerca de las clases❗

    🔹 Se escriben con PascalCase.
    🔹 Sus nombres suelen estar en singular.

*/



// METODOS

// class Product {

//   constructor(name, price, stock) {

//     this.name = name;

//     this.price = price;

//     this.stock = stock;

//   }

//   handleStock(cantidad) {

//     this.stock = this.stock - cantidad;

//     return this.stock;

//   }

//   changePrice(newPrice) {

//     this.price = newPrice;

//     return this.price;

//   }

//   calcularIva() {

//     return this.price*1.21;
    
//   }

// }

// const iphone = new Product('iphone', 1000, 10);

// console.log(iphone.stock);


// Un usuario realizo una compra

// let cantidad = iphone.handleStock(3);

// console.log(cantidad);

// console.log(iphone.changePrice(2000));

// Nomenclatura: objeto.metodo()

// console.log(iphone.stock);

// ERROR COMUN

// iphone.handleStock(); // No podemos usar un metodo sin primero hacer referencia a un objeto que lo pueda utilizar❌


/* 

  Importante de los metodos❗

    🔹No son exactamente lo mismo que una funcion.
    🔹Se escriben con camelCase.
    🔹Tienen que ser utiles para el contexto de la clase.

*/



// METODOS UTILES PARA ARRAYS


// find

// const products = [
//   {name: 'iphone', price: 1000},
//   {name: 'xiaomi', price: 500},
//   {name: 'motorola', price: 600},
//   {name: 'samsung', price: 800}
// ]

// const iphone = products.find(product => product.name === 'samsung');

// console.log(iphone);

// const numeros = [1,2,3,4,5]

// let numeroTres = numeros.find(numero => numero === 3);

// console.log(numeroTres);

// const xiaomi = products.find(product => product.price === 500);

// console.log(xiaomi);


// filter

// const menosDeMil = products.filter(product => product.price < 200);

// console.log(menosDeMil);

// const menosDeMil = products.filter(product => product.price === 1200);

// console.log(menosDeMil);

// const argentinos = usuarios.filter(usuario => usuario.nacionalidad === 'argentina' && usuario.edad < 25);


// map

// const arrayConInflacion = products.map(product => { // :(

//   return {name: product.name, price: product.price*1.50}

// });

// console.log(arrayConInflacion);

// const names = products.map(product => product.name);

// console.log(names);

// const newPrices = products.map(product => {

//   return {name: product.name, price: product.price*1.50}

// });

// console.log(newPrices);