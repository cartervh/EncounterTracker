import React, { Component } from 'react';
import './App.css';
import EncounterList from './components/EncounterList/EncounterList';
import InfoBlock from './components/InfoBlock/InfoBlock';

class App extends Component {
  render() {
    return (
      <div className="App flex">
      	<EncounterList />
      	<InfoBlock />
      </div>
    );
  }
}

export default App;
