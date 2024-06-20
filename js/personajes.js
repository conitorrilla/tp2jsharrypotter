document.addEventListener("DOMContentLoaded", function() {
  const apiUrl = "https://hp-api.onrender.com/api/characters";

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data); // Verifica los datos en la consola

      // Lógica para mostrar los personajes en la página
      const charactersSection = document.querySelector('.characters .grid');

      data.forEach(character => {
        // Crea un elemento div para cada personaje
        const characterCard = document.createElement('div');
        characterCard.classList.add('card');

        // Construye el contenido de la tarjeta del personaje
        characterCard.innerHTML = `
          <img src="${character.image}" alt="${character.name}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${character.name}</h5>
            <p class="card-text">Casa: ${character.house}</p>
            <p class="card-text">Especie: ${character.species}</p>
            <p class="card-text">Actor: ${character.actor}</p>
          </div>
        `;

        // Agrega la tarjeta del personaje al contenedor de personajes
        charactersSection.appendChild(characterCard);
      });
    })
    .catch(error => console.error('Error fetching characters:', error));
});
