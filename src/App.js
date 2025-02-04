import { useState } from 'react';
import './App.css';
import LanguageContext from './context/LanguageContext';
import SwitchLanguage from './components/switchLanguage';

function App() {
  const [lang, setLang] = useState('en');

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <div className="App">
        <SwitchLanguage />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
