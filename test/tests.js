// IMPORT MODULES under test here:
// import { add } from '../calculator.js';
import { showPokemon, setResults, getResults, pickPokemon } from '../storage-utils.js';

const test = QUnit.test;

test('test of showPokemon should create result object if no pokemon present', expect =>{
    localStorage.removeItem('Outcome');
    const fakeOutcome = {
        id: 1,
        pokemon: 'bulbasaur',
        shown: 1,
        captured: 0
    };

    showPokemon(1);

    const outcomeString = localStorage.getItem('Outcome') || '[]';
    const outcomes = JSON.parse(outcomeString);
    expect.deepEqual(outcomes[0], fakeOutcome);
});

test('showPokemon should increment outcomes object if pokemon was shown prior', expect =>{
    const fakeOutcome = [{
        id: 1,
        shown: 1,
        captured: 0
    }];
    localStorage.setItem('Outcome', JSON.stringify(fakeOutcome));
    showPokemon(1);

    const outcomeString = localStorage.getItem('Outcome') || '[]';
    const outcomes = JSON.parse(outcomeString);

    const expected = {
        id: 1,
        shown: 2,
        captured: 0
    };
    expect.deepEqual(outcomes[0], expected);
});

test('getResults should return parsed Outcome from localStorage', expect =>{
    const fakeOutcome = [{
        id: 1,
        shown: 1,
        captured: 0
    }];
    setResults(fakeOutcome);
    const expected = getResults();
    expect.deepEqual(expected, fakeOutcome);
});

test ('getResults should return empty if no Outcome', expect =>{
    localStorage.removeItem('Outcome');
    const expected = getResults();
    expect.deepEqual(expected, []);
});

test ('pickPokemon should increment results preferred attribute', expect=>{
    const fakeOutcome = [{
        id: 1,
        shown: 1,
        captured: 0
    }];
    setResults(fakeOutcome);
    pickPokemon(1);
    const results = getResults();
    const expected = {
        id: 1,
        shown: 1,
        captured: 1
    };
    expect.deepEqual(results[0], expected);
});

