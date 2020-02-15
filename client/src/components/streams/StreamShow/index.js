import React, { Component } from 'react';
import { connect } from 'react-redux';

//call in the action creator that can fetch the stream
import { getOneStream } from '../../../actions';
class StreamShow extends Component {
	componentDidMount() {
		this.props.getOneStream(this.props.match.params.id);
	}

	renderStreamDetails = () => {
		const { stream } = this.props;
		if (!stream) {
			return <div>Loading...</div>;
		}

		return (
			<div>
				<h3>title: {stream.title}</h3>
				<p>description : {stream.description}</p>
			</div>
		);
	};
	render() {
		return <div>{this.renderStreamDetails()}</div>;
	}
}

const mapStateToProps = (state, ownProps) => {
	const stream = state.streams[ownProps.match.params.id];
	console.log(stream);
	return { stream };
};
export default connect(mapStateToProps, { getOneStream })(StreamShow);

// do the same as did above

// whenever the component renders on the screen, it will getTheStream
