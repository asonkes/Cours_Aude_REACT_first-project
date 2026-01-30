import style from "../7_Interaction/Demo7.module.css";
import { Demo7Child } from "./Demo7Child";
import { useState } from "react";

// C'est notre composant "parent"
export const Demo7 = () => {
  const [children, setChildren] = useState([
    {
      id: 1,
      name: "Timéon",
      skin: "🧓",
      adopted: false,
    },
    {
      id: 2,
      name: "Cunégonde",
      skin: "👧",
      adopted: false,
    },
    {
      id: 3,
      name: "Constantin",
      skin: "👴",
      adopted: false,
    },
  ]);

  // ON récupère l'id qui est émit lors du déclenchement de l'event
  const changeAdoptionStatus = (id) => {
    console.log(id);

    const newChildren = children.map((child) => {
      if (child.id === id) {
        child.adopted = true;
        return child;
      } else {
        return child;
      }
    });

    setChildren(newChildren);
  };

  return (
    <div className={style.parent}>
      <h2>Je suis JeanMi, le parent</h2>

      <p>Voici la liste de mes enfants :</p>

      {/** Pour envoyer des informations dans l'enfant, on passe par les props
       * child est l'enfant qu'on veut envoyer au composant pour qu'il s'affiche
       * chaque enfant, va pouvoir envoyer une information au parent, on fera
       * également ça dans les props, en général, le nom qu'on donne commence
       * par 'on' + ActionAFaire
       */}
      {children.map((child) => (
        <Demo7Child
          key={child.id}
          child={child}
          onAdoptReveal={changeAdoptionStatus}
        />
      ))}
    </div>
  );
};
