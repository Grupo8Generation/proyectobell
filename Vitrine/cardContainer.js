// cardContainer.js

const cardContainer = document.getElementById('card-container');

function createCard(producto) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <h2>${producto.title}</h2>
    <p>${producto.description}</p>
  `;
  return card;
}

// Hacer una solicitud al servidor para obtener los datos de la base de datos
fetch('/products')
  .then(response => response.json())
  .then(data => {
    // Iterar sobre los datos y crear tarjetas para cada producto
    data.forEach(producto => {
      const card = createCard(producto);
      cardContainer.appendChild(card); // Agregar la tarjeta al contenedor
    });
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
  });
