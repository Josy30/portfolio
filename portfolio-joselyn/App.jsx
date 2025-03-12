import { useState } from 'react';
import './App.scss';
import backgroundVideo from "./src/assets/fondo5.mp4";
import { Portada } from './src/Components/Portada/Portada';
import { Header } from './src/Components/Header/Header';
import { About } from './src/Components/About/About';



function App() {
  

  return (


    <div className='background'>
        <video loop autoPlay muted id="bg-video">
          <source src={backgroundVideo} type="video/mp4"/>
        </video>
      <Header/>
      <Portada/>
      <About/>
    </div>
  )
}

export default App;
