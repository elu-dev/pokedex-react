import React, { useState, Component } from 'react'

class SearchBar extends Component {
    
    submitSearch(e) {
        e.preventDefault()
        const input = document.getElementById("search-input")
        
        input.value = input.value.toLowerCase()

        if (!input.value) return

        const types = ["normal", "fire", "fighting", "water", "flying", "grass", "poison", "electric", "ground", "psychic", "rock", "ice", "bug", "dragon", "ghost", "dark", "steel", "fairy"]
        
        if (types.includes(input.value)) {
            fetch(`https://pokeapi.co/api/v2/type/${input.value}`)
                .then(res => res.json()
                    .then(data => this.props.setPokemons(data.pokemon))
                    .catch(console.log))
        } else {
            fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}`)
                .then(res => res.json()
                    .then(data => {
                        const poke = {name: data.name}
                        poke.url = `/${data.id}/`

                        this.props.setPokemons([{pokemon:poke}])
                    }).catch(console.log))
        }

        input.value = ''
    }

    render() {
        return (
            <form onSubmit={this.submitSearch.bind(this)} style={formStyle}>
                <input type="text" style={inputStyle}  id="search-input" placeholder="Search for a Pokemon or Type..." />
                <input type="submit" style={buttonStyle} value="Search" />
            </form>
        )
    }
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