import style from "./TrainerCard.module.css";

export const TrainerCard = (props) => {

    // On va recevoir le formateur dans les props du composant
    const { trainer } = props;

    // On extrait ensuite tout ce dont on a besoin du formateur
    const { id, firstname, lastname, gender, vacations, hobbies } = trainer;

    return (
        <div className={ `${style.card} 
                ${ gender === 'm' ? 
                   style.male : 
                   gender === 'f' ? 
                   style.female : 
                   style.other }`}>
            <h3>{firstname} {lastname}</h3>

            <div className={style.hobbies}>
                <p>Ses hobbies sont :</p>
                <ul>
                    {/* Si on se sert du map pour afficher juste un élément HTML avec peu de valeur dedans, pas la peine de faire un composant pour ça */}

                    {hobbies.map((hobby, index) => (<li key={index} >{hobby}</li>))}
                </ul>
            </div>

            {vacations ?
                <button disabled>🌴 En vacances 🌴</button>
                :
                <button>👉🏻 Sélectionner</button>
            }
        </div>
    )
}
