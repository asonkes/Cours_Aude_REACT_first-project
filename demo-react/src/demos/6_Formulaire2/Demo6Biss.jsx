import style from '../6_Formulaire2/Demo6Biss.module.css';
import { useState } from "react"

export const Demo6Biss = () => {
    // 2) un 'state' de type 'objet' qui représente tout le formulaire (qd formulaire grand)
    // Ici se sera avec une librairie ==> autre façon de faire
    const [splitForm, setSplitForm] = useState({
        bill: 0,
        nbPerson: 0,
        tips: 5
    });

    const [isValid, setIsValid] = useState(true);
    const [totalPerPerson, setTotalPerPerson] = useState();

    const handleField = (event) => {
        // console.log(event);
        // Dans event, nous avons des sinformations sur les champs qui viennent déclencher l'évènement
        // Le nom du champ
        console.log(event.target.name);
        // le type du champ^(number, text, password) 
        console.log(event.target.type);
        
        
    }

    return (
    <div className={style.demo6Biss}>
        <h2>Split' O Resto</h2>
    
            <form>
                <div>
                    <label htmlFor="bill">Total de la note :</label>
                    {/** On récupère la valeur dans l'input 
                     * De base il ets vide
                     * Qd on le rempli, la valeur change ==> donc 'setBill'
                     * L'état ou valeur est modifiée
                    */}
                    <input id="bill" name="bill" type="number" value={splitForm.bill} onChange={handleField}/>
                </div>

                <div>
                    <label htmlFor="nbPerson">Nombre de personnes :</label>
                    <input id="nbPerson" name="nbPerson" type="number" value={splitForm.nbPerson} onChange={handleField} />
                </div>

                <div>
                    <label htmlFor="tips">Pourboire :</label>
                    {/** value={5} sur le select ==> ca veut dire que c'ets la valeur par défaut */}
                    <select id="tips" name="tips" value={splitForm.tips} onChange={handleField}>%
                            {/** UN client peut ne rien prendre */}
                        <option value={0}>Aucun</option>
                        <option value={5}>5%</option>
                        <option value={10}>10%</option>
                        <option value={15}>15%</option>
                    </select>
                </div>

                <button>Spliter💸</button>
                { !isValid && <span>⚠️ Vous devrez mettre une note et un nombre de personnes positif</span>}
            </form>

            {/** Si le nombre  */}
            {totalPerPerson && <div>Vous devez chacun(e) payer : {totalPerPerson.toFixed(2)}</div>}
        </div>
    )
}