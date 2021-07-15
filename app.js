
import pokemonData from './pokemon.js';
import { pickPokemon, showPokemon } from './storage-utils.js';


const pokemon1Radio = document.getElementById('pokemon1-radio');
const pokemon1Image = document.getElementById('pokemon1-image');

const pokemon2Radio = document.getElementById('pokemon2-radio');
const pokemon2Image = document.getElementById('pokemon2-image');

const pokemon3Radio = document.getElementById('pokemon3-radio');
const pokemon3Image = document.getElementById('pokemon3-image');

const pokeBall = document.getElementById('choice');

let totalPlays = 0;

function renderRandomPokemon(){
    totalPlays++;
    let randomNum1 = Math.floor(Math.random() * pokemonData.length);
    let randomNum2 = Math.floor(Math.random() * pokemonData.length);
    let randomNum3 = Math.floor(Math.random() * pokemonData.length);

    while (randomNum1 === randomNum2 ||
      randomNum2 === randomNum3 ||
      randomNum1 === randomNum3)
    {
        randomNum1 = Math.floor(Math.random() * pokemonData.length);
        randomNum2 = Math.floor(Math.random() * pokemonData.length);
        randomNum3 = Math.floor(Math.random() * pokemonData.length);
    }

    let pokemon1 = pokemonData[randomNum1];
    let pokemon2 = pokemonData[randomNum2];
    let pokemon3 = pokemonData[randomNum3];

    showPokemon(pokemon1.id);
    showPokemon(pokemon2.id);
    showPokemon(pokemon3.id);
    
    pokemon1Radio.value = pokemon1.id;
    pokemon1Radio.checked = false;
    pokemon1Image.src = pokemon1.url_image;

    pokemon2Radio.value = pokemon2.id;
    pokemon2Radio.checked = false;
    pokemon2Image.src = pokemon2.url_image;

    pokemon3Radio.value = pokemon3.id;
    pokemon3Radio.checked = false;
    pokemon3Image.src = pokemon3.url_image;
}

localStorage.removeItem('Outcome');

renderRandomPokemon();

pokeBall.addEventListener('click', ()=>{
    const selectedPokemon = document.querySelector('input[type=radio]:checked');
    const selectedId = Number(selectedPokemon.value);
    pickPokemon(selectedId);

    if (totalPlays < 2) {
        renderRandomPokemon();
    } else {
        window.location.replace('./results/index.html');
    }
});