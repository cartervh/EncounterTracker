import React from 'react';

class LongText extends React.Component {
	render() {
		const text = this.props.text;
		const limit = this.props.limit;
		const cls = this.props.cls;

		if (text.length <= limit) {
			return (<p className={cls}>{text}</p>);
		} else {
			return (<p className={cls}>{text.substring(0, limit)}</p>);
		}
	}
}

export default LongText;