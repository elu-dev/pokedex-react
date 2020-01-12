import React, { Component, useState } from 'react'
import Header from './header'
import Results from './results'


class App extends Component {
    state = {
        pokecards: [],
        types:[]
    }

    setPokemons = pokemons => {
        this.setState({pokecards: [...pokemons]})
    }


    render() {
        return (
            <div className="container">
                <Header setPokemons={ this.setPokemons.bind(this) } />
                <Results pokecards={ this.state.pokecards } />
            </div>
        )
    }
}

export default App

