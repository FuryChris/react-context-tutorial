import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  // static contextType = LanguageContext;
  // // static -- dodaje property bezpośrednio do klasy

  renderSubmit(language) {
    switch (language) {
      case 'polish':
        return 'Zatwierdź';
      case 'dutch':
        return 'Voorleggen';
      case 'english':
        return 'Submit';
      default:
        return 'Submit';
    }
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}
// Button.contextType = LanguageContext -- zamiennik static'a powyżej

export default Button;
