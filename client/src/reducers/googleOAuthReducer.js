import { SIGN_IN, SIGN_OUT } from '../actions/types';
const INITIAL_STATE = {
	isSignedIn: null,
	userId: null
};

const googleOAuthReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SIGN_IN:
			return { ...state, isSignedIn: true, userId: action.payload.userId };
		case SIGN_OUT:
			return { ...state, isSignedIn: false, userId: null };
		default:
			return state;
	}
};

//is

export default googleOAuthReducer;

// when we give the action creator, we make the payload property equal to the userId of the user signing in
