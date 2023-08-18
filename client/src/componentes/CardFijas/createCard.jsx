function createCard(producto) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <h2>${producto.title}</h2>
      <p>${producto.description}</p>
    `;
    return card;
  }
  