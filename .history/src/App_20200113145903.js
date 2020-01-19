import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list.component';

class App extends Component {
  state = {
    monsters: []
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className='App'>
        <input />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
