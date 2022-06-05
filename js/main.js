/* 

  Pedir al usuario un numero y mostrar todos los numeros pares que tiene antes por consola, 
  incluyendo al propio numero ingresado por el usuario.

*/

// let userInput = parseInt(prompt('ingrese un numero entero'));

// for (let i = 0; i <= userInput; i++) {
  
//   if (i % 2 === 0) console.log(i);
  
// }



// Pedir al usuario la clave y pedirsela hasta que ingrese la correcta. La clave es "abrete sesamo".

// const password = 'abrete sesamo';

// let userResponse = prompt('ingrese la clave si desea pasar');

// while (userResponse !== password) {

//   userResponse = prompt('clave incorrecta, vuelva a ingresar');

// }



/* 
  Vamos a jugar a las adivinanzas. El usuario tiene maximo 3 oportunidades para acertar. Pidele que ingrese un color,
  si es igual a "turquesa", gana! Si no, le restas 1 oportunidad. Al llegar a 0 oportunidades, pierde el juego.
*/

// let attempts = 3;

// let won = false;

// do {

//   let userInput = prompt('estoy pensando en un color, cual es?'); 

//   if (userInput === 'turquesa') {

//     console.log('correcto!');

//     won = true;

//   }
//   else {

//     attempts--;

//   }

//   if (attempts === 0) console.log('lo siento, perdiste!');

// } while (attempts > 0 && won === false);