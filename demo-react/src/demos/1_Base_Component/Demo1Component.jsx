/** Import fichier css classique */
import '../1_Base_Component/Demo1.css';

/** Import fichier module.css */
/** Quand on utilise un module, on accès à un objt dans lequel il y aura toutes les classes */
import style from '../1_Base_Component/Demo1.module.css';

/** Pas obligé de mettre 'export default {nom du composant} */
/** Mettre juste 'export' */
export const Demo1Component = (props) => {
    // props est un objet dans lequel il y aura des propriétés qui porteront
    // le nom de ce qu'il aura été envoyé lors de l'utilisation du composant
    // <Demo1Component name="HTML" type="Front-End/>"

    // Avec le destructuring, je vais chercher dans l'objet props
    //tout ce qui m'intéresse pour mon composant
    // Le '...Cours...' ==> sert à mettre une valeur par défaut si on a rien mis dans le composant
    // sur la page 'App.jsx'
    const {name = '...Cours...', type = '...Domaine...', difficulty = '...X...'} = props;

    return (
        /** On est pas obligé de mettre <div></div> */
        /** On met un fragment à la place */
        <>
            /***************** DEMO1Component ********************************** */
            <p className={style['grey-text']}>Bienvenue au cours de {name} qui est du {type}</p>
            <p className='grey-text'>Difficulté : {difficulty}/5</p>
        </>
    );
}

