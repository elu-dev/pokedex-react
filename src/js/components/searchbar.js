import React, { useState } from 'react'

function SearchBar() {
    return (
        <form onSubmit={submitSearch} style={formStyle}>
            <input type="text" style={inputStyle} placeholder="Search Pokemon or Type..." id="searchInput"/>
            <input type="submit" style={buttonStyle} value="Search" />
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

const formStyle = {
    width: '500px',
    display: 'flex',
    margin: '0 auto',
}

const inputStyle = {
    flex: '9',
    border: 'none',
    height: '2.3em',
    paddingLeft: '10px',
    borderRadius: '50px 0 0 50px'
}

const buttonStyle = {
    border: 'none',
    borderRadius: '0 50px 50px 0',
    color: 'rgb(18,199,183)',
    background : 'white'
}

export default SearchBar