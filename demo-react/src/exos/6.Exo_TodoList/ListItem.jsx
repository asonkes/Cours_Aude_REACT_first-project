import style from '../6.Exo_TodoList/ListItem.module.css';

export const ListItem = (props) => {

    // Mais c'est bien une fonction, donc à rajouter, au même niveau que props
    const {task, deleteTask} = props;

    // Et la fonction n'appartient pas aux paramètres de 'task'
    const {id, name, description} = task;

  return (
    <>
        <li className={style.list}>
            <p className={style.text}>
                <span>{name}</span>
                <span>{description}</span>
            </p>
            <div>
                {/** Fonction fléchée car on récupère l'id comme paramètre */}
                {/** Si pas 'd'id' ==> pas de fonction fléchée */}
                <button className={style.finish}>Terminer</button>
                <button onClick= {() => deleteTask(id)} className={style.delete}>Supprimer</button>
            </div>
        </li>
    </>
  )
}
