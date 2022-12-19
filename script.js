let currentPokemon;
let pokemonName;
let pokemonImg;
let pokemonId;
let pokemonType;
let pokemonColor;
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

        pokemonName = pokemon['name'];
        pokemonImg = pokemon['sprites']['other']['home']['front_default'];
        pokemonId = pokemon['id'];
        pokemonType = pokemon['types'][0]['type']['name'];
        colorOfPokemon(pokemonType);
        content.innerHTML += /*html*/`
        <div class="card" style="background-color:${pokemonColor};">
            <div>
                <h2>#${pokemonId};${pokemonName}</h2>
            </div>
            <div>
                <span>${pokemonType}</span>
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

function colorOfPokemon(pokemonType) {
    if(pokemonType == 'fire') {
        return pokemonColor = 'rgb(254, 118, 118)';
    }
    if(pokemonType == 'grass') {
        return pokemonColor = 'rgb(76, 206, 177)';
    }
    if(pokemonType == 'water') {
        return pokemonColor = 'rgb(118, 190, 254)';
    }
    if(pokemonType == 'bug') {
        return pokemonColor = 'rgb(108, 177, 80)';
    }
    if(pokemonType == 'normal') {
        return pokemonColor = 'rgb(228, 220, 220)';
    }
    if(pokemonType == 'poison') {
        return pokemonColor = 'rgb(147, 103, 169)';
    }
    if(pokemonType == 'electric') {
        return pokemonColor = 'rgb(240, 216, 52)';
    }
    if(pokemonType == 'fairy') {
        return pokemonColor = 'rgb(207, 65, 121)';
    }
    if(pokemonType == 'fighting') {
        return pokemonColor = 'rgb(195, 128, 96)';
    }
    if(pokemonType == 'ground') {
        return pokemonColor = 'rgb(133, 78, 56)';
    }
    if(pokemonType == 'psychic') {
        return pokemonColor = 'rgb(171, 123, 174)';
    }
    if(pokemonType == 'rock') {
        return pokemonColor = 'rgb(207, 195, 147)';
    }
    if(pokemonType == 'ghost') {
        return pokemonColor = 'rgb(153, 123, 154)';
    }
    if(pokemonType == 'ice') {
        return pokemonColor = 'rgb(157, 221, 210)';
    }
    if(pokemonType == 'dragon') {
        return pokemonColor = 'rgb(136, 154, 209)';
    }
    if(pokemonType == 'dark') {
        return pokemonColor = 'rgb(131, 124, 124)';
    }
    if(pokemonType == 'steel') {
        return pokemonColor = 'rgb(195, 195, 207)';
    }

    return pokemonColor;
}