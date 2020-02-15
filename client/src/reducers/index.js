import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import streamReducer from './streamsReducer';
import googleOAuthReducer from './googleOAuthReducer';

export default combineReducers({
	isSignedIn: googleOAuthReducer,
	form: formReducer,
	streams: streamReducer
});

//always at first make a replaceMe reducer such that it returns a constant value

//this streamReducer will take care of the operations inside the state, and alter the state accordingly
