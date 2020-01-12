import React, { Component } from 'react';

export class PokeCard extends Component {

    render() {
        const {name, url} = this.props.pokemon
        const id = url.match(/\d+(?=\/$)/)[0]
        return (
            <div className="pokecard">
                { name }
                <br/>
                <img width="96px" height="96px" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
            </div>
        );
    }
}

export default PokeCard;
