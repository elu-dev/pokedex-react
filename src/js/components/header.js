import React from 'react'
import SearchBar from './searchbar'

function Header() {
    return (
        <div style={headerStyle}>
            <h1 style={textStyle}>POKEDEX</h1>
            <SearchBar />
        </div>
    )
}

const headerStyle = {
    background: 'linear-gradient(to right, #1C6DE6, #0DF2A1)',
    padding:'20px',
    height:'200px',
    textAlign:'center'
}

const textStyle = {
    margin:'0 0 30px 0',
    color:'white',
    fontSize:'70px',
    fontWeight:'lighter',
    letterSpacing:'.5em'
}

export default Header

