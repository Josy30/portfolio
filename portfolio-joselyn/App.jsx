import { useState } from 'react';
import './App.scss';
import backgroundVideo from "./src/assets/fondo5.mp4";
import { Portada } from './src/Components/Portada/Portada';
import { Header } from './src/Components/Header/Header';



function App() {
  

  return (


    <div className='background'>
        <video loop autoPlay muted id="bg-video">
          <source src={backgroundVideo} type="video/mp4"/>
        </video>
      <Header/>
      <Portada/>
      
    </div>
  )
}

export default App;
