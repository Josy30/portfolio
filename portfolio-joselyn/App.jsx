import './App.scss';
import backgroundVideo from "./src/assets/fondo5.mp4";
import { Header } from './src/Components/Header/Header';
import { Portada } from './src/Components/Portada/Portada';
import { About } from './src/Components/About/About';
import { Certifications } from './src/Components/Certifications/Certifications';
import { Skills } from './src/Components/Skills/Skills';
import { Projects } from './src/Components/Projects/Projects';
import { Contact_me } from './src/Components/Contact_me/Contact_me';


function App() {

        
  

  return (
    <div className='background'>
        <video loop autoPlay muted id="bg-video">
          <source src={backgroundVideo} type="video/mp4"/>
        </video>
      <Header/>
      <Portada/>
      <About/>
      <Certifications/>
      <Skills/>
      <Projects/>
      <Contact_me/>
    </div>
  )
}

export default App;



