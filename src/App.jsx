import { useState } from 'react';
import './App.css'
import randomArr from './Services/randomArr';
import Button from './components/Button';
import Phrase from './components/Phrase';
import arr from './utils/phrases.json';
import img from './utils/img.json';

function App() {
  const bgimage = randomArr(img)
  const quote = randomArr(arr)
  const [rPhrase, setrPhrase] = useState(quote)
  const [image, setimage] = useState(bgimage)
  const appStyle = {
    backgroundImage : `url(../fortuna-1/fondo${image}.jpg)`
  }

  return (
    <div style={appStyle} className='app'> 

      <h1 className='app-title'>GALLETAS DE LA FORTUNA</h1>

      <Phrase 
      rPhrase = {rPhrase} 
      />

      <Button 
      setrPhrase={setrPhrase}
      setimage={setimage}
      />
    </div>
  ) 
}

export default App
