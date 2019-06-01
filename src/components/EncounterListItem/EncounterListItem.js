import React from 'react';
import LongText from '../LongText/LongText';
import './EncounterListItem.css';

class EncounterListItem extends React.Component {
	render() {
		const itemClickFunc = this.props.itemClickFunc;
		if (this.props.encounter) {
			const {id, title, CR, description} = this.props.encounter;
			return (
				<li id={id} className="ph1 pv1 bb b--light-silver highlight" onClick={(e) => itemClickFunc(e, id)}>
					<div className='flex'>
						<p className='infoText'>{title} (CR: {CR})</p>
					</div>
					<LongText text={description} limit='50' cls='' />
				</li>
			)
		} else {
			return (
				<li className="ph1 pv1 bb b--light-silver highlight">
					<div className='flex'>
						<p className='infoText'>Unable to load encounter</p>
					</div>
				</li>
			)
		}
	}
}

export default EncounterListItem;