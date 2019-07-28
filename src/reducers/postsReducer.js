/* reducers should accept action and state and return the new state after executing the action */

import { FETCH_POSTS } from '../actions/types';

const initialState = {
	postsArray: [],
	post: {}
};

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_POSTS:
			return {
				...state,
				postsArray: action.payload
			};

		default:
			return state;
	}
}
