import { useState } from 'react';
import style from './ToDo.module.css';
import { Todo } from './ToDo';
import { useForm } from 'react-hook-form';

export const ToDoList = () => {
    const [todos, setTodos] = useState( [
        { 
            id: 1, 
            name: 'Titre de séjour', 
            description: 'Envoyer le formulaire A56845Ae698 pour récupérer mon accent',
            priority: 'high',
            complete: false 
        },
        { 
            id: 2, 
            name: 'Tondre', 
            description: 'Faut tondre la pelouse là, on voit plus Tchoupo quand il va dans le jardin', 
            priority: 'middle', 
            complete: true
        },
        {
            id : 3,
            name : 'Tricoter un slip',
            description : 'C\'est pour Taylor. Parce que.',
            priority : 'low',
            complete : false 
        },
        {
            id : 4,
            name : 'Tricoter un bonnet',
            description : 'C\'est pour Soup, il a froid aux oreilles 😔',
            priority : 'high',
            complete : false 
        },
        {
            id : 5,
            name : 'Corriger l\'exercice',
            priority : 'middle',
            complete : false
        }
    ]);

    // Ici le "onChange permet que les validations se déclare à chaque changements,
    // pas seulement au submit"

    // Ici le 'handleSubmit' vient de 'useForm' donc 'preventDefault' etc ==> déjà fait 
    const { register, handleSubmit, reset, formState : { errors }} = useForm({
        mode : 'onChange',
        defaultValues : {
            name : '',
            description : '',
            priority : 'low'
        }
     });

    const [filter, setFilter] = useState('');

    const filterTodo = () => {
        if(filter === 'high') {
            return todos.filter(todo => todo.priority === 'high');
        }

        if(filter === 'done') {
            return todos.filter(todo => todo.complete === true);
        }

        if(filter === 'todo') {
            return todos.filter(todo => todo.complete === false);
        }

        return todos;
    }

     // On a plus qu'à transmettre cette fonction au 'handleSubmit'
     const addTodo = (data) => {
        // Ici cela permet qd on a supprimé toutes les todos
        // Qd on en recréé une, que l'id recommence à 1

        // Donc au début de la ternaire :
        // - si la longueur des todos > 1, tu prend l'id de la dernière et tu fais +1
        // - Ausinon tu mets 1
        let newId = todos.length > 0 ?
            Math.max(...todos.map(todo => todo.id) ) + 1 : 1

        const taskToAdd = {
            ...data,
            id : newId,
            complete : false
        }
        
        //ajouter la tâche à la liste
        setTodos([...todos, taskToAdd]);
        reset();

     }

     // Pour supprimer une todo
     // On filtre en disant, tu reprends toutes les id, sauf 'l'id' de la todo supprimé
     const deleteTodo = (id) => {
        console.log(id);
            
        setTodos(todos.filter(todo => todo.id !== id));
     }

    const toggleComplete = (id) => {
        // La liste des todos devient une nouvelle liste ou on parcourt chaque élément. Si un élément avec l'id reçu en paramètre est trouvé, on modifie son statut complete et pour chaque élément, on renvoie l'élément 
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.complete = !todo.complete;
            }
            return todo
        }))
    }


    return (
        <div className={style.container}>

            <div className={style.form}>
                <form  onSubmit={handleSubmit(addTodo)} className={style.formadd}>

                    <h2>Ajouter une tâche</h2>

                    <div className={style.group}>
                        <label htmlFor="name">Nom</label>
                        <input id="name" type="text" {...register('name', { required : true })} />
                        {
                            // errors = { }
                            errors.name?.type === 'required' &&
                            <span className={style.error}>Ce champs est requis</span>
                        }

                    </div>

                    <div className={style.group}>
                        <label htmlFor="desc">Description</label>
                        <textarea id="desc" {...register('description', { maxLength : 200 })} />
                        {
                            errors.description?.type === 'maxLength' &&
                            <span className={style.error}>Maximum 200 caractères</span>
                        }
                    </div>

                    <div className={style.group}>
                        <label htmlFor="prio">Priorité</label>
                        <select id="prio" {...register('priority', { required: true })}>
                            <option value="low">Normal</option>
                            <option value="medium">Moyenne</option>
                            <option value="high">Haute</option>
                        </select>
                    </div>


                    <input type="submit" value="Ajouter" />

                </form>
            </div>

            <div className={style.todos}>

                <select onChange={(e) => setFilter(e.target.value)}>
                    <option value="">Toutes</option>
                    <option value="high">Urgentes</option>
                    <option value="done">Terminées</option>
                    <option value="todo">À faire</option>
                </select>

                <div className={style.box}>
                    {
                        filterTodo().map(todo => <Todo key={todo.id} todo={todo} onDelete={deleteTodo} onToggleComplete={toggleComplete} />)
                    }
                </div>
            </div>
        </div>
    )
}

