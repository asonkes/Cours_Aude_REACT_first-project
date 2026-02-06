import style from './Pokedex.module.css';
import { Pokemon } from './Pokemon';
import { PokemonList } from './PokemonList';
import { useState } from 'react';

export const Prokedex = () => {

  const [pokemonName, setPokemonName] = useState();

  const changeName = (name) => {
    setPokemonName(name);
  }

  return (
    <div className={style.container}>
        <PokemonList onPokemonSelection={changeName}/>
        <Pokemon name={pokemonName}/>
    </div>
  )
}
