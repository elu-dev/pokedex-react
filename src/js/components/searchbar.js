import React, { useState, Component } from 'react'

class SearchBar extends Component {
    
    submitSearch(e) {
        e.preventDefault()
        const input = document.getElementById("search-input")
        
        if (!input.value) return

        fetch(`https://pokeapi.co/api/v2/type/${input.value}`)
            .then(res => res.json()
                .then(data => this.props.setPokemons(data.pokemon))
                .catch(console.log))

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