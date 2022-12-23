let currentPokemon;
let pokemonName;
let pokemonImg;
let pokemonId;
let pokemonType;
let allPokemon = [];
let start = 1;
let limit = 21;
let bars = ['hp', 'attack', 'defense', 'special-attack', 'special-defense', 'speed']

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
    document.getElementById('height').innerHTML = allPokemon[i]['height'] * 10 + 'cm';
    document.getElementById('weight').innerHTML = allPokemon[i]['weight'] + 'kg';
    document.getElementById('dialogId').innerHTML = '#' + allPokemon[i]['id'];
    colorOfPokemon(pokemonType);
    document.getElementById('dialog').style = `background-color:${pokemonColor};`;
    document.getElementById('dialogImg').src = allPokemon[i]['sprites']['other']['home']['front_default'];
    renderStats(i);
}

function updateProgressBar() {
    for (let i = 0; i < currentPokemon['stats'].length; i++) {
        let stat = currentPokemon['stats'][i]['base_stat'];
        if (stat > 100) {
            document.getElementById(`progressBar${i}`).style = 'background-color:  #ff4500';
        }
    }
}

function renderStats(i) {
    document.getElementById('stats').innerHTML = /*html*/`
    <table>
        <tr>
            <td><b>${allPokemon[i]['stats'][0]['stat']['name']}:</b></td>
            <td><b>${allPokemon[i]['stats'][0]['base_stat']}</b></td>
            <td><progress value="${allPokemon[i]['stats'][0]['base_stat']}" max="100" class="bar"></progress></td>
        </tr>
        <tr>
            <td><b>${allPokemon[i]['stats'][1]['stat']['name']}:</b></td>
            <td><b>${allPokemon[i]['stats'][1]['base_stat']}</b></td>
            <td><progress value="${allPokemon[i]['stats'][1]['base_stat']}" max="100" class="bar"></progress></td>
        </tr>
        <tr>
            <td><b>${allPokemon[i]['stats'][2]['stat']['name']}:</b></td>
            <td><b>${allPokemon[i]['stats'][2]['base_stat']}</b></td>
            <td><progress value="${allPokemon[i]['stats'][2]['base_stat']}" max="100" class="bar"></progress></td>
        </tr>
        <tr>
            <td><b>${allPokemon[i]['stats'][3]['stat']['name']}:</b></td>
            <td><b>${allPokemon[i]['stats'][3]['base_stat']}</b></td>
            <td><progress value="${allPokemon[i]['stats'][3]['base_stat']}" max="100" class="bar"></progress></td>
        </tr>
        <tr>
            <td><b>${allPokemon[i]['stats'][4]['stat']['name']}:</b></td>
            <td><b>${allPokemon[i]['stats'][4]['base_stat']}</b></td>
            <td><progress value="${allPokemon[i]['stats'][4]['base_stat']}" max="100" class="bar"></progress></td>
        </tr>
        <tr>
            <td><b>${allPokemon[i]['stats'][5]['stat']['name']}:</b></td>
            <td><b>${allPokemon[i]['stats'][5]['base_stat']}</b></td>
            <td><progress value="${allPokemon[i]['stats'][5]['base_stat']}" max="100" class="bar"></progress></td>
        </tr>
    </table>
    `;
}

function closePokemon() {
    document.getElementById('showPokemon').classList.add('dNone');
    document.getElementById('body').style = '';
}

function doNotClose(event) {
    event.stopPropagation();
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

