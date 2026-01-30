// Voir autre façon de faire de Aude avec pattern :)

import { useForm } from "react-hook-form";
import style from "../5_Exo_Formulaire/Exo5.module.css";
import { useState } from "react";

/// !!! Ici la fonction : 'handleSubmit' est fournie par la librairie
// ==> elle possède :
// Elle appelle 'prevenDefault()' => page ne se recharge pas
// Récuupère toutes les valeurs de tous les champs 'register'   ==> c'est pour cela que l'on met register sur les champs 'input'
// lance les règles de validation
// Si tout est valide

export const Exo5Component = () => {
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  // use Form retourne un objet qui a des clés fixes => destructuration
  // register => sert à connecter un champ HTML à 'react-hoo-form'
  // handleSubmit => c'est le gestionnaire du 'submit' du formulaire
  // => il s'exécute qd on clique sur le bouton 'type=submit'
  // formState: {errrors} =>
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nb1: "",
      // pk '' ==> si on met rien ca va être undefined
      nb2: "",
      // Car c'est le 1er dans la liste
      operator: "+",
    },
    mode: "onChange",
  });

  const calculate = (data) => {
    console.log(data);

    // Pour réinitialiser
    resetResult();

    const { number1, number2, operator } = data;

    // Pas oublier de mettre une valeur par défaut, ici 0
    switch (operator) {
      case "+":
        // setResult(number1 + number2)
        setResult(parseFloat(number1) + parseFloat(number2));
        break;
      case "-":
        setResult(number1 - number2);
        break;
      case "x":
        setResult(number1 * number2);
        break;
      case "/":
        if (+number2 === 0) {
          setError("Division par 0 impossible !");
        } else {
          setResult(number1 / number2);
        }
        break;
      default:
        console.log("Oulala une erreur est sruvenue");
        break;
    }
  };

  const resetResult = () => {
    setResult("");
    setError("");
  };

  return (
    <div className={style.exo5}>
      <h2>Notre calculatrice :</h2>
      {/** handleSubmit est reprise ici !!! */}
      {/** setTotal(undefined) ==> permet de gérer les erreurs */}
      <form
        className={style.exo5Container}
        onSubmit={handleSubmit(calculate, () => resetResult)}
      >
        <div className={style.exo5Numbers}>
          <div>
            <label htmlFor="number1" className={style.text1}>
              Nb1 :
            </label>
            {/** Si pas de register, information non récupérée */}
            {/** 'spreadOperator' devant pour récupérer toutes infos de cet input */}
            {/** valueAsNumber ne fonctionne que sur des input de type'number', pas text */}
            <input
              aria-label="nombre1"
              id="number1"
              name="number1"
              type="text"
              className={style.text2}
              {...register("number1", {
                required: true,
                pattern: /^[-]?[\d]+[.]?[\d]*$/,
              })}
            />

            {
              // Ici c'est l'erreur qd l'element est requis
              errors["number1"]?.type === "required" && (
                <span>Ce champ est requis</span>
              )
            }
          </div>
          <div className={style.exo5Operator}>
            <p className={style.text1}>Opération : </p>
            <select
              aria-label="operator"
              name="operator"
              id="operator"
              {...register("operator", { required: true })}
            >
              <option>+</option>
              <option>-</option>
              <option>x</option>
              <option>/</option>
            </select>
          </div>
          <div>
            <label htmlFor="number2" className={style.text1}>
              Nb2 :
            </label>
            {/** Si pas de register, information non récupérée */}
            {/** 'spreadOperator' devant pour récupérer toutes infos de cet input */}
            {/** valueAsNumber ne fonctionne que sur des input de type'number', pas text */}
            <input
              aria-label="number2"
              id="number2"
              name="number2"
              type="text"
              className={style.text2}
              {...register("number2", {
                required: true,
              })}
            />
            {
              // Ici c'est l'erreur qd l'element est requis
              errors["number2"]?.type === "required" && (
                <span>Ce champ est requis</span>
              )
            }
          </div>
        </div>
        <div className={style.exo5Calculator}>
          <button>Calculer</button>
          {/** Permet de pouvoir afficher '0', si pas existant, s'affiche pas */}
          <input aria-label="résultat" type="text" value={result} readOnly />
        </div>
      </form>
    </div>
  );
};
