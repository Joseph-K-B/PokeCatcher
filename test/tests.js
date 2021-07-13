// IMPORT MODULES under test here:
// import { add } from '../calculator.js';
import { showPokemon } from '../sotrage-utils.js';

const test = QUnit.test;

test('test of showPokemon should create result object if no pokemon present', expect =>{
    localStorage.removeItem('Outcome');
    const fakeOutcome = {
        id: 1,
        shown: 1,
        preferred: 0
    };

    showPokemon(1);

    const outcomeString = localStorage.getItem('Outcome') || '[]';
    const outcomes = JSON.parse(outcomeString);
    expect.deepEqual(outcomes[0], fakeOutcome);
});

test('showPokemon should increment outcomes object if pokemon was shown prior', expect =>{
    const fakeOutcome = {
        id: 1,
        shown: 1,
        preferred: 0
    };
    localStorage.setItem('Outcome', JSON.stringify(fakeOutcome));
    showPokemon(1);

    const outcomeString = localStorage.getItem('Outcome') || '[]';
    const outcomes = JSON.parse(outcomeString);

    const expected = {
        id: 1,
        shown: 2,
        preferred: 0
    };
    expect.deepEqual(outcomes[0], expected);
});
