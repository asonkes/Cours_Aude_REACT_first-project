import style from "../3_Exo_Map/FilmCard.module.css";

export const FilmCard = (props) => {
    
    // On reçoit ici les props du composant
    const {film} = props;

    // Ce dont est composé 'films'
    const {title, directors, year, image, rating} = film;

    return(
        <div className={style.filmcard}>
            <p className={style.text}>
                <span className={style.span1}>Titre du film :</span>
                {title && <span className={style.span2}>{title}</span>}
            </p>

            <img src={image} alt={`Affiche du film ${title}`}></img>

            <div className={style.text}>
                <p className={style.span1}>Réalisateur(s) :</p>
                <ul>
                    {directors.map((director, index) => (<li key={index}>{director}</li>))}
                </ul>
            </div>
            <p>
                <span className={style.span1}>Année de réalisation :</span>
                {year && <span>{year}</span>}
            </p>
            <p>
                <span className={style.span1}>Score : </span>

                <span>
                    {(!rating || rating === 0) ?
                        (<span></span>) :
                        (Array.from({length: 5}, (value, index) => 
                            index < rating ?
                            (<span>⭐</span>) :
                            (<span>💥​</span>)
                        ))
                    }
                </span>
            </p>
                
            {/** Ici on peut faire une condition, donc si rating existe, ausinon on met rien 
             * Et là, en +, je mets === 5
             * Donc SI rating === 5 ==> alors tu me l'affiche, ausinon rien
            */}
            {(rating === 5) && <p className={style.heart}>❤️</p>}
        </div>
    )
}
