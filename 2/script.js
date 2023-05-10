async function fetchPokemonList() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
  const data = await response.json();
  return data.results;
  }
  
  async function fetchPokemonDetails(url) {
    const response = await fetch(url);
    return await response.json();
  }
  
  function createPokemonCard(pokemonData) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('col-md-4', 'mb-6', `g-6`);
  
    const card = document.createElement('div');
    card.classList.add('card', 'h-100');
    cardDiv.appendChild(card);
  
    const cardImg = document.createElement('img');
    cardImg.classList.add('card-img-top');
    cardImg.src = pokemonData.sprites.other.home.front_default;
    card.appendChild(cardImg);
  
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    card.appendChild(cardBody);
  
    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = pokemonData.name;
    cardBody.appendChild(cardTitle);
  

  
    return cardDiv;
  }
  
  function showPokemonList() {
    const pokemonList = document.querySelector('#pokemon-list');
    fetchPokemonList()
      .then(pokemonArray => {
        for (let i = 0; i < pokemonArray.length; i++) {
          const pokemonUrl = pokemonArray[i].url;
          fetchPokemonDetails(pokemonUrl)
            .then(pokemonData => {
              const card = createPokemonCard(pokemonData);
              pokemonList.appendChild(card);
            });
        }
      })
      .catch(error => console.error(error));
  }
  



  showPokemonList();