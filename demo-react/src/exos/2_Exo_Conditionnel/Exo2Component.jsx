import style from '../2_Exo_Conditionnel/Exo2.module.css';

export const Exo2Component = (props) => {

    const {isAvailable, name, image, description, price, promoPrice} = props;

    /** Si le produit n’est plus vendu, affichez à peu près (vous pouvez rajouter une image si vous voulez) */
    if(!isAvailable) {
        return(
            <div className={style.product}>
                <p className={style.name}>{name} n'est plus à vendre !!!</p>
                <div className={style.unsold}>
                    <icon className={style.icon}>❌</icon>
                </div>
            </div>
        )
    }

    return (
        <div className={style.product}>
            <p className={style.name}>{name}</p>
            <img width='150px' src={image} />

            {/** si le produit possède une description, on l’affiche dans un <p> par exemple sinon, on affiche rien */}
            {description && <p className={style.text}>{description}</p>}

            {/** si le produit possède un promoPrice, affichez le promoPrice sinon afficher le price tout court */}
            <div>
                <span className={style.promo}>Prix : {price.toFixed(2)} €</span>
                {promoPrice && <span className={style.promoPrice} >Promo: {promoPrice.toFixed(2)} €</span>}
            </div>

            {/** si le produit possède un promoPrice, affichez la card du produit un peu différemment (le contour en rouge, jsp, faites ce que vous voulez) */}

        </div>
    )
}