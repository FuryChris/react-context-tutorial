import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  // static contextType = LanguageContext;
  // // static -- dodaje property bezpośrednio do klasy

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {/* Consumer Approach instead context.type approach. Better approach - simplify usage of more context providers */}
          {(value) => {
            switch (value) {
              case 'polish':
                return 'Zatwierdź';
              case 'dutch':
                return 'Voorleggen';
              case 'english':
                return 'Submit';
              default:
                return 'Submit';
            }
          }}
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
