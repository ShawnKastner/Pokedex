let currentPokemon;
let pokemonName;
let pokemonImg;
let pokemonId;
let pokemonType;
let allPokemon = [];
let start = 1;
let limit = 21;

async function loadPokemon() {
    for (let i = start; i < limit; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        let currentPokemon = await response.json();
        allPokemon.push(currentPokemon);
    }
    start += 20;
    limit += 20;
    renderPokemon();
}

function renderPokemon() {
    let content = document.getElementById('allPokemon');
    content.innerHTML = '';
    for (let i = 0; i < allPokemon.length; i++) {
        const pokemon = allPokemon[i];

        pokemonName = pokemon['name'].charAt(0).toUpperCase() + pokemon['name'].slice(1);
        pokemonImg = pokemon['sprites']['other']['home']['front_default'];
        pokemonId = pokemon['id'];
        pokemonType = pokemon['types'][0]['type']['name'];
        colorOfPokemon(pokemonType);
        content.innerHTML += renderPokemonTemplate(pokemonId, pokemonName, pokemonType, pokemonImg, i);
    }
}

function renderPokemonInfo(i) {
    document.getElementById(`showPokemon`).classList.remove('dNone');
    document.getElementById('info').classList.remove('dNone');
    document.getElementById('body').style = 'overflow: hidden';
    pokemonType = allPokemon[i]['types'][0]['type']['name'];
    document.getElementById('pokemonName').innerHTML = allPokemon[i]['name'].charAt(0).toUpperCase() + allPokemon[i]['name'].slice(1);
    document.getElementById('dialogType').innerHTML = allPokemon[i]['types'][0]['type']['name'];
    document.getElementById('dialogId').innerHTML = '#' + allPokemon[i]['id'];
    colorOfPokemon(pokemonType);
    document.getElementById('dialog').style = `background-color:${pokemonColor};`;
    document.getElementById('dialogImg').src = allPokemon[i]['sprites']['other']['home']['front_default'];
}

function renderPokemonTemplate(pokemonId, pokemonName, pokemonType, pokemonImg, i) {
    return /*html*/`
    <div onclick="renderPokemonInfo(${i})" class="card" style="background-color:${pokemonColor};">
        <div>
            <h3  class="nameIdAbsolute">#${pokemonId}</h3>
            <h2>${pokemonName}</h2>
        </div>
        <div class="typeContainer">
            <span><b>${pokemonType}</b></span>
        </div>
        <div>
            <img id="pokemonImg" src="${pokemonImg}">
        </div>
    </div>`;
}

