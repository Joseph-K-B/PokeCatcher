import { getResults, findById } from '../storage-utils.js';
import pokemonData from '../pokemon.js';
import pokemon from '../pokemon.js';

const resultData = document.getElementById('results-data');

const results = getResults();
let name = [];
let shown = [];
let captured = [];


for (let item of results) {

    const pokemons = findById(pokemonData, item.id);
    name.push(pokemons.pokemon);
    shown.push(item.shown);
    captured.push(item.captured);

    const pokeImage = document.createElement('img');
    pokeImage.src = pokemons.url_image;

    const shownText = document.createElement('p');
    shownText.textContent = `Shown: ${item.shown}`;

    const capturedText = document.createElement('p');
    capturedText.textContent = `Captured: ${item.captured}`;
    
    const nameText = document.createElement('p');
    nameText.textContent = `Pokemon: ${item.pokemon}`;
    
    const resultDiv = document.createElement('div');
    resultDiv.classList.add('result');

    resultDiv.appendChild(pokeImage);
    resultDiv.appendChild(shownText);
    resultDiv.appendChild(capturedText);
    resultDiv.appendChild(nameText);

    resultData.appendChild(resultDiv);
}

const playAgainBtn = document.getElementById('home-button');
playAgainBtn.addEventListener('click', ()=>{
    window.location.replace('../index.html');
});


var ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: name,
        datasets: [{
            label: 'Shown',
            data: shown,
            backgroundColor: [
                'black',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1 },
        { label: 'Captured',
            data: captured,
            backgroundColor: [
                'red',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        
        }]
    },
    
    
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});