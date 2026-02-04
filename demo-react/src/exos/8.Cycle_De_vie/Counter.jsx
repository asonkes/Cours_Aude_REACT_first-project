import { useEffect, useState } from "react";
import style from "./Counter.module.css";

export const Counter = (props) => {
  const { project } = props;
  const { name } = project;

  // Il faudrait mettre ici, un state, pour pouvoir commencer le compteur à '0'
  const [count, setCount] = useState(0);

  /** Erreur que tu as fait poulette */
  /** Pour le calcul : pas => count+1 */
  /** mais il faut mettre setCount(count+1)
   * PK???
   * Tu reprends l'ancien état+1=> count +1 mais il faut mettre le nouvel état devant
   */
  const increment = () => {
    setCount(count + 1);
    console.log(count);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      console.log(count);
    }
    return;
  };

  // Donc ici un 'useState' pour pouvoir cacher ou pas le 'counter'
  // Par défaut, ca doit être visible
  const [showCounter, setShowCounter] = useState(true);

  // Alors ici, j'ai mis à jour mon 'count' dans le localStorage
  // mais il faut différencier les 2 ==> différencier avec l'id !!! Demander Aude car là, il y a qu'un seul composant !!!
  useEffect(() => {
    localStorage.setItem("localStorage", count);
  }, [count]);

  return (
    <>
      {/** Condition avec 'style' mettre ternaire et pas d'accolade !!! */}
      <div className={showCounter ? style.compteur : style.none}>
        {showCounter && (
          <div className={style.container}>
            <p className={style.title}>{name}</p>
            <div className={style.count}>
              <button onClick={decrement}>➖</button>
              <input readOnly type="text" value={count} />
              <button onClick={increment} type="number">
                ➕
              </button>
            </div>
          </div>
        )}
        {/** Ici on met pas 'showCounter(false)' ==> car qd on reclique, revient pas sur true */}
        <button
          onClick={() => setShowCounter(!showCounter)}
          className={style.hide}
        >
          {showCounter ? "Hide Content" : "Show Content"}
        </button>
      </div>
    </>
  );
};
