export const renderCards = async (products) => {

  const productsContainer = document.querySelector('.productsContainer');

  productsContainer.innerHTML = '';

  const items = await products;

  items.forEach(item => {
    
    const card = document.createElement('div');

    card.className = 'card col-3 m-3';

    card.innerHTML = `
      <img src=${item.data().image} class="card-img-top" alt=${item.data().name}>
      <div class="card-body">
        <h5 class="card-title">${item.data().name}</h5>
        <p class="card-text text-success">${item.data().price}</p>
        <a href="#" class="btn btn-dark">Buy</a>
      </div>
    `;

    productsContainer.append(card);

  });

}