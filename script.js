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
        content.innerHTML += /*html*/`
        <div class="card" style="background-color:${pokemonColor};">
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
}

function renderPokemonInfo(currentPokemon) {
    document.getElementById('pokemonName').innerHTML = currentPokemon['name'];
    document.getElementById('pokemonImg').src = currentPokemon['sprites']['other']['home']['front_default'];
    // document.getElementById('showStats').innerHTML = currentPokemon['stats'][0]['stat']['name'];
    // aboutInfo(currentPokemon);
}

// function aboutInfo(currentPokemon) {
//     document.getElementById('aboutPokemon').innerHTML += /*html*/`
//     <table>
//         <tr>
//             <td>Height:</td>
//             <td>${currentPokemon['height'] * 10 + 'cm'}</td>
//         </tr>
//         <tr>
//             <td>Weight:</td>
//             <td>${currentPokemon['weight'] + 'kg'}</td>
//         </tr>
//         <tr>
//             <td>Abilities:</td>
//             <td>${currentPokemon['abilities'][0]['ability']['name']},${currentPokemon['abilities'][1]['ability']['name']}</td>
//         </tr>
//     </table>`;
// }

// function statsOfPokemon(currentPokemon) {
//     document.getElementById('stats').innerHTML += /*html*/ `
//     <table>
//         <tr>
//             <td>${currentPokemon['stats'][0]['stat']['name']}:</td>
//             <td>${currentPokemon['stats'][0]['base_stat']}</td>
//         </tr>
//         <tr>
//             <td>${currentPokemon['stats'][1]['stat']['name']}:</td>
//             <td>${currentPokemon['stats'][1]['base_stat']}</td>
//         </tr>
//         <tr>
//             <td>${currentPokemon['stats'][2]['stat']['name']}:</td>
//             <td>${currentPokemon['stats'][2]['base_stat']}</td>
//         </tr>
//         <tr>
//             <td>${currentPokemon['stats'][3]['stat']['name']}:</td>
//             <td>${currentPokemon['stats'][3]['base_stat']}</td>
//         </tr>
//         <tr>
//             <td>${currentPokemon['stats'][4]['stat']['name']}:</td>
//             <td>${currentPokemon['stats'][4]['base_stat']}</td>
//         </tr>
//         <tr>
//             <td>${currentPokemon['stats'][5]['stat']['name']}:</td>
//             <td>${currentPokemon['stats'][5]['base_stat']}</td>
//         </tr>
//     </table>
//     `;
// }

