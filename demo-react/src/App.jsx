import './App.css'
import { Demo1Component } from '../src/demos/1_Base_Component/Demo1Component';
import { Exo1Component} from '../src/exos/1_Creation_Component/Exo1Component';
import { Demo2 } from './demos/2_Conditionnel/Demo2';

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
        image="https://www.google.com/url?sa=t&source=web&rct=j&url=https%3A%2F%2Fcat-bnb.fr%2Fmaine-coon-le-chat-geant-au-coeur-tendre%2F&ved=0CBYQjRxqFwoTCOD874Wvn5IDFQAAAAAdAAAAABAI&opi=89978449"
        type="chat" 
      />
      {/** Au cas où, l'animal n'a pas de nom */}
      <Demo2 
        owner="JanMi" 
        havePet={true} 
        image="https://www.google.com/url?sa=t&source=web&rct=j&url=https%3A%2F%2Fwww.santevet.be%2Ffr%2Farticles%2Fdoug-le-chien-le-plus-moche-du-monde&ved=0CBYQjRxqFwoTCNCxmPiun5IDFQAAAAAdAAAAABAI&opi=89978449"
        type="chien"
      />
      {/** Au cas où l'animal n'a pas d'image */}
      <Demo2 
        owner="Aurélien" 
        havePet={true} 
        image="Chépu"
        type="chat"
      />
    </>
  )
}

export default App
