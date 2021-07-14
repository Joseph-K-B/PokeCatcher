import { getResults, findById } from '../storage-utils.js';
import pokemonData from '../pokemon.js';

const resultData = document.getElementById('results-data');

const results = getResults();
let names = [];
let shown = [];
let preffered = [];


for (let item of results) {

    const pokemon = findById(pokemonData, item.id);
    names.push(pokemon.pokemon);
    shown.push(item.shown);
    preffered.push(item.preffered);

    const pokeImage = document.createElement('img');
    pokeImage.src = pokemonData.url_image;

    const shownText = document.createElement('p');
    shownText.textContent = `Shown: ${item.shown}`;

    const prefferedText = document.createElement('p');
    prefferedText.textContent = `Preffered: ${item.choice}`;

    const nameText = document.createElement('p');
    nameText.textContent = `Pokemon: ${item.pokemon}`;

    const resultDiv = document.createElement('div');
    resultDiv.classList.add('Outcome');

    resultDiv.appendChild(pokeImage);
    resultDiv.appendChild(shownText);
    resultDiv.appendChild(prefferedText);
    resultDiv.appendChild(nameText);

    resultData.appendChild(resultDiv);
}





var ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
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