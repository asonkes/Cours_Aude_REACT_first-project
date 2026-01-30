import style from "../7_Interaction/Demo7.module.css";

export const Demo7Child = (props) => {
  const { child, onAdoptReveal } = props;
  // child -> descendant -> on a reçu cette information du parent
  // En effet, les données (name, skin etc) viennent du parent !!!
  const { id, name, skin, adopted } = child;

  // On AdoptedReveal -> montant -> on a reçu cette fonction
  // à déclencher via le parent mais on va la déclencher ici

  return (
    <div className={style.enfant}>
      <h3>
        {skin} : Je suis {name}
      </h3>

      {/** On déclenche l'évènement onAdoptedReveal en envoyant l'id de l'enfant sur lequel
        on a cliqué (on peut envoyer ce que l'on veut, pas forcément un id) */}

      {adopted ? (
        <span>Je suis adopté</span>
      ) : (
        <button
          onClick={() => {
            onAdoptReveal(id);
          }}
        >
          Annoncer que je suis adopté(e)
        </button>
      )}
    </div>
  );
};
