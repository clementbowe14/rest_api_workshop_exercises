


async function getPokemon(name) {
    console.log(`"https://pokeapi.co/api/v2/pokemon/${name}`)
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const pokemon = await response.json();
    return pokemon
}

const data = getPokemon("charizard")

console.log(data);