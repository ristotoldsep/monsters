import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Anni'
        },
        {
          name: 'Rico'
        },
        {
          name: 'Rigmor'
        },
      ]
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster, i) => (
            <h1 key={i}>{monster.name}</h1>
          ))}
      </div>
    );
  }
}

export default App;
