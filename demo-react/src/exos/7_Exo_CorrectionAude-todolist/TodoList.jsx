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

    const { register, handleSubmit, reset, formState : { errors }} = useForm({
        mode : 'onChange',
        defaultValues : {
            name : '',
            description : '',
            priority : 'low'
        }
     });

     const addTodo = (data) => {
        //ajouter les infos manquantes sur les data
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

     const deleteTodo = (id) => {
        console.log(id);
            
        setTodos(todos.filter(todo => todo.id !== id));
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
                        <select id="prio" {...register('priority', { required : true })}>
                            <option value="low">Normal</option>
                            <option value="medium">Moyenne</option>
                            <option value="high">Haute</option>
                        </select>
                    </div>

                    <input type="submit" value="Ajouter" />

                </form>
            </div>

            <div className={style.todos}>
                <div className={style.box}>

                    {
                        todos.map(todo => <Todo key={todo.id} todo={todo} onDelete={deleteTodo} />)
                    }

                </div>
            </div>
        </div>
    )
   
}
