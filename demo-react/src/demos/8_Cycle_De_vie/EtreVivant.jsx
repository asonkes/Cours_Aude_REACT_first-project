import { useEffect } from "react";

export const EtreVivant = (props) => {

    const {etre} = props;

    // useEffect est une fonction qui se déclenche quand le composant apparait à l'écran 
    // et qui déclenche la fonction mise en paramètre
    useEffect(() => {
        console.log(etre.id + ' est né ');

        return () => {
            console.log(etre.id + 'est mort 🪦');
        }
    })

    return(
        <div>
            {
                etre.type === 'Humain' && '👱'
            }
            {
                etre.type === 'Animal' && '🐶​'
            }
            {
                etre.type === 'Bactérie' && '🦠​'
            }
        </div>
    )
}