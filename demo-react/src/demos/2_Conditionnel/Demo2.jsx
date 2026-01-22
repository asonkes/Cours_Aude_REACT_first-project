import style from '../2_Conditionnel/Demo2.module.css';

export const Demo2 = (props) => {

    const {owner, havePet, name, image, type} = props;

        {/** Si le owner ne possède pas d'animal, on va renvoyer un rendu différent de s'il en possède un */}
        if(!havePet) {
            return (
                <div className={style.nopet}>
                    /***************** DEMO2 ********************************** */
                    <p>Oh non {owner} ! Vous ne possèdez pas d'animal !!!</p>
                    <a href="https://www.veeweyde.be/">
                        Cliquez-ici pour en adopter un !!
                    </a>
                </div>
            )
        }

        return(
            <div className={style.pet}>
                <p>Ohlala {owner} ! Dis-m'en plus sur ton animal !!! </p>
            </div>
        )
}