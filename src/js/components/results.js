import React, { Component } from 'react';
import PokeCard from './pokecard';

class Results extends Component {

    render() {
        return (
            <div style={resultStyle}>
                {this.props.pokecards.map((pokemon, index) => <PokeCard key={index} pokemon={pokemon.pokemon} />)}
            </div>
        );
    }
}

const resultStyle = {
    margin: '30px',
    // border: '1px solid red'
}

export default Results;
