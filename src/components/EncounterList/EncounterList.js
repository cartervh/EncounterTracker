import React from 'react';
import './EncounterList.css';
import EncounterListItem from '../EncounterListItem/EncounterListItem';
import encounters from '../data/encounters.json';

class EncounterList extends React.Component {
	render() {
		return (
			<div className='EncounterList'>
				<h1 className="f4 bold center mw6">Encounter List</h1>
					<ul className="list pl0 ml0 center mw6 ba b--light-silver">
					{
						encounters.map((enc, i) => {
							return <EncounterListItem key={i} encounter={encounters[i]} itemClickFunc={this.props.itemClickFunc}/>
						})
					}
					</ul>
			</div>
		)
	}
}

export default EncounterList;