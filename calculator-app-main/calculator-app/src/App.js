import './App.css';
import Calculadora from './Calculadora';
import { useState } from 'react';

function App() {
  const [theme, settheme] = useState('theme1')
  const [input, setInput] = useState('')
  return (
    <div className={`App ${theme}`}>
        <Calculadora
         settheme={settheme}
        theme={theme}
        input={input}
        setInput={setInput}/>

    </div>
  );
}

export default App;

