// DOM

// console.log(document);




// ACCESO AL DOM


// ID

// const mainTitle = document.getElementById('mainTitle');

// console.log(mainTitle);

/* 

  IMPORTANTE ❗

  - No escribimos el numeral -> # ❌

  - Devuelve un unico elemento.

*/


// CLASS

// const boxes = document.getElementsByClassName('box');

// console.log(boxes);

/* 

  IMPORTANTE ❗

  - No escribimos el punto -> . ❌

  - Devuelve varios elementos.

  - Devuelve un HTMLCollection, algo parecido a un array, pero no es exactamente uno.

*/

// POR QUE ES IMPORTANTE SABER QUE DEVUELVE UN HTMLCOLLECTION Y NO UN ARRAY?

// boxes.forEach(box => console.log(box)); //❌


// for (const box of boxes) { // ✅
  
//   console.log(box);

// }


// TAG

// const divs = document.getElementsByTagName('div');

// console.log(divs);

/* 

  IMPORTANTE ❗

  - No escribimos <> -> <div> ❌

  - Devuelve varios elementos.

  - Tambien devuelve un HTMLCollection.

*/


// QUERY SELECTOR

// Un unico elemento

// const mainTitle = document.querySelector('#mainTitle');

// console.log(mainTitle);

// const boxes = document.querySelector('.box');

// console.log(boxes);

// Varios elementos

// const boxes = document.querySelectorAll('.box');

// console.log(boxes);

/* 

  IMPORTANTE ❗

  - Con querySelector si escribimos numeral si es un id y punto si es una clase. 

  - querySelector devuelve un solo elemento sin importar si es id, clase o tag.

  - querySelectorAll devuelve todas las coincidencias.

  - En el caso de querySelectorAll, devuelve una NodeList, algo como un array, pero tampoco es un array.

*/

// POR QUE ES IMPORTANTE SABER QUE DEVUELVE UNA NODELIST Y NO UN ARRAY?

// boxes.push('holi'); // ❌




// MODIFICAR DOM


// innerHTML

// const header = document.querySelector('header');

// console.log(header.innerHTML);

// const main = document.querySelector('main');

// console.log(main.innerHTML);

// innerText

// const mainTitle = document.getElementById('mainTitle');

// console.log(mainTitle.innerText);




// CREAR ELEMENTOS DESDE JS Y AGREGARLOS AL DOM

// const newBox = document.createElement('div'); // creamos un nuevo div

// newBox.classList.add('newBox'); // le agregamos la clase newBox

// const main = document.querySelector('main');

// main.append(newBox); // agregamos el nuevo div al DOM




// ELIMINAR ELEMENTOS DEL DOM DESDE JS


// Un elemento en especifico

// const mainTitle = document.getElementById('mainTitle');

// mainTitle.remove();


// Vaciar por completo un nodo

// const main = document.querySelector('main');

// main.innerHTML = '';




// VALORES DE INPUTS

// document.getElementById('inputPrueba').value = 'holi';

// document.getElementById('areaPrueba').value = 'hello from JS';