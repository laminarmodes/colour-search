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
    // let pokemonData = [
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

    // Find the modal container
    let modalContainer = document.querySelector('#modal-container');

    let pokemonData = [];
    let apiURL = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    // function that returns all items
    function getAll() {
        return pokemonData;
    }

    // add single item to pokemon list
    function add(pokemon) {
        pokemonData.push(pokemon);
    }

    // add single pokemon item as a button and sets name of button to pokemon's name
    function addListItem(pokemon) {
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.classList.add('custom-button');
        button.setAttribute('id','show-modal');
        button.innerText = pokemon.name;
        button.addEventListener('click', function (event) {
            showDetails(pokemon);
        });
        listItem.append(button);
        pokeList.append(listItem);
    }

    // Fetches the pokemon data and calls 'add' to add it to the pokemonl list
    function LoadList() {
        // Try to fetch the json
        return fetch(apiURL).then(function (response) {
            // If can fetch the return the jsonresponse
            return response.json();
            // If can return the json response then loop through list
        }).then(function (json) {
            // For each item in the response
            json.results.forEach( function (item) {
                // Assign pokemon to a pokemonObject
                // Use 'name' and 'detailsUrl' as the keys
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                // Add pokemon to list
                add(pokemon);
                console.log(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }

    // Expects a pokemon object parameter
    // Fetches the pokemon data 'details' and places it into "item"
    function loadDetails(item) {
        let url = item.detailsUrl;
        // Try to fetch the URL image
        return fetch(url).then(function (response) {
            // If it can fetch the URL then return the response, and try to parse json
            return response.json();
            // If can parse json then get the details
        }).then(function (details) {
            // Set the image url to the item's image url proerty
            item.imageUrl = details.sprites.front_default;
            // Set the height to the item's height property
            item.height = details.height;
            // Set the types property to the item's types property
            item.types = details.types;
        }).catch( function (e) {
            console.error(e);
        })
    }

    /* Edit the showDetails() method of your current application to show a modal with the 
    Pokémon’s name, its height, and an image of the Pokémon. You also have the option to 
    add any additional details you want to display.
    */
    // This calls the function to load the details
    function showDetails(pokemon) {
        // Call loadDetails and pass in pokemon object
        pokemonRepository.loadDetails(pokemon).then(function () {
            console.log(pokemon);
            showModal(pokemon.name, pokemon.height, pokemon.imageUrl);
        });
    }

    function showModal(name, height, pokeImageUrl) {

        // Clear all existing content
        modalContainer.innerHTML = '';

        // Create modal element
        let modal = document.createElement('div');

        // Set the class name to 'modal'
        modal.classList.add('modal');

        // Create close button
        let closeButtonElement = document.createElement('button');
        // Set close button class
        closeButtonElement.classList.add('modal-class');
        // Set close button text
        closeButtonElement.innerText = 'Close';
        // Set close button to close modal
        closeButtonElement.addEventListener('click', hideModal);

        // Create name element
        let nameElement = document.createElement('h1');
        // Set name to name passed in
        nameElement.innerText = 'Name: '+name;

        // Create height element
        let heightElement = document.createElement('h2');
        // Set height to height passed in
        heightElement.innerText = 'Height: '+height+' cm';

        // Create image element
        let imageElement = document.createElement('img');
        // Set image source
        imageElement.src = pokeImageUrl;

        // Add the close button, name and image to the modal
        modal.appendChild(closeButtonElement);
        modal.appendChild(nameElement);
        modal.appendChild(heightElement);
        modal.appendChild(imageElement);

        // Add the modal to the modal container
        modalContainer.appendChild(modal);

        // Set the class of the modal container ot be is-visible
        modalContainer.classList.add('is-visible');

    }

    function hideModal() {
        modalContainer.classList.remove('is-visible');
    }

    // Allow escape key to close modal window
    window.addEventListener('keydown', (e) => {
        // If the key pressed is escape and the modal window is open
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
            hideModal();
        }
    });

    // Allow clicking outside to close the modal
    modalContainer.addEventListener('click', (e) => {
        let target = e.target;
        if(target === modalContainer) {
            hideModal();
        }
    });

    // return key / value pairs, returning and object wtih the same names for keys and values
    // this makes them available outside the IIFE
    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        LoadList: LoadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    };

})();

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

// pokemonRepository.getAll().forEach(loopPokemon);

let pokeList = document.querySelector('.pokemon-list');

pokemonRepository.LoadList().then(function () {
    // Making sure pokemon list is only rendered after loading all the info from the server
    pokemonRepository.getAll().forEach( function (pokemon){
        pokemonRepository.addListItem(pokemon)
    });
});

