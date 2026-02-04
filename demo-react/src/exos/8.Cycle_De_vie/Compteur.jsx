import { useState } from 'react';
import style from './Compteur.module.css';

export const Compteur = (props) => {

    const {project} = props;
    const {name} = project;

    // Il faudrait mettre ici, un state, pour pouvoir commencer le compteur à '0'
    const [count, setCount] = useState(0);

    /** Erreur que tu as fait poulette */
    /** Pour le calcul : pas => count+1 */
    /** mais il faut mettre setCount(count+1)
     * PK???
     * Tu reprends l'ancien état+1=> count +1 mais il faut mettre le nouvel état devant
     */
    const increment = () => {

      setCount(count+1);
      console.log(count);
    }

    const decrement = () => {
      setCount(count-1);
      console.log(count);
    }

  return (
    <div className={style.compteur}>
        <div className={style.container}>
            <p className={style.title}>{name}</p>
            <div className={style.count}>
              <button onClick={increment} type="number">➕</button>
              <span>{count}</span>
              <button onClick={decrement}>➖</button>
            </div>
            <button className={style.hide}>Hide</button>
        </div>
    </div>
  )
}

// ici le compteur ne peut pas aller en-dessous de 0