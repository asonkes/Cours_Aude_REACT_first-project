import style from '../5_Exo_Formulaire/Exo5.module.css'


export const Exo5Component = () => {

    return (

        <div className={style.exo5}>
            <h2>Notre calculatrice :</h2>
            <div className={style.exo5Container}>
                <div className={style.exo5Numbers}>
                    <p>
                        <span className={style.text1}>Nb1 : </span>
                        <span className={style.text2}>0</span>
                    </p>
                    <div className={style.exo5Operator}>
                        <p className={style.text1}>Opération : </p>
                        <select name="" id="">+
                            <option>+</option>
                            <option>-</option>
                            <option>x</option>
                            <option>/</option>
                        </select>
                    </div>
                    <p>
                        <span className={style.text1}>Nb2 :</span>
                        <span className={style.text2}>0</span>
                    </p>
                </div>
                <div className={style.exo5Calculator}>
                    <button>Calculer</button>
                    <p className={style.text2}>...</p>
                </div>
            </div>
        </div>
    )
}