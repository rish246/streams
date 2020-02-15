import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../../../Modal';
import history from '../../../history';
import { deleteStream, getOneStream } from '../../../actions';

class StreamDelete extends React.Component {
	//buttons can be different

	//there can be different actions as well.... so we just have to send in the actions linked to the modal

	componentDidMount() {
		this.props.getOneStream(this.getId());
	}

	//we got the stream inside our state

	getId = () => {
		return this.props.match.params.id;
	};

	renderContent() {
		const { stream } = this.props;
		if (!stream) {
			return 'are you sure you want to delete the stream';
		}
		return `are you sure you want to delete the stream : ${stream.title}`;
	}

	actions = () => {
		return (
			<React.Fragment>
				<Link className="ui button" to="/">
					Cancel
				</Link>
				<button className="ui primary button" onClick={() => this.props.deleteStream(this.getId())}>
					Delete
				</button>
			</React.Fragment>
		);
	};

	//cancel onClick => push('/')
	//delete onClick => this.props.

	render() {
		return (
			<div>
				<h3>Stream Delete Page</h3>
				<Modal
					header="Delete stream"
					content={this.renderContent()}
					actions={this.actions}
					onDismiss={() => {
						history.push('/');
					}}
				/>
			</div>
		);

		// return <div>Modal </div>;
	}
}

//we want to get the stream from redux store

const mapStateToProps = (state, ownProps) => {
	const stream = state.streams[ownProps.match.params.id];
	return { stream };
};

export default connect(mapStateToProps, { deleteStream, getOneStream })(StreamDelete);

// we are getting the id still
// use connect function to use the action creator of delete stream
//get the action creator

//use match.params.id

// we are fetching stream just so that we can show some conditional details about the stream
