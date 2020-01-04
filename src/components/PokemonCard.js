import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function PokemonCard({ id }) {
  
  const [pokemon, setPokemon] = useState(null)

  useEffect( () => {
    async function getData(){
      const response = await axios(`https://pokeapi.co/api/v2/pokemon/${id}/`)

      setPokemon(response.data)
    }
    getData()
  }, [id]) 
  // useEffect is executed in 2 moments: component mounted and updated

  if(!pokemon){
    return null
  }

  return (
    <div className="pokemon">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>
        {pokemon.name}
      </p>
    </div>
  );
}

// export function PokemonCard(props) {
//   return (
//     <div className="pokemon">
//       <img src={props.imageUrl} alt={props.name} />
//       <p>
//         {props.name}
//       </p>
//     </div>
//   );
// }