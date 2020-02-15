import streams from '../apis/streams';

import history from '../history';
import { SIGN_IN, SIGN_OUT, CREATE_STREAM, GET_STREAMS, UPDATE_STREAM, DELETE_STREAM, GET_ONE_STREAM } from './types';

export const signIn = (userId) => {
	return {
		type: SIGN_IN,
		payload: { userId }
	};
};

export const signOut = () => {
	return {
		type: SIGN_OUT
	};
};

//create an action creator to make a post() to 'server' this can be called as a server

//type of create stream

//payload : form object

// reducer x

//connect(null, {actionCreator})(component)

// i can add userId to this also

export const createStream = (formValues) => async (dispatch, getState) => {
	const { userId } = getState().isSignedIn;
	const response = await streams.post('/streams', { ...formValues, userId });
	dispatch({
		type: CREATE_STREAM,
		payload: response.data
	});
	history.push('/');

	//to get info return response.data
};

export const getStreams = () => async (dispatch) => {
	const response = await streams.get('/streams');
	dispatch({
		type: GET_STREAMS,
		payload: response.data
	});
};

//it is giving me that one stream that i want to get

export const getOneStream = (id) => async (dispatch) => {
	const response = await streams.get(`/streams/${id}`);

	//we are getting the info here
	dispatch({
		type: GET_ONE_STREAM,
		payload: response.data
	});
};
export const updateStream = (id, formValues) => async (dispatch) => {
	const response = await streams.patch(`/streams/${id}`, formValues);
	dispatch({
		type: UPDATE_STREAM,
		payload: response.data
	});

	history.push('/');
};
export const deleteStream = (id) => async (dispatch) => {
	await streams.delete(`/streams/${id}`);
	dispatch({
		type: DELETE_STREAM,
		payload: id
	});

	history.push('/');
};

// streams/id
