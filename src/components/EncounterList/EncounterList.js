import React from 'react';
import './EncounterList.css';
import EncounterListItem from '../EncounterListItem/EncounterListItem';
import encounters from '../data/encounters.json';

class EncounterList extends React.Component {
	render() {
		return (
			<div className='EncounterList w-20 br'>
				<p>Encounter List</p>
				{
					encounters.map((enc, i) => {
						return <EncounterListItem key={i} encounter={encounters[i]} />
					})
				}
			</div>
		)
	}
}

export default EncounterList;