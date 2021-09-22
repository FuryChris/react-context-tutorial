import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
        {/* inne dane do testów działania providera :)
        <LanguageContext.Provider value={'english'}>
          <UserCreate />
        </LanguageContext.Provider>
        <UserCreate /> */}
      </div>
    );
  }
}

export default App;
