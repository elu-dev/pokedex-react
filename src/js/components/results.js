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
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(128px, 1fr))',
    gridGap: '30px',
    justifyItems: 'center',
}

export default Results;
