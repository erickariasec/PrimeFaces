import logo from './logo.svg';
import './App.css';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

import { useState } from 'react';
 

function App() {
  const [text, setText] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <InputText value={text} onChange={e => setText(e.target.value)} />
        { text }

        <br /><br />

        <Button type='button' label='Submit' icon='pi pi-check'></Button>
      </header>
    </div>
  );
}

export default App;
