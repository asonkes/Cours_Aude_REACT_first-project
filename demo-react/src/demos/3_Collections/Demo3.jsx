import style from "../3_Collections/Demo3.module.css";
import { TrainerCard } from "./TrainerCard"

export const Demo3 = () => {
    
    const trainers = [
        {id: 1, 
            firstname: 'Aude', 
            lastname: 'Beurivé', 
            gender: 'f', 
            vacations: false, 
            hobbies: ['Dessin', 'Tricot', 'Soup']
        },
        {id: 2, 
            firstname: 'Aurélien', 
            lastname: 'Strimelle', 
            gender: 'm', 
            vacations: false, 
            hobbies: ['Randonnée', 'Jeux de Société']
        },
        {id: 3, 
            firstname: 'Quentin', 
            lastname: 'Geerts', 
            gender: 'm', 
            vacations: true,
            hobbies: ['Mangas', 'Jeux de société']
        }
    ]

    return(
        <div className={style.demo3}>
            <h2>Liste des formateurs :</h2>

            <div className={style.demo3Child}>
                {/** Pour afficher plusieurs fois la même chose mais n'écrire qu'une seule fois le code,
                 * On va utiliser une "boucle"
                 * Cette boucle, sera la méthode .map() des tableaux puisqu'elle permet de transformer
                 * chaque élément du tableau en autre chose
                 * On va donc s'en servir pour transformer chaque élément du tableau en JSX
                 * Etape 1 : Afficher juste le prénom des formateurs
                */}

                {/**
                 * {trainers.map(trainer => (<p key={trainer.id}>{trainer.firstname}</p>))}
                 */}

                {/** Quand on affiche des collections (listes), on va devoir rajouter une clé unique sur
                 * l'élément construit pour des questions d'optimisation. Cette clé doit être associée à une valeur unique
                 * (idéalement un id mais si on n'en a pas, l'indica dans le tableau fait l'affaire). 
                 * Cela se fait avec un attribut key={valeur}
                 * 
                 * Quand on a beaucouq de HTML à afficher avec nore map, 
                 */}

                 { trainers.map( trainer => ( <TrainerCard key={trainer.id} trainer={trainer} /> )) }
            </div>
        </div>
    )
}