import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getOneStream, updateStream } from '../../../actions';
import StreamForm from '../../StreamForm';

//on did mount ... we are going to getOneStream and pass the values to the
class StreamEdit extends Component {
	componentDidMount = () => {
		const streamId = this.getId();
		this.props.getOneStream(streamId);
	};

	getId = () => {
		return this.props.match.params.id;
	};

	//we dont need to add any additional code inside the file

	//redux-form will help us in that context
	onSubmit = (formValues) => {
		const streamId = this.getId();
		this.props.updateStream(streamId, formValues);
	};
	renderForm = () => {
		const { title, description } = this.props.stream;
		return (
			<div>
				<StreamForm onSubmit={this.onSubmit} initialValues={{ title, description }} />
			</div>
		);
	};

	render() {
		//make a fetch req using that id
		if (!this.props.stream) {
			return <div>Loading...</div>;
		}
		return <div>{this.renderForm()}</div>;
	}
}

const mapStateToProps = (state, ownProps) => {
	const stream = state.streams[ownProps.match.params.id];
	return { stream };
};

export default connect(mapStateToProps, { getOneStream, updateStream })(StreamEdit);

//we still are not fetching the data

// we will render the form using ...abs

// take the values of the form and put in inside formValues and edit the form update(id, values)

// we will basically add create component form with values equal to

// onSubmit = { call the action creator with the values }
