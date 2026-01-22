import './App.css'
import { Demo1Component } from '../src/demos/1_Base_Component/Demo1Component';
import { Exo1Component} from '../src/exos/1_Creation_Component/Exo1Component';


function App() {

  return (
    <>
      
      <p>{new Date().toLocaleDateString('fr')}</p>
      
      <h1> Salut !!!</h1>
      {/** Si on veut mettre autre chose en valeur, autre chose qu'une STRING
       * On doit mettre des accolades
       */}
      <Demo1Component name='HTML' type='Front-End' difficulty={1}/>
      <Demo1Component name='Express' type='Back-End' difficulty={5}/>
      {/** On peut mettre des valeurs par défaut si on a rien mis dans notre composant */}
      <Demo1Component/>

      <Exo1Component name="Audrey" age={25}/>
      {/** Si pas définit, si on veut une valeur pour l'âge par défaut, on met dans les props: age=18 */}
      <Exo1Component name="Dylan"/>
    </>
  )
}

export default App
