import { Compteur } from "./Compteur";
import style from './Project.module.css';
import { useState } from "react";
import { nanoid } from 'nanoid'

export const Project = () => {

    const [projects, setProjects] = useState([
        {
            id: 1,
            name: "mailles"
        }, 
        {
            id: 2,
            name: "rangs"
        }
    ]);

    // Pour créer l'id du projet 
    const id = nanoid(8);

    return (
        <div className={style.project}>
            <h1>Mon projet Tricot 🧶 n° {id}</h1>

            {projects.map(project => (<Compteur key={project.id} project={project}/>) )}
        </div>
    )
}
