let pokemonRepository = (function() {
    let t = [],
      e = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    function n(e) {
      t.push(e);
    }
    function o(t) {
      pokemonRepository.loadDetails(t).then(function() {
        console.log(t),
          (function(t, e, n) {
            console.log('appending details to modal...');
            let o = $('.modal-body');
            o.empty();
            let i = document.createElement('h2');
            i.innerText = 'Height: ' + e + ' cm';
            let a = document.createElement('img');
            (a.src = n),
              $('#pokemonModalLabel').text('Name: ' + t),
              o.append(i),
              o.append(a);
          })(t.name, t.height, t.imageUrl);
      });
    }
    return {
      getAll: function() {
        return t;
      },
      add: n,
      addListItem: function(t) {
        let e = document.createElement('div');
        e.classList.add('p-3');
        let n = document.createElement('li');
        n.classList.add('group-list-item');
        let i = document.createElement('button');
        i.classList.add('btn'),
          i.classList.add('btn-primary'),
          i.classList.add('btn-glass'),
          $('.btn').attr('type', 'button'),
          $('.btn').attr('data-toggle', 'modal'),
          $('.btn').attr('data-target', '#pokemon-modal'),
          (i.innerText = t.name),
          i.addEventListener('click', function() {
            console.log('button was clicked...'), o(t);
          }),
          n.append(i),
          pokeList.append(n),
          e.append(i),
          pokeGrid.append(e);
      },
      LoadList: function() {
        return fetch(e)
          .then(function(t) {
            return t.json();
          })
          .then(function(t) {
            t.results.forEach(function(t) {
              let e = { name: t.name, detailsUrl: t.url };
              n(e), console.log(e);
            });
          })
          .catch(function(t) {
            console.error(t);
          });
      },
      loadDetails: function(t) {
        let e = t.detailsUrl;
        return fetch(e)
          .then(function(t) {
            return t.json();
          })
          .then(function(e) {
            (t.imageUrl = e.sprites.front_default),
              (t.height = e.height),
              (t.types = e.types);
          })
          .catch(function(t) {
            console.error(t);
          });
      },
      showDetails: o
    };
  })(),
  pokeList = document.querySelector('.pokemon-list'),
  pokeGrid = document.querySelector('.pokemon-grid');
pokemonRepository.LoadList().then(function() {
  pokemonRepository.getAll().forEach(function(t) {
    pokemonRepository.addListItem(t);
  });
});
