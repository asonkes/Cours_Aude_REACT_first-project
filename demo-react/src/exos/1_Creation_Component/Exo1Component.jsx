import './Exo1.css';
import style from '../1_Creation_Component/Exo1.module.css';

export const Exo1Component = (props) => {

    const {name, age=18 } = props;

    return(

        <>
            <p className="textName">Bienvenue {name} sur l'application React</p>
            <p className={style['text-age']}>Vous avez {age} ans</p>
        </>
    )
}