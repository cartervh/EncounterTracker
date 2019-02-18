import React from 'react';
import './InfoBlock.css';

class InfoBlock extends React.Component {
	render() {
		return (
			<div className='InfoBlock bg-light-purple w-80'>
				<p>Goodbye</p>
				<img alt='wip' src='http://media.wizards.com/2018/dnd/images/XL2018_DnD.png' />
			</div>
		)
	}
}

export default InfoBlock;