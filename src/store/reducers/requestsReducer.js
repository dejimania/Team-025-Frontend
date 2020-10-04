import {
  REQUESTS_RESOLVE,
  REQUEST_CANCEL,
  REQUEST_FETCH,
  REQUEST_REJECT,
  REQUEST_RESOLVE
} from "../types/requestsTypes";

const initialState = {
  status: "idle",
  requests: null,
  request: null
};

const requestsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_FETCH:
      return {
        ...state,
        status: "loading"
      };
    case REQUEST_RESOLVE:
      return {
        ...state,
        status: "success",
        request: action.payload
      };
    case REQUESTS_RESOLVE:
      return {
        ...state,
        status: "success",
        requests: action.payload
      };
    case REQUEST_REJECT:
      return {
        ...state,
        status: "failure"
      };
    case REQUEST_CANCEL:
      return {
        ...state,
        status: "idle"
      };
    default:
      return state;
  }
};

export default requestsReducer;
