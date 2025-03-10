import { useState } from 'react';
import './App.scss';
import backgroundVideo from "./src/assets/fondo5.mp4";
import { PortadaPage } from './src/pages/PortadaPage';




function App() {
  const [count, setCount] = useState(0)

  return (


    <div className='background'>
        <video loop autoPlay muted id="bg-video">
          <source src={backgroundVideo} type="video/mp4"/>
        </video>
      <PortadaPage/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App;
