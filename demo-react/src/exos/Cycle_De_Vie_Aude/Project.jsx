import { useState } from 'react';
import { Compteur } from './Compteur';
import style from './Project.module.css';

export const Project2 = () => {
    // useState -> Créer des variables qui vont être amenées à être modifiées
    const [compteurs, setCompteurs] = useState([
        {
            id: 1,
            name: 'Mailles',
            isVisible: true
        },
        {
            id: 2,
            name: 'Rangs',
            isVisible: true
        }
    ])

    const changeVisibility = (id) => {
        const newCompteurs = compteurs.map(compteur => { 
            if(compteur.id === id) {
                compteur.isVisible = !compteur.isVisible
            }
            return compteur;
         });

         setCompteurs(newCompteurs);
    }

    return (
        <div className={style.container}>

            <div className={style.projet}>
                <h2>Projet de tricot n°1548695</h2>

                {
                    compteurs.map(compteur => (
                        <div key={compteur.id} className={style.group}>
                            <h3 className={style.title}>{compteur.name}</h3>

                            {compteur.isVisible && <Compteur compteur={compteur} />}

                            <button
                                onClick={() => { changeVisibility(compteur.id) }}>
                                {compteur.isVisible ?
                                    '🙈' : '👀'}
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
