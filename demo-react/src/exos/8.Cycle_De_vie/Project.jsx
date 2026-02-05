import { Counter } from "./Counter";
import style from "./Project.module.css";
import { useState } from "react";
import { nanoid } from "nanoid";

export const Project = () => {
  // Pour créer l'id du projet
  const id = nanoid(8);

  // Donc ici un 'useState' pour pouvoir cacher ou pas le 'counter'
  // Par défaut, ca doit être visible
  const [showCounter, setShowCounter] = useState(true);

  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "mailles",
    },
    {
      id: 2,
      name: "rangs",
    },
  ]);

  return (
    <div className={style.project}>
      <h1>Mon projet Tricot 🧶 n° {id}</h1>

      {projects.map((project) => (
        <div className={style.containerProject}>
          {showCounter && 
            <Counter key={project.id} project={project} />
          }

        {/** Ici on met pas 'showCounter(false)' ==> car qd on reclique, revient pas sur true */}
        <button
          onClick={() => setShowCounter(!showCounter)}
          className={ showCounter ? style.show : style.hide }
        >
          {showCounter ? "Hide Content" : "Show Content"}
        </button>
        </div>  
      ))}
    </div>
  );
};
