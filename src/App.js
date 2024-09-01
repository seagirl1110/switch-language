import { useState } from 'react';
import './App.css';
import LanguageContext from './context/LanguageContext';

function App() {
  const [lang, setLang] = useState('en');

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <div className="App"></div>
    </LanguageContext.Provider>
  );
}

export default App;
