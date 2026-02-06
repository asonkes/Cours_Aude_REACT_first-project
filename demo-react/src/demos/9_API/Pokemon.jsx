import style from '../9_API/Pokedex.module.css';
import {useState, useEffect} from "react";
import axios from 'axios';

export const Pokemon = (props) => {

  const {name} = props;

  const [pokemon, setPokemon] = useState();

  // Chaque fois que le nom va changer, on veut déclencher un effet
  // qui va faire la requête pour avoir les informations
  // de ce pokémon pour les afficher.
  useEffect(() => {

    // todo : faire la requête pour remplir pokemon avec setPokemon
    // Mais ça, cela ne fonctionne que s'il y a un name
    // Donc mettre un 'if'
    if(name) {
      axios.get('https://pokeapi.co/api/v2/pokemon/${name')
        .then( (response) => {
          console.log(response.data);
          setPokemon({
            height: '',
            weight: '',
            image: '',
            types: [], 
            cries: ''
          });
        })
        .catch( (error) => {
          console.log(error);
        })
    }

  }, [name]);
  

  // Si la props est undefined ou null, on va afficher le message
  if(!name) {
    return (
      <div className={style.pkm}>
        <p>Cliquez sur un pokemon pour voir ses infos</p>
      </div>
    )
  }

  return (
    <div className={style.pkm}>
      <h2>{name}</h2>      
    </div>


   
  )
}
