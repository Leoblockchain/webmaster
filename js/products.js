// "BASE DE DATOS"

// const coins = [
//   {name: 'bitcoin', price: 30000, img: 'https://s2.coinmarketcap.com/static/img/coins/200x200/1.png'},
//   {name: 'ethereum', price: 3000, img: 'https://www.spectre.ai/assets/images/assets/ETH-logo.png?v=2.13'},
//   {name: 'solana', price: 30, img: 'https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422'},
//   {name: 'terra', price: 10, img: 'https://s2.coinmarketcap.com/static/img/coins/200x200/4172.png'},
// ]

// OBTENEMOS EL CONTENEDOR

// const productsContainer = document.querySelector('.productsContainer');

// CARDS

// coins.forEach(coin => {

//   const card = document.createElement('div'); // creo div que va a ser una card

//   card.classList.add('card', 'col-3'); // agrego clases de bootstrap

//   card.innerHTML = `

//     <img src=${coin.img} class="card-img-top" alt="${coin.name} logo">

//     <div class="card-body">

//       <h5 class="card-title">${coin.name}</h5>

//       <p class="card-text text-success">${coin.price} USD</p>
      
//       <a href="#" class="btn btn-primary">Buy</a>

//     </div>

//   `; // armo estructura interior de cada card

//   productsContainer.append(card); //agrego card al contenedor

// });