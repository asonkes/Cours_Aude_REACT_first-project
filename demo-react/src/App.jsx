import './App.css'
import { Demo1Component } from '../src/demos/1_Base_Component/Demo1Component';
import { Exo1Component} from '../src/exos/1_Creation_Component/Exo1Component';
import { Demo2 } from './demos/2_Conditionnel/Demo2';
import { Exo2Component } from './exos/2_Exo_Conditionnel/Exo2Component';
import style from '../src/exos/2_Exo_Conditionnel/Exo2.module.css';
import { Demo3 } from './demos/3_Collections/Demo3';

function App() {

  return (
    <>
      {/***************** DEMO1Component ********************************** */}
      <p>{new Date().toLocaleDateString('fr')}</p>
      
      <h1> Salut !!!</h1>
      {/** Si on veut mettre autre chose en valeur, autre chose qu'une STRING
       * On doit mettre des accolades
       */}
      <Demo1Component name='HTML' type='Front-End' difficulty={1}/>
      <Demo1Component name='Express' type='Back-End' difficulty={5}/>
      {/** On peut mettre des valeurs par défaut si on a rien mis dans notre composant */}
      <Demo1Component/>

      {/***************** EXO1Component ********************************** */}
      <Exo1Component name="Audrey" age={25}/>
      {/** Si pas définit, si on veut une valeur pour l'âge par défaut, on met dans les props: age=18 */}
      <Exo1Component name="Dylan"/>

      {/***************** DEMO2 ********************************** */}
      <Demo2 
        owner="Khun" 
        havePet={false}
      />
      <Demo2 
        owner="Aude" 
        havePet={true} 
        name="Soup" 
        image="https://cdn-s-www.ledauphine.com/images/4BA8674C-7855-482F-B8A3-F0A9D72E2994/NW_raw/peanut-est-un-melange-de-chihuahua-et-de-shitzu-photo-afp-1403467772.jpg"
        type="chat" 
      />
      {/** Au cas où, l'animal n'a pas de nom */}
      <Demo2 
        owner="JanMi" 
        havePet={true} 
        image="https://cat-bnb.fr/wp-content/uploads/2025/09/Main-Coon-300x225.webp"
        type="chien"
      />
      {/** Au cas où l'animal n'a pas d'image */}
      <Demo2 
        owner="Aurélien" 
        havePet={true} 
        name="Chépu"
        type="chat"
      />

      {/***************** EXO1Component ********************************** */}
      <div className={style.container}>
        <Exo2Component 
          isAvailable = {false}
          name="Chaussures"
          image="https://www.decathlon.be/fr/p/mp/skechers-femme-arch-fit-2-0-big-league-sneakers-gris-bleu-marine/063e720f-6d78-42ca-bdc6-cc199a979499/c195c60c5"
          description="Ces chaussures ont un confort exceptionnel"
          price={80}
          promoPrice={65}
        />
        <Exo2Component 
          isAvailable = {true}
          image="https://media.smartbox.com/pim/1000001984256280205542.jpg"
          name="Chocolat"
          description="Mon petit plaisir"
          price={35}
          promoPrice={25}
        />
        <Exo2Component 
          isAvailable = {true}
          name="Plante"
          image="https://gachwala.in/wp-content/uploads/2022/06/IMAGE-1-13.webp"
          description="Cette plante vous ravira de joie"
          price={35}
        />
        <Exo2Component
          isAvailable = {true}
          name="Pull"
          image="https://hobbii.fr/cdn/shop/files/front-2_f096f400-8350-468d-aa04-296164141daf.jpg?crop=center&height=557&v=1766491005&width=557"
          price={25}
          promoPrice={10}
        />
      </div>

      {/***************** Demo3 ********************************** */}
      <Demo3 />
    </>
  )
}

export default App
