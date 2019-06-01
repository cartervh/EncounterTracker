import React from 'react';

class LongText extends React.Component {
	render() {
		const {text, limit, cls} = this.props;
		if (text) {
			if (text.length <= limit) {
				return (<p className={cls}>{text}</p>);
			} else {
				return (<p className={cls}>{text.substring(0, limit) + '...'}</p>);
			}
		} else {
			return (<p></p>);
		}
	}
}

export default LongText;