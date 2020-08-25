import { AUTH_FETCH, AUTH_RESOLVED, AUTH_CANCELED } from '../types/authTypes'; 
 
 const initialState = {
	 isLoading: false,
	 isAuthenticated: false,
	 token: null,
	 user: null
 }
 
 const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTH_FETCH:
			return {
				...state,
				isLoading: true
			};
		case AUTH_RESOLVED:
			return {
				...state,
				isLoading: false,
				token: action.payload.token,
				user: action.payload.user
			};
		case AUTH_CANCELED:
			return {
				...state,
				isLoading: false,
				token: null,
				user: null
			};
		default:
			return state;
	}
}

export default authReducer;