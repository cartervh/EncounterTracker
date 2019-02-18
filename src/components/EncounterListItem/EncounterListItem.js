import React from 'react';
import LongText from '../LongText/LongText';
import './EncounterListItem.css';

class EncounterListItem extends React.Component {
	render() {
		const encounter = this.props.encounter;
		return (
			<div className='EncounterListItem highlight'>
				<div className='flex'>
					<p>{encounter.title} (CR: {encounter.CR})</p>
				</div>
				<LongText text={encounter.description} limit='50' cls='' />
			</div>
		)
	}
}

export default EncounterListItem;