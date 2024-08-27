
const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`


function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
             <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>
                    
                <div class="detail">
                        <ol class="types">
                            <li class="type">gress</li>
                            <li class="type">poison</li>

                        </ol>
                        <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png"
                            alt="${pokemon.name}">

                </div>
        </li>
                
    `
}

const pokemonList = (document.getElementById('pokemonList'))


 fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => {
       

        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            pokemonList.innerHTML += convertPokemonToLi(pokemon)


        } 


    })
    .catch((error) => console.log(error))

 


