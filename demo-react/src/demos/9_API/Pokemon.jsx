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
      axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then( (response) => {

          setPokemon({
            height: response.data.height * 10, // pour avoir la taille en cm
            weight: response.data.weight / 10, // pour l'avoir en kilo
            image: response.data.sprites.other.showdown.front_default, // pour récupérer l'image
            types: response.data.types.map(type => type.type.name), // on récupère le tableau qu'on map pour obtenir un tableau avec juste les noms des types 
            cries: response.data.cries.legacy
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
      <img src={pokemon?.image} alt={`Image qui bouge représentant le pokemon ${name}`} />
      <p>Poids : ${pokemon?.weight} kg</p>     
      <p>Taille : ${pokemon?.height} cm</p>   
      <h3>Type(s)</h3>
      <p>
        {
          pokemon?.types?.map(type => (<span>{type}</span>))
        }  
      </p>  
      <audio src={pokemon?.cries} controls></audio>
    </div>


   
  )
}
