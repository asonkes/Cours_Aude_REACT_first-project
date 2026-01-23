import style from './Demo2.module.css';

export const Demo2 = (props) => {

    const { owner, havePet, name, image, type } = props;

    // ! 1er type de conditionnel

    // Si le owner ne possède pas d'animal, on va renvoyer un rendu différent de s'il en possède un
    if (!havePet) {
        return (
            <div className={style.nopet}>
                <p>Oh non {owner} ! Vous ne possédez pas d'animal ? 😢</p>
                <a target='__blank' href="https://www.veeweyde.be/">Cliquez-ici pour en adopter un !</a>
            </div>
        )
    }
    // Sinon, s'il a un animal, on aura ce rendu là
    return (
        <div className={style.pet 
                        + ' ' +
                        ((type === 'chat')? style.cat : style.dog) }>
            <div className={style.inside}>
                <p>Ohlala {owner} ! Dis-m'en plus sur ton animal 👀 !</p>

                {/* 👉🏻 2ème type de conditionnel : la ternaire */}
                {/* Rappel ternaire : 
                (condition) ? traitement si vrai : traitement si faux */}
                <p> Ton animal est un {
                    (type === 'chat') ?
                        (<span>🐈‍⬛</span>) :
                        (<span>🐕</span>)}
                </p>

                {/* 👉🏻 3ème type de conditionnel : Le OU || */}
                {/* -> Utilisé pour afficher une valeur ou une autre si la première n'existe pas */}
                {/* On pourrait faire le même traitement avec une ternaire mais l'autre opérateur nous simplifie l'écriture */}
                {/* <p> Son petit nom est : <span> { name ? name : 'Inconnu' } </span> </p> */}
                {/* Affichera la valeur de droite si la variable de gauche est null ou undefined */}
                <p> Son petit nom est : <span> {name || 'Inconnu'} </span> </p>

                { /* 👉🏻 4ème type de conditionnel : Le ET && */}
                { /* -> Utilisé pour afficher quelque chose uniquement si la condition est remplie */}
                {/* condition && traitement à faire si condition vraie */}
                {image && <img width='150px' src={image} />}
            </div>
        </div>
    )
}
