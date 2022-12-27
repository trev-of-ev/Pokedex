import React, { Component } from "react";
import './Pokecard.css';
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

class Pokecard extends Component {
  render() {
    let imgSrc = `${POKE_API}00${this.props.id}.png`;
    return (
      <div className="Pokecard">
        <h1>{this.props.name}</h1>
        <img src={imgSrc} alt="Charmander" />
        <div>Type: {this.props.type}</div>
        <div>EXP: {this.props.exp}</div>
      </div>
    );
  }
}

export default Pokecard;
