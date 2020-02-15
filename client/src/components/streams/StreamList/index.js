import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getStreams } from '../../../actions';

//instead of a button, i can create a Link tag
class StreamList extends React.Component {
	componentDidMount() {
		this.props.getStreams();
	}

	//i am able to render the streams

	//now
	// refactor the code
	// improve the styling
	streamEditButtons = (userId, streamId) => {
		// console.log(this.props);
		// since we are patching the values
		if (userId === this.props.userId) {
			return (
				<div id="render-buttons">
					<Link to={`stream/edit/${streamId}`}>
						<button className="btn btn-primary btn-sm mr-1">Edit</button>
					</Link>
					<Link to={`stream/delete/${streamId}`}>
						<button className="btn btn-light btn-sm ml-1">Delete</button>
					</Link>
				</div>
			);
		}

		return null;
	};

	//we have send userid and streamId to the buttons

	//create the stream button
	streamCreateButton() {
		if (this.props.isSignedIn) {
			return (
				<div>
					<Link to="/stream/create">
						<button className="btn btn-info">
							<i class="fas fa-plus" /> Create stream
						</button>
					</Link>
				</div>
			);
		}
		return null;
	}

	//rendering the list of streams
	renderStreams = () => {
		const { streams } = this.props;
		const renderArray = streams.map((stream) => {
			if (stream) {
				//convert the jsx into a iterable link
				return (
					<div className="col-12" id="stream-card" key={stream.id}>
						<div className="title ">
							<Link to={`/stream/show/${stream.id}`}>
								<i className="far fa-play-circle" />
							</Link>

							<h4>{stream.title}</h4>
						</div>
						<p className="description">{stream.description}</p>
						{this.streamEditButtons(stream.userId, stream.id)}
					</div>
				);
			}
		});
		return <div className="row justify-content-center">{renderArray}</div>;
	};

	render() {
		return (
			<div className="container">
				<div id="stream-create-button">{this.streamCreateButton()}</div>
				{this.renderStreams()}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		streams: Object.values(state.streams),
		userId: state.isSignedIn.userId,
		isSignedIn: state.isSignedIn
	};
};
export default connect(mapStateToProps, { getStreams })(StreamList);

//in this we will use getStreams() action creator and display the list of streams inside

//action create then dispatch

//why it is doing everything wrong
