import style from "../6.Exo_TodoList/Container.module.css";
import { ListItem } from "./ListItem";
import { useState} from "react";
import { useForm } from "react-hook-form";

export const Container = () => {

    // Ici, on met un "useState" sur les données pour pouvoir les modifier
    // Si on devait juste les récupérer, on pouvait ne pas le mettre
    const [tasks, setTasks] = useState([
        {
            id: 1,
            name: "Acheter du café",
            decription: "Prendre ce café pour me réveiller",
            finish : false
        },
        {
            id: 2,
            name: "Réaliser l'exercice",
            description: "Créer l'application 'Todo List' ",
            finish : false
        },
        {
            id: 3,
            name: "Terminer mes cours de UDemy",
            description: "Pour me donner confiance en moi",
            finish : true
        }
    ]);

    //console.log(tasks);

    {/** Là c'ets la fonctionnalité pour supprimer */}
    const deleteTask = (id) => {
        console.log(id);
        
        setTasks(tasks.filter((task) => task.id !== id));
    };

    // ici on fait un state vide pour la valeur que l'on va mettre dans les input
    const [valueTask, setValueTask] = useState("");

    // ici, on a mettre le useForm
    const {
        register, 
        handleSubmit, 
        formState: {errors},
    } = useForm({defaultValues: {
        name: '',
        description: '',
        mode: 'En cours'
    },
    mode: "onChange"
});

    // /** Ici manière de UDemy */
    // const handleSubmit = (event) => {
    //     event.preventdefault();

    //     setTasks([...tasks, { id: valueTask, name: valueTask, description: valueTask, finish: valueTask }]);

    //     setValueTask("");
    // }

    // Et ca sur les input :
    //  onChange={(event) => setValueTask(event.target.value)}

    return (
        <div className={style.container}>
            <h1>TodoList</h1>

            <h2>‼️‼️‼️Ajouter une nouvelle tâche‼️‼️‼️</h2>
            <form onSubmit={handleSubmit}>
                <div className={style.containerForm}>
                    <label htmlFor="name">Nom : </label>
                    <input 
                    id="name" 
                    name="name" 
                    type="text"  
                    {...register("name", {
                        required: true
                    })}
                    />
                    
                </div>
                <div className={style.containerForm}>
                    <label htmlFor="description">Description : </label>
                    <input 
                    id="description" 
                    name="description"
                    type="text" 
                    {...register("description", {
                        required: true
                    })}
                />
                </div>
                <div>
                    <label htmlFor="mode">Priorité : </label>
                    <select aria-label="mode" name="mode" id="mode"
                    {...register("mode", {
                        required: true
                    })}
                    >
                    <option>En cours</option>
                    <option>Urgent</option>
                    <option>Terminé</option>
                </select>
                </div>
                <button>Ajouter</button>
            </form>

            <h2>🏢🏢🏢Liste des tâches 🏢🏢🏢</h2>
            <ul>
                {tasks.length === 0 && 
                    <span className={style.error}>⚠️⚠️⚠️ Il n' a plus de tâche à afficher ⚠️⚠️⚠️</span>
                }

                { tasks.map(task => (<ListItem key={task.id} task={task} deleteTask={deleteTask}/>))}
            </ul>
        </div>
    )
}