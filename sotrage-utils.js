function findById(items, id){
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
        const newPokemon = {
            id: id,
            shown: 1,
            preferred: 0
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
    pokemon.preferred++;
    setResults(results);
}