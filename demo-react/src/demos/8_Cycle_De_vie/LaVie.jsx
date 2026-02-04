import { useEffect, useState } from "react";
import {EtreVivant} from '../8_Cycle_De_vie/EtreVivant';
import { EtreSpecial } from "./EtreSpecial";

export const LaVie = () => {

    const [etreVivants, setEtreVivants] = useState([]);

    const types = ['Humain', 'Animal', 'Bactérie'];

    const [montrerEtreSpecial, setMontrer] = useState(false);

    // Cette fonction est la fonction exécutée quand notre 
    // composant prend vie (quand il apparait à l'écran)
    useEffect( () => {
        console.log('Et dieu créa la Vie !!');

        // Dans cette fonction, si on renvoie une fonction, c'est celle-ci qui sera
        // exécutée si le composant disparait de l'écran
        return () => {}
    })
    
    const naissance = () => {

        // Donc 'DateNow()' ==> permet de définir un id entre le moment ou j'ai tapé et X date... (même manière que nanoid)
        const nouvelEtre = {
            id: Date.now(),
            type: types[Math.floor(Math.random() * 3)]
        }

        setEtreVivants([...etreVivants, nouvelEtre])
    }

    return (
        // Faites ce que je dis, pa sce que je fais style inline
        <div style={ {padding: "2rem"} }>
            <h2>C'est l'histoiiiiireeee de la vie 🐻​</h2>

            <button onClick={naissance}>Faire naitre quelque chose</button>

            {
                etreVivants.map(etre => <EtreVivant key={etre.id} etre={etre} />)
            }

            {/** Risque de boucle infinie */}
            <h3>L'être spécial dont personne ne veut : (aka: ne faites jamais ça)</h3>

            <button onClick={() => setMontrer(!montrerEtreSpecial)}>Afficher/Cacher</button>
            { 
                montrerEtreSpecial && 
                <EtreSpecial/>
            }


        </div>
    )
}