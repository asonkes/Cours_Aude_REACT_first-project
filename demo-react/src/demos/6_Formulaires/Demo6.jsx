import style from '../6_Formulaires/Demo6.module.css';
import { useState } from "react"

export const Demo6 = () => {
    // Pour gérer les formulaires nativement en React avec le state, on a 2 options :

    // 1) Un 'state' pour chaque donnée du formulaire (ca va pour un formulaire court)

    // Définir le prix de l'addition
    const [bill, setBill] = useState(0);
    // POur définir le nombre de personnes
    const [nbPerson, setNbPerson] = useState(0);
    // Relié au select, la value de base est à 5
    const [tips, setTips] = useState(5);
    // Pour savoir le prix par le nombre de personnes
    const [totalPerPerson, setTotalPerPerson] = useState();
    // Pour savoir si le formulaire est valide ou pas (si on doit affciher un message d'erreur ou pas)
    const [isValid, setIsValid] = useState(true);

    // 2) un 'state' de type 'objet' qui représente tout le formulaire (qd formulaire grand)
    // Voir Demo6Biss

    // Gestion du Submit dans le code 
    // On lui met un évènement  
    const handleSubmit = (event) => {
        event.preventDefault(); // On empêche le rechargement de la page

        // On vérifie ici, que la note et le nbre de personne soit au-dessus de 0
        if(bill > 0 && nbPerson > 0) {
            setTotalPerPerson( (bill + (tips/100)) / nbPerson);
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }

    return (
        <div className={style.demo6}>
            <h2>Split' O Resto</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="bill">Total de la note :</label>
                    {/** On récupère la valeur dans l'input 
                     * De base il ets vide
                     * Qd on le rempli, la valeur change ==> donc 'setBill'
                     * L'état ou valeur est modifiée
                    */}
                    <input id="bill" type="number" value={bill} onChange={ (event) => setBill(event.target.valueAsNumber)}/>
                </div>

                <div>
                    <label htmlFor="nbPerson">Nombre de personnes :</label>
                    <input id="nbPerson" type="number" value={nbPerson} onChange={ (event) => setNbPerson(event.target.valueAsNumber)}/>
                </div>

                <div>
                    <label htmlFor="tips">Pourboire :</label>
                    {/** value={5} sur le select ==> ca veut dire que c'ets la valeur par défaut */}
                    <select id="tips" value={tips} onChange={ (event) => setTips(event.target.value)}>%
                         {/** UN client peut ne rien prendre */}
                        <option value={0}>Aucun</option>
                        <option value={5}>5%</option>
                        <option value={10}>10%</option>
                        <option value={15}>15%</option>
                    </select>
                </div>

                <button>Spliter💸​</button>
                { !isValid && <span>⚠️ Vous devrez mettre une note et un nombre de personnes positif</span>}
            </form>

            {/** Si le nombre  */}
            {totalPerPerson && <div>Vous devez chacun(e) payer : {totalPerPerson.toFixed(2)}</div>}
        </div>
    )
}