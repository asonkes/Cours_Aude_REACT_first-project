import { useEffect, useState } from 'react';
import style from './Pokedex.module.css';
import axios from 'axios';

export const PokemonList = (props) => {

    const {onPokemonSelection} = props;


    // Pour gérer les précédents et les suivants
    {/** Soit : 
        - On fait un 'state' pour offset et limit et l'avantage c'est qu'on 
        peut changer comme on veut le nombre de pokemon qu'on récupère
        - Soit on utilise les valeurs de base de l'API qui nous renvoie le 
        requête précédente et la requête suivante
    */}

    // Ca va changer tout le temps, donc on utilise des 'useState'
    const [prevRequest, setPrevRequest] = useState(null);
    const [nextRequest, setNextRequest] = useState(null);
    // Ici, ca va remplir la liste des pokemons à afficher , tableau vide pour commencer
    const [pokemons, setPokemons] = useState([]);

    const [error, setError] = useState('');

    // 1ere requête à faire qui remplir la liste avec les pokemons
    // On peut le faire avec FETCH ou AXIOS (npm i axios)
    // Quand on arrive sur la page 'crochet vide'
    useEffect( () => {
        
    axios.get(`https://pokeapi.co/api/v2/pokemon`)
        .then((response) => {
            console.log(response.data);

            // On va récupérer les deux requêtes et les stocker dans nos states
            setPrevRequest(response.data.previous);
            setNextRequest(response.data.next);

            // On rempli la liste des pkm avec la liste renvoyée par l'API
            setPokemons(response.data.results);
            
        })
        .catch((error) => {
            console.log(error);
            setError('Oupsy une erreur est survenue avec l\'API');
        });       
    }, []);

    const getPokemons = (next) => {
        // next est un param qui contient un booléen pour savoir si on eut voir les
        // prochains pokemons ou les précédents

        // On va chercher les prochains pokemons grâce à nextRequest
        axios.get(next ? nextRequest : prevRequest)
            .then((response) => {
                console.log(response);

                // On va récupérer les deux requêtes et les stocker dans nos states
                setPrevRequest(response.data.previous);
                setNextRequest(response.data.next);

                // On remplit la liste des pkm avec la liste renvoyée par l'API
                setPokemons(response.data.results);
        })
            .catch ((error) => {
                console.log(error);
                setError('Oupsy une erreur est survenue avec l\'API');
        });
    }

    return (
        <div className={style.list}>
            <h2>Liste des Pokemons</h2>

            {/** Ici on a pas d'id ==> donc on prend 'name' comme key */}
            <ul>
                {pokemons.map(pokemon => (
                    <li
                    onClick={() => onPokemonSelection(pokemon.name)} 
                    key={pokemon.name}>{pokemon.name}
                    </li>
                ))}
            </ul>

            <div className={style.buttons}>
                <button onClick={() => { getPokemons(false)}} disabled={!prevRequest}>⏮️ Pécédent</button>
                <button onClick={() => { getPokemons(true)}} disabled={!nextRequest}>Suivant⏭️</button>
            </div>
        </div>
    )
}
