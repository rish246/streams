import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createStream } from '../../../actions';
import StreamForm from '../../StreamForm';
class StreamCreate extends Component {
	onSubmit = (formValues) => {
		this.props.createStream(formValues);
	};
	render() {
		return (
			<div>
				<StreamForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}

// hook up reduxForm and connect together and use the action creator as this.props.actionCreator

//now to hook up formWrapped and connect, we are simply going to pass it in connect

export default connect(null, { createStream })(StreamCreate);

//dispatching action after the stream creation
