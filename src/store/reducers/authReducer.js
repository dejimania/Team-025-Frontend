import { AUTH_FETCH, AUTH_RESOLVED, AUTH_CANCELED } from '../types/authTypes';

 const initialState = {
	 isLoading: false,
	 isAuthenticated: false,
   token: null,
   role: null,
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
        isAuthenticated: true,
				token: action.payload.accessToken,
        user: action.payload,
        role: action.payload.role
			};
		case AUTH_CANCELED:
			return {
				...state,
				isLoading: false,
        token: null,
        role: null,
        isAuthenticated: false,
				user: null
			};
		default:
			return state;
	}
}

export default authReducer;
