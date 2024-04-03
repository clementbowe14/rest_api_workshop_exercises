
const form = document.getElementById("pokemon_search_form")

/**
 when the submit button is clicked this function creates a GET request to https://pokeapi.co/api/v2/pokemon/{name}
 if the search is successful it will create a card showing the information of the pokemon.
 **/

form.addEventListener('submit',  async (event) => {
    event.preventDefault();
    let name = document.getElementById("pokemon_name").value
    console.log(name)
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    console.log(response)
    data = await response.json()
    console.log(data)
    let pokemonName = data.name
    let pokemonType = data.types
    let pokemonWeight = data.weight
    
    let card = document.createElement('div');
    card.innerHTML = `
    <div> Pokemon Name: ${pokemonName}</div>
    <div> Pokemon Type: ${pokemonType[0].type.name}</div>
    <div> Pokemon Weight:${pokemonWeight}</div>
    `

    // clear result of previous search and fill 
    document.getElementById('search_results').innerHTML = ''
    document.getElementById('search_results').appendChild(card);
})
