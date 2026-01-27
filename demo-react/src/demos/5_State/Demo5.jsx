import { useState } from "react";
import style from "../5_State/Demo5.module.css";

export const Demo5 = () => {

    // Nous allons, pour créer notre variable, utiliser la Hook de State
    // ⚠️ Attention, il faudra bien l'importer de react
    // 👉🏻 useState() est une fonction qui :
    // - renvoie un tableau avec 2 éléments 
    //      * le premier élément sera la variable que vous souhaitez créer
    //      * le deuxième élément sera la fonction qui permet de modifier cette variable et d'indiquer que le rendu doit se mettre à jour
    // - peut prendre un paramètre qui sera la valeur initiale de votre variable
    
    const [count, setCount] = useState(0);
    const [firstname, setFirstname] = useState('Roger');

   
    const increment = () => {
        // setCount(6) -> Quand on veut setup avec une valeur fixe, on mettra juste la valeur dans les paramètres

        // L'autre façon d'utiliser le set, c'est avec une fonction fléchée où on récupère la valeur précédente et on renvoie la nouvelle valeur

        setCount( (prev) => prev + 1 );
        // setCount( (prev) => { return prev + 1 });
    }
    
    const decrement = () => {
        setCount( (prev) => prev - 1 );
    }

    // ! ⚠️ Si vous souhaitez relier un évènement à une fonction avec paramètre(s), il faudra penser à la noter dans une fonction fléchée. Si vous ne le faites pas, le rendu se fait, appelle la fonction, qui modifie la valeur, donc le rendu se fait, appelle la foncion, qui modifie la valeur, donc le rendu se fait, ... ♾️ Oups
    const crement = (value) => {
        // Si value contient +1, va faire une augmentation
        // Si value contient -1, va faire une diminution
        setCount( (prev) => prev + value);
    }

    return (
        <div>
            <h2>La gestion du state :</h2>

            <div className={style.demo5}>
                <button onClick={() => crement(-1)}>➖</button>
                <p>{count}</p>
                <button onClick={() => crement(1)}>➕</button>
            </div>

            <div className={style.demo5}>
                <h3>Bienvenue { firstname } 🌷💅🏻✨  </h3>

                <div className={style.demo5}>
                    <button onClick={ () => setFirstname(prev => prev.toLowerCase()) }>🗣️🔉</button>
                    <button onClick={ () => setFirstname(prev => prev.toUpperCase()) }>🗣️🔊</button>
                    <button onClick={ () => setFirstname('Rogerina') } >🪄🌟👩🏻</button>
                    <button onClick={ () => setFirstname('Roger') } >🔙</button>
                </div>
            </div>
        </div>
    )
}
