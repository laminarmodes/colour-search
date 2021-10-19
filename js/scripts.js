/* Practice */
/* alert('Hello world');
let myGreeating = 'Hello world again';
document.write(myGreeating);
let favoriteFood = "Gyoza";
document.write(favoriteFood);
*/

// let pokemonList = [
//     {
//         name: 'Bulbasaur',
//         height: 0.7,
//         weight: 6.9,
//         abilities: ['chlorophyll', 'overgrow'],
//         eggGroups: ['monster', 'grass']
//     },
//     {
//         name: 'Squirtle',
//         height: 0.5,
//         weight: 9,
//         abilities: ['rain-dish', 'torrent'],
//         eggGroups: ['monster', 'water 1']
//     },
//     {
//         name: 'Persian',
//         height: 1,
//         weight: 32,
//         abilities: ['limber', 'technician', 'unnerve'],
//         eggGroups: ['field']
//     }
// ];

// for (let i = 0; i < pokemonList.length; i++) {
//     document.write("name: " + pokemonList[i].name);
//     document.write("<br>");
//     document.write("height: " + pokemonList[i].height)
//     if(pokemonList[i].height > 0.5) {
//         document.write(", wow, you're a tall one!");
//     } else {
//         document.write(", short and cute!")
//     }
//     document.write("<br>");
//     document.write("weight: " + pokemonList[i].weight);
//     if(pokemonList[i].weight > 15) {
//         document.write(", super strong!")
//     } else {
//         document.write(", hi little one!")
//     }
//     document.write("<br>");
//     document.write("abilities: " + pokemonList[i].abilities);
//     document.write("<br>");
//     document.write("egg groups: " + pokemonList[i].eggGroups);
//     document.write("<br>");
//     document.write("<br>");
// }

// function loopPokemon(pokemon) {
//     document.write("name: " + pokemon.name);
//     document.write("<br>");
//     document.write("height: " + pokemon.height)
//     if(pokemon.height > 0.5) {
//         document.write(", wow, you're a tall one!");
//     } else {
//         document.write(", short and cute!")
//     }
//     document.write("<br>");
//     document.write("weight: " + pokemon.weight);
//     if(pokemon.weight > 15) {
//         document.write(", super strong!")
//     } else {
//         document.write(", hi little one!")
//     }
//     document.write("<br>");
//     document.write("abilities: " + pokemon.abilities);
//     document.write("<br>");
//     document.write("egg groups: " + pokemon.eggGroups);
//     document.write("<br>");
//     document.write("<br>");
// }

// pokemonList.forEach(loopPokemon);







// Assigning IIFE to pokemonRepository variable, this will hold what the IIFE returns
let pokemonRepository = ( function () {

    // Here we wrap pokemonList array in an IIFE to avoid accidently accessing the global state
    let pokemonList = [
        {
            name: 'Bulbasaur',
            height: 0.7,
            weight: 6.9,
            abilities: ['chlorophyll', 'overgrow'],
            eggGroups: ['monster', 'grass']
        },
        {
            name: 'Squirtle',
            height: 0.5,
            weight: 9,
            abilities: ['rain-dish', 'torrent'],
            eggGroups: ['monster', 'water 1']
        },
        {
            name: 'Persian',
            height: 1,
            weight: 32,
            abilities: ['limber', 'technician', 'unnerve'],
            eggGroups: ['field']
        }
    ];

    // function that returns all items
    function getAll() {
        return pokemonList;
    }

    // add single item to pokemon list
    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    // return key / value pairs, returning and object wtih the same names for keys and values
    return {
        getAll: getAll,
        add: add
    };

})();

function loopPokemon(pokemon) {
    document.write("name: " + pokemon.name);
    document.write("<br>");
    document.write("height: " + pokemon.height)
    if(pokemon.height > 0.5) {
        document.write(", wow, you're a tall one!");
    } else {
        document.write(", short and cute!")
    }
    document.write("<br>");
    document.write("weight: " + pokemon.weight);
    if(pokemon.weight > 15) {
        document.write(", super strong!")
    } else {
        document.write(", hi little one!")
    }
    document.write("<br>");
    document.write("abilities: " + pokemon.abilities);
    document.write("<br>");
    document.write("egg groups: " + pokemon.eggGroups);
    document.write("<br>");
    document.write("<br>");
}

pokemonRepository.getAll().forEach(loopPokemon);

