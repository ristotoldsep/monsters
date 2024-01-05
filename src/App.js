import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      inputValue : ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => 
        response.json())
      .then((users) => this.setState(() => {
        return {monsters: users}
      },
      () => {
        console.log(this.state);
      }));
  }

  onSearchChange = (event) => {
    console.log(event.target.value);
    this.setState({inputValue: event.target.value})
  }

  render() {

    const { monsters, inputValue } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(inputValue.toLowerCase());
    });

    return (
      <div className="App">
        <h1 className="app-title">Cats Rolodex (Hooks)</h1>

        <SearchBox className='monsters-search-box' placeholder='Search cats...' onSearchChange={onSearchChange} /> 
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
