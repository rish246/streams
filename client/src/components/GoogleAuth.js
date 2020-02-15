import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
// in this component, wire up the isSignedIn function
class GoogleAuth extends Component {
	//always remember make the callback functions as arrow functions.abs
	onSignInClick = () => {
		this.auth.signIn();
	};

	onSignOutClick = () => {
		this.auth.signOut();
	};

	componentDidMount() {
		//console.log(props)
		//we should be getting the isSignedIn object

		window.gapi.load('client: auth2', () => {
			//use the client lib to initiaze the oib
			window.gapi.client
				.init({
					clientId: '245600355342-qgtoce63mpnc7280dnd64e5pbci3cmn6.apps.googleusercontent.com',
					scope: 'email'
				}) //RETURNS A PROMISE
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();

					this.onAuthChange(this.auth.isSignedIn.get());

					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}

	onAuthChange = (isSignedIn) => {
		// we said we are gonna recieve the isSignedIn status as a param
		if (isSignedIn) {
			const userId = this.auth.currentUser.get().getId();
			this.props.signIn(userId);
		} else {
			this.props.signOut();
		}
	};

	//whenever the state is changes the component rerenders itself
	renderButton() {
		switch (this.props.isSignedIn) {
			case true:
				return (
					<button className="btn btn-danger" onClick={this.onSignOutClick}>
						Sign Out
					</button>
				);
			case null:
				return null;
			default:
				return (
					<button className="btn btn-success" onClick={this.onSignInClick}>
						Sign In
					</button>
				);
		}
	}
	render() {
		return <div>{this.renderButton()}</div>;
	}
}

const mapStateToProps = (state) => {
	const { isSignedIn } = state.isSignedIn;
	return { isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
