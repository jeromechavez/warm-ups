import React, { Fragment, Component } from 'react'
import Nav from './nav'
import Pokedex from './pokedex'
import * as queryString from './query-string'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    window.addEventListener("hashchange", this.handleChange)
    window.dispatchEvent(new Event('hashchange'))
  }
  componentWillUnmount() {
    window.removeEventListener("hashchange", this.handleChange)
  }

  handleChange() {
    let currentHash = queryString.parse(window.location.hash)
    let currentType = Object.values(currentHash)
    this.setState({
      type: currentType[0]
    })

  }

  render() {
    const { type } = this.state
    const { pokedex } = this.props
    const activePokemon = type
      ? pokedex.filter(pokemon => pokemon.type === type)
      : pokedex
    return (
      <Fragment>
        <h1 className="text-center">Pokedex</h1>
        <div className="container">
          <Nav activeType={type}/>
          <Pokedex pokedex={activePokemon}/>
        </div>
      </Fragment>
    )
  }
}
