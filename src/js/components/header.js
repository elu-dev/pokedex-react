import React from 'react'
import SearchBar from './searchbar'

function Header() {
    return (
        <header style={headerStyle}>
            <h1 style={textStyle}>POKEDEX</h1>
            <SearchBar />
        </header>
    )
}

const headerStyle = {
    background: 'linear-gradient(to right, #1C6DE6, #0DF2A1)',
    padding: '35px 0',
    textAlign:'center'
}

const textStyle = {
    color:'white',
    margin: '0',
    marginLeft: '.5em',
    marginBottom: '20px',
    padding:'0',
    fontSize:'70px',
    fontWeight:'lighter',
    letterSpacing:'.5em'
}

export default Header

