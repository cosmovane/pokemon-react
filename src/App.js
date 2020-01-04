import React from 'react';
import './App.css';
import {PokemonCard} from './components/PokemonCard';
import axios from 'axios';

class App extends React.Component{

  state = { 
    pokemons: [] 
  }

  async componentDidMount (){
    const response = await axios('https://pokeapi.co/api/v2/pokemon/?limit=50');

    this.setState({
      pokemons: response.data.results
    })
  }

  render(){
    
    const { pokemons } = this.state
    
    return (
      <div className="App">
        <header className="App-header">
          {
            pokemons.map(pokemon => <PokemonCard id={pokemon.name}/>)
          }
        </header>
      </div>
    )

  }

}

export default App;
