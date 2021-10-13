/* Practice */
/* alert('Hello world');
let myGreeating = 'Hello world again';
document.write(myGreeating);
let favoriteFood = "Gyoza";
document.write(favoriteFood);
*/

pokemonList = [];

let testPokemon1 = {
    name: 'Bulbasaur',
    height: 0.7,
    weight: 6.9,
    abilities: ['chlorophyll', 'overgrow'],
    eggGroups: ['monster', 'grass']
}

let testPokemon2 = {
    name: 'Squirtle',
    height: 0.5,
    weight: 9,
    abilities: ['rain-dish', 'torrent'],
    eggGroups: ['monster', 'water 1']
}

let testPokemon3 = {
    name: 'Persian',
    height: 1,
    weight: 32,
    abilities: ['limber', 'technician', 'unnerve'],
    eggGroups: ['field']
}

pokemonList = [testPokemon1, testPokemon2, testPokemon3];

document.write(testPokemon1.name)
document.write("<br>")
document.write(pokemonList[0].name)