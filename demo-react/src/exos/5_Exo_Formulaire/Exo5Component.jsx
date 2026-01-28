import style from '../5_Exo_Formulaire/Exo5.module.css'


export const Exo5Component = () => {

    return (

        <div className={style.exo5}>
            <h2>Notre calculatrice :</h2>
            <div className={style.exo5Container}>
                <p>
                    <span>Nb1 : </span>
                    <span></span>
                </p>
                <p>
                    <span>Nb2 :</span>
                    <span></span>
                </p>
            </div>




        </div>
    )
}