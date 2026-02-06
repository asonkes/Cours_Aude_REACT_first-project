import { useEffect, useState } from "react";
import style from './Project.module.css';

export const Compteur = (props) => {

    const { compteur } = props;

    // useState -> Pour créer une variable qui va être modifiée
    const [count, setCount] = useState();

    // useEffect -> Pour créer un effet lorsque les valeurs renseignées viennent à être modifiées
    // useEffect( () => {}, [])
    // * un effet = une fonction
    // * les valeurs modifiées = les dépendances dans un tableau
    // useEffect( () => { 
    //      /* la fonction (ou l'effet) à lancer */
    //  },
    //  [/* la ou les potentielles valeurs à surveiller pour déclencher l'effet */] )

    // ce useEffect va déclencher un effet, à chaque fois que count est modifié
    useEffect(() => {
        // ! ⚠️ Attention votre useEffect ne doit JAMAIS modifier la variable présente dans les dépendances

        // l'effet : on veut stocker dans le localStorage la valeur du compteur
        // soit count === undefined
        // soit !isNaN(count) donc quand mon count est bien un Number
        if(!isNaN(count)) {
            localStorage.setItem(compteur.name, count);
        }
    }, [count])

    // ce useEffect va déclencher un effet au moment où le composant apparaît à l'écran
    useEffect(() => {
        // quand le composant arrive à l'écran, on va essayer de récupérer la valeur de son compteur dans le localStorage
        const savedValue = localStorage.getItem(compteur.name);

        // version 1 - version longue
        // s'il n'y a pas de valeur stockée, alors, on initialise le compteur à 0
        // if(savedValue === null){
        //     setCount(0);
        // }
        // else {
        //     setCount(+savedValue);
        // }

        // version 2 - le raccourcis 
        // * ne fonctionne qu'avec + et Number() mais pas avec parseInt et parseFloat. + et Number transforment tous les deux une valeur null en 0
        setCount(+savedValue);

        // On n'en a pas eu besoin pour l'exercice mais si un return est présent dans notre useEffect, il renvoie toujours la fonction (l'effet) à exécuter quand le composant disparait de l'écran (pour annuler une requête, clear un timer, etc...)
        return () => {}

    }, [])

    // ! 🗒️ RAPPEL 
    // ! useState est utilisé pour créer des variables qui peuvent être amenées à être modifiés (useState créer la variable et la fonction pour modifier la variable)
    // ! useEffect est utilisé pour déclencher un effet (une fonction) soit quand le composant apparait à l'écran, soit quand une variable (state, props) est modifiée soit quand le composant disparait de l'écran (pour annuler une requête par exemple ou clear un timer)
    

    return (
        <div className={style.compteur}>
            <button 
                onClick={() => { setCount(prev => prev - 1) }} 
                disabled={count === 0}> ➖ </button>

            <p> {count} </p>

            <button 
                onClick={() => { setCount(prev => prev + 1) }}> ➕ </button>
        </div>
    )
}

