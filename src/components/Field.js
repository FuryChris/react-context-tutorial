import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  static contextType = LanguageContext;
  //   contextype allow only 1 context to be managed if we want more we using consumers
  render() {
    let text;
    switch (this.context) {
      case 'polish':
        text = 'Nazwa';
        break;
      case 'dutch':
        text = 'Naam';
        break;
      case 'english':
        text = 'Name';
        break;
      default:
        text = 'Name';
    }
    return (
      <div className="ui field">
        <label htmlFor="">{text}</label>
        <input type="text" />
      </div>
    );
  }
}

export default Field;
