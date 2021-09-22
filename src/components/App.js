import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {
  state = { language: 'english' };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange('english')}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange('dutch')}
          />
          <i
            className="flag pl"
            onClick={() => this.onLanguageChange('polish')}
          />
        </div>
        {this.state.language}
        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
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
