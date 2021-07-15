import pokemonData from './pokemon.js';

export function findById(items, id){
    for (const item of items){
        if (item.id === id){
            return item;
        }
    }
}
export function setResults(resultsArray){
    localStorage.setItem('Outcome', JSON.stringify(resultsArray));
}
export function getResults(){
    const resultsString = localStorage.getItem('Outcome') || '[]';
    const results = JSON.parse(resultsString);
    return results;
}
export function showPokemon(id){
    const results = getResults();
    const pokemon = findById(results, id);
    
    if (!pokemon){
        let findPokemon = findById(pokemonData, id);
        const newPokemon = {
            id: id,
            shown: 1,
            captured: 0,
            pokemon: findPokemon.pokemon
            
        };
        results.push(newPokemon);
    } else {
        pokemon.shown++;
    }
    setResults(results);
}

export function pickPokemon(id){
    const results = getResults();
    const pokemon = findById(results, id);
    pokemon.captured++;
    setResults(results);
}