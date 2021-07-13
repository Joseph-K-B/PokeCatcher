// import functions
import pokemonData from './pokemon.js';
// reference needed DOM elements
const pokemon1Radio = document.getElementById('pokemon1-radio');
const pokemon1Image = document.getElementById('pokemon1-image');

const pokemon2Radio = document.getElementById('pokemon2-radio');
const pokemon2Image = document.getElementById('pokemon2-image');

const pokemon3Radio = document.getElementById('pokemon3-radio');
const pokemon3Image = document.getElementById('pokemon3-image');

const pokeBall = document.getElementById('choice');
//initialize state
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

    console.log(pokemonData);
    let pokemon1 = pokemonData[randomNum1];
    console.log(randomNum1);
    console.log(pokemon1);
    let pokemon2 = pokemonData[randomNum2];
    let pokemon3 = pokemonData[randomNum3];
    
    pokemon1Radio.value = pokemon1.id;
    pokemon1Radio.checked = false;
    pokemon1Image.src = `x${pokemon1Image}`;

    pokemon2Radio.value = pokemon2.id;
    pokemon2Radio.checked = false;
    pokemon2Image.src = `y${pokemon2Image}`;

    pokemon3Radio.value = pokemon3.id;
    pokemon3Radio.checked = false;
    pokemon3.src = `z${pokemon3Image}`;
}

renderRandomPokemon();
  // set event listeners 
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
pokeBall.addEventListener('click', ()=>{
    if (totalPlays < 2) {
        renderRandomPokemon();
    } else {
        window.location.replace('./results');
    }
});