
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


PokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
})

