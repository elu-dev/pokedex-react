import React, { useState } from 'react'

function SearchBar() {
    return (
        <form onSubmit={submitSearch}>
            <input type="text" id="searchInput"/>
            <input type="submit" value="Search" />
        </form>
    )
}

async function fetchPokemon(poke) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
    const pokemon = await response.json()
    return pokemon
}

function showPokemon(data) {
    const pokemon = document.createElement('img')
    pokemon.setAttribute('src', data.sprites.front_default)
    document.body.append(pokemon)
}

function submitSearch(e) {
    const input = document.getElementById("searchInput")

    fetchPokemon(input.value)
        .then(showPokemon)
        .catch(console.log)

    input.value = ''
    e.preventDefault()
}

export default SearchBar