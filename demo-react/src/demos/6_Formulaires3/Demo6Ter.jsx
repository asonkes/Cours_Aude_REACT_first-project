import { useState } from "react";
import { useForm } from "react-hook-form";
import style from "../6_Formulaires3/Demo6Ter.module.css";

// Gestion formulaire avec librairie
// Celle que nous allons utiliser est React-hook-Form
// http://react-hook-form.com
// Installation : npm install react-hook-form
export const Demo6Ter = () => {
  const [totalPerPerson, setTotalPerPerson] = useState(0);

  // Nous avons maintenant accès une nouvelle Hook qui s'appelle 'useForm' et de laquelle,
  // On va extraire plusieurs choses
  // - register -> c'est ce qui va nous permettre "d'enregistrer un nouveau champ"
  // Il fait la value={state} + onChange={fonctionPourChangerLeState} pour nous, en gros
  // - handleSubmit -> C'est une fonction qui fait le prevenDefault et qui vous renvoie le state qu'elle a fabriqué
  // - formState -> L'état du formulaire (de formState on, va récupérer 'errors' qui contient toutes les erreurs du formulaire)

  // Ici avec le 'onChange' dés qu'on insère des éléments dans l'input et qu'on détecte que se sont pas les bonnes valeurs,
  // On déclenche le message d'erreur
  // Si on doit remplir du texte
  // ET qu'on met des chiffres ==> erreur
  // C'est plus au 'submit'
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      bill: 0,
      nbPerson: 0,
      tips: 5,
    },
  });

  const splitBill = (data) => {
    console.log(data);
    setTotalPerPerson(
      (data.bill + data.bill * (data.tips / 100)) / data.nbPerson,
    );
    // C'est pour montrer, mais rest() pas top !!!, ca va effacer tout nos données
    reset();
  };

  return (
    <div className={style.demo6Ter}>
      <h2>Split' O Resto</h2>

      {/** handleSubmit ==> 2 fonctions ne paramètre
       * 1ere fonction, c'est qd tout va
       * 2eme fonction, c'est qd rien ne va
       * ==> 2eme fonction ==> fonction fléchee pour qu'il soit exécuté au moment où je le lis ==> même chose que sur 'onClick'
       */}
      <form
        onSubmit={handleSubmit(splitBill, () => setTotalPerPerson(undefined))}
      >
        <div>
          <label htmlFor="bill">Total de la note :</label>
          {/** on met ...register et le nom que l'on veut lui attribuer */}
          <input
            id="bill"
            name="bill"
            type="number"
            {...register("bill", {
              valueAsNumber: true,
              required: true,
              min: 10,
            })}
          />

          {
            // là, on fait apparaitre l'erreur que qd l'élément est requis
            // ? car il faut qu'elle soit undefined pour que l'erreur s'affiche
            // type = rien à vois avec type (number, text etc)
            errors["bill"]?.type === "required" && (
              <span>Ce champ est requis</span>
            )
          }

          {
            // là, on fait apparaitre l'erreur que qd l'élément n'a pas un minimun de valeur
            // ? car il faut qu'elle soit undefined pour que l'erreur s'affiche
            errors["bill"]?.type === "min" && (
              <span>Vous devez mettre une valeur minimum de 10€</span>
            )
          }
        </div>

        <div>
          <label htmlFor="nbPerson">Nombre de personnes :</label>
          <input
            id="nbPerson"
            name="nbPerson"
            type="number"
            {...register("nbPerson", {
              valueAsNumber: true,
              required: true,
              min: 1,
            })}
          />

          {
            // là, on fait apparaitre l'erreur que qd l'élément est requis
            // ? car il faut qu'elle soit undefined pour que l'erreur s'affiche
            // type = rien à vois avec type (number, text etc)
            errors["nbPerson"]?.type === "required" && (
              <span>Ce champ est requis</span>
            )
          }

          {
            // là, on fait apparaitre l'erreur que qd l'élément n'a pas un minimun de valeur
            // ? car il faut qu'elle soit undefined pour que l'erreur s'affiche
            errors["nbPerson"]?.type === "min" && (
              <span>Vous devez au moins être 1 personne</span>
            )
          }
        </div>

        <div>
          <label htmlFor="tips">Pourboire :</label>
          {/** value={5} sur le select ==> ca veut dire que c'est la valeur par défaut */}
          <select
            id="tips"
            name="tips"
            // pattern sert a voir si notre regex fonctionne ou pas
            {...register("tips", { valueAsNumber: true, required: true })}
          >
            %{/** UN client peut ne rien prendre */}
            <option value={0}>Aucun</option>
            <option value={5}>5%</option>
            <option value={10}>10%</option>
            <option value={15}>15%</option>
          </select>
        </div>

        <button>Spliter💸</button>
      </form>

      {/** Si le nombre  */}
      {totalPerPerson && (
        <div>Vous devez chacun(e) payer : {totalPerPerson.toFixed(2)}€</div>
      )}
    </div>
  );
};
