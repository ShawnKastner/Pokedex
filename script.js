let currentPokemon;

async function loadPokemon() {
    let url = `https://pokeapi.co/api/v2/pokemon/charmander`;
    let response = await fetch(url);
    let currentPokemon = await response.json();
    console.log('Loaded Pokemon', currentPokemon);

    renderPokemonInfo(currentPokemon);
}

function renderPokemonInfo(currentPokemon) {
    document.getElementById('pokemonName').innerHTML = currentPokemon['name'];
    document.getElementById('pokemonImg').src = currentPokemon['sprites']['other']['home']['front_default'];
}
