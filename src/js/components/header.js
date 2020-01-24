import React, { Component } from 'react'
import SearchBar from './searchbar'

class Header extends Component {
    render() {
        return (
            <header style={headerStyle}>
                <h1 className="header-text">POKEDEX</h1>
                <SearchBar setPokemons={ this.props.setPokemons } />
            </header>
        )
    }
}

const headerStyle = {
    background: 'linear-gradient(to right, #1C6DE6, #0DF2A1)',
    padding: '35px 0',
    textAlign:'center',
    boxShadow: '0 0 20px #777'
}

export default Header

