// let userInput = parseInt(prompt('ingrese un numero'));

// for (let i = 0; i <= userInput; i++) {

//   if (i % 2 === 0) {

//     console.log(i);

//   }
  
// }

// let clave = prompt('ingrese la clave'); // abrete sesamo

// while (clave !== 'abrete sesamo') {

//   clave = prompt('clave incorrecta, reingrese de nuevo');

// }

// if (clave === 'abrete sesamo') console.log('clave correcta'); //10


let color;

let maxOportunidades = 3;

do {

  maxOportunidades--;
  
  color = prompt('ingrese un color');
  
} while ((color !== 'turquesa') && (maxOportunidades > 0));