import { useEffect, useState } from "react";
import style from "./Counter.module.css";

export const Counter = (props) => {
  const { project } = props;
  const { name } = project;

  // Il faudrait mettre ici, un state, pour pouvoir commencer le compteur à '0'
  const [count, setCount] = useState();

  /** Erreur que tu as fait poulette */
  /** Pour le calcul : pas => count+1 */
  /** mais il faut mettre setCount(count+1)
   * PK???
   * Tu reprends l'ancien état+1=> count +1 mais il faut mettre le nouvel état devant
   */
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    return;
  };

  // Alors ici, j'ai mis à jour mon 'count' dans le localStorage
  // Mais ici, t'étais pas loin louloute, 'tu as reçu le 'name''
  // Donc ici, tu met le name, en 'key'
  // Et il fait automatiquement les 2 ==> comme ça tu peux les différencier !!!! 

  // Ici Ce 'UseEffect' ci s'utilise chaque fois que l'élément est modifié
  // Chaque fois que la valeur de l'élément est modifié
  // Car dans le tableau on a mis 'count'
  // C'est pour cela que chaque fois qu'il y a une modification, on doit faire 'set' l'information
  // Ici ca fonctionne ==> car dans les [] => 'count' et PAS de 'SET' dans le 'USEEFFECT' 
  useEffect(() => {
    if(!isNaN(count)){
      localStorage.setItem(name, count);
    }

    return() => {
    } 
  }, [count]);

  // Ici ce 'UseEffect' ci s'utilise chaque fois qu'il y a un rafraichissement
  // D'une page ou d'une donnée
  // Là, on doit aller récupérer l'information (donc on doit faire un 'getItem')

  // Ici ca fonctionne car dans les [] ==> pas de données
  // Et en + alors dans le USEEFFECT ==> on fait un SET
  // Mais on peut pas mettre 'count' dans le tableau et en + 'setCount' ==> boucle infinie
  useEffect(()=>{
    const newCount = parseInt(localStorage.getItem(name));
    console.log(`valeur pour ${name} : ${newCount}`);
    
    setCount(newCount);
  }, [])

  return (
    <>
      {/** Condition avec 'style' mettre ternaire et pas d'accolade !!! */}
      <div className={style.compteur}>
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
      </div>
    </>
  );
};
