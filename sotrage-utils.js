function findById(items, id){
    for (const item of items){
        if (item.id === id){
            return item;
        }
    }
}

export function showPokemon(id){
    const resultsString = localStorage.getItem('Outcome') || '[]';
    const results = JSON.parse(resultsString);
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
    localStorage.setItem('Result', JSON.stringify(results));
}