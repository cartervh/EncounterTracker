import React, { Component } from 'react';
import './App.css';
import EncounterList from './components/EncounterList/EncounterList';
import InfoBlock from './components/InfoBlock/InfoBlock';

class App extends Component {
	constructor() {
		super();
		this.state = {
			selEncounterID: 0
		};
	}

	onEncounterClick = (event, id) => {
		this.setState({selEncounterID: id});
	}

	render() {
		return (
			<div className="App flex">
				<EncounterList itemClickFunc = {this.onEncounterClick}/>
				<InfoBlock encounterID={this.state.selEncounterID}/>
			</div>
		);
	}
}

export default App;
