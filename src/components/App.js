import React from 'react'
import UserCreate from './UserCreate'

class App extends React.Component {

    state={ language: 'english'};


    onLanguageChange = language => {
        this.setState({language})
    }

    render() {
        return (
<div className="ui container">
    <div className="
    ">Select a language:
    <i className="flag us" onClick={() => this.onLanguageChange('english')}/>
    <i className="flag nl" onClick={() => this.onLanguageChange('dutch')}/>
    </div>
    {this.state.language}

    <UserCreate/>

</div>

        )
    }
}

export default App