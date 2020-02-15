import _ from 'lodash';
import { CREATE_STREAM, UPDATE_STREAM, DELETE_STREAM, GET_STREAMS, GET_ONE_STREAM } from '../actions/types';

const streamsReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_ONE_STREAM:
			return { ...state, [action.payload.id]: action.payload };

		case CREATE_STREAM:
			return { ...state, [action.payload.id]: action.paylaod };

		case UPDATE_STREAM:
			return { ...state, [action.payload.id]: action.paylaod };
		case DELETE_STREAM:
			return _.omit(state, action.payload);

		case GET_STREAMS:
			return { ...state, ..._.mapKeys(action.payload, 'id') };

		case DELETE_STREAM:
			return _.omit(state, action.payload); // this only contains the id
		default:
			return state;
	}
};

export default streamsReducer;

//payload => id

//others it is undefined

// select => action.payload = undefined

// find => state
