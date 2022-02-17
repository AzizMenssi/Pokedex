import React, { Component } from 'react'
import './Pokecard.css'
export default class Pokecard extends Component {
  render() {
    let src="/"+this.props.src+".png"
    return (
      <div className='card'>
          <h1>{this.props.name}</h1>
          <img className="img" src={src} alt="the pokemon"/>
          <h2>Type : {this.props.type}</h2>
          <h2>Exp : {this.props.exp}</h2>
      </div>
    )
  }
}
