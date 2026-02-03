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
        // Dans event, nous avons des informations sur les champs qui viennent déclencher l'évènement
        // Le nom du champ
        const name = event.target.name;
        console.log(name);
        // le type du champ(number, text, password) 
        const type = event.target.type;
        console.log(type);
        // TODO Modifier la bonne valeur de splitForm en fonction du name et du type après manger

        setSplitForm(prev => {
            const newSplitForm = {
                ...prev, 
                // On récupère tout ce qui se trouve déjà dans prev, c'est a dire dans splitForm
                // ensuite, on modifie juste la propriété qui nous intéresse
                
                // splitForm?name => existe pas dans splitForm
                // splitForm[name] => va chercher la propriété qui s'appelle comme la chaine contenue dans la variable name 
                // splitForm['bill'] => ex : si name contient 'bill', ira chercher la propriété qui s'appelle bill

                /** Si le type du champ est une checkbox , la valeur se trouve dans la propriété checked et ets un booléen
                 * Si le type de champ est un number, on va parse la valeur en nombre
                 * Si ni l'un, ni l'autre, on prend la valeur telle quelle */
                [name] : (type === 'checkbox') ? 
                event.target.checked :
                (type === 'number') ?
                event.target.valueAsNumber :
                event.target.value
            }
            return newSplitForm;
            // ou return {...}
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // On empêche le rechargement de la page

        // Pour remettre le total à 0 quand on clique sur le su
        setTotalPerPerson(undefined);

        // On vérifie ici, que la note et le nbre de personne soit au-dessus de 0
        if(splitForm.bill > 0 && splitForm.nbPerson > 0) {
            setTotalPerPerson( (splitForm.bill + (splitForm.tips/100)) / splitForm.nbPerson);
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }

    return (
    <div className={style.demo6Biss}>
        <h2>Split' O Resto</h2>
    
            <form onSubmit={handleSubmit}>
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
                    {/** value={5} sur le select ==> ca veut dire que c'est la valeur par défaut */}
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