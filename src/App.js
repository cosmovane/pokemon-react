import React from 'react';
import './App.css';
import {PokemonCard} from './components/PokemonCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
      

      {/* <div className="pokemonDos">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" alt="Pokemon dos"/>
      <p>
        Ivysaur
      </p>
      </div>

      <div className="pokemonTres">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" alt="Pokemon tres"/>
      <p>
        Venusaur
      </p>
      </div> */}

      </header>
    </div>
  );
}

export default App;
