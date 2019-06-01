import React from 'react';
import './InfoBlock.css';
import encounters from '../data/encounters.json';

class InfoBlock extends React.Component {

	titleFunc = (titleParam) => {
		if (titleParam) {
			return titleParam;
		} else {
			return 'Undefined Title';
		}
	}

	getEncounterDetails = (id) => {
		if (id > 0) {
			//TODO: Replace this once the DB gets in place.
			for (var i = 0; i < encounters.length; i++) {
				console.log(encounters[i].id, id, encounters[i].id == id);
				if (encounters[i].id == id) {
					console.log('Found!');
					return encounters[i];
				}
			}
		}
	}

	render() {
		const encounterID = this.props.encounterID;
		const encounter = this.getEncounterDetails(encounterID);
		if (encounter) {
			const {title, CR, description} = encounter;
			return (
				<div className='InfoBlock bg-light-purple w-80'>
					<h1>{title}</h1>
					<h3>CR: {CR}</h3>
					<h3>Description:</h3>
					<p>{description}</p>
					<img alt='wip' src='http://media.wizards.com/2018/dnd/images/XL2018_DnD.png' />
				</div>
			)
		} else {
			return (<div className='InfoBlock w-80'>
					<h1>Unable to load encounter</h1>
				</div>
			)
		}
	}
}

export default InfoBlock;