import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";
function devide(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}
export default class Pokedex extends Component {
  render() {
    const pokecards = [
      { id: "004", name: "Charmander", type: "fire", exp: 62 },
      { id: "007", name: "Squirtle", type: "water", exp: 63 },
      { id: "011", name: "Metapod", type: "bug", exp: 72 },
      { id: "012", name: "Butterfree", type: "flying", exp: 178 },
      { id: "025", name: "Pikachu", type: "electric", exp: 112 },
      { id: "039", name: "Jigglypuff", type: "normal", exp: 95 },
      { id: "094", name: "Gengar", type: "poison", exp: 225 },
      { id: "133", name: "Eevee", type: "normal", exp: 65 },
    ];
    let arr1 = devide(pokecards);
    let arr2 = arr1;
    let deck1 = arr1.slice(0, pokecards.length / 2);
    let deck2 = arr2.slice(pokecards.length / 2, pokecards.length);

    return (
      <div className="Pokedex">
      <div>
        <h1>Deck 1</h1>
        <div className="Pokecard">
          {deck1.map((p) => (
            <Pokecard name={p.name} src={p.id} type={p.type} exp={p.exp} />
          ))}
        </div>
        <h1>Deck 2</h1>
        <div className="Pokecard">
          {deck2.map((p) => (
            <Pokecard name={p.name} src={p.id} type={p.type} exp={p.exp} />
          ))}
        </div>
      </div>
      </div>
    );
  }
}
