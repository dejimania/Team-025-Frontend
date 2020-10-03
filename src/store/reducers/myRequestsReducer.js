import {
  MYREQUESTS_RESOLVE,
  MYREQUEST_CANCEL,
  MYREQUEST_FETCH,
  MYREQUEST_REJECT,
  MYREQUEST_RESOLVE
} from "../types/myRequestsTypes";

const initialState = {
  status: "idle",
  myRequests: null,
  myRequest: null
};

const myRequestsReducer = (state = initialState, action) => {
  switch (action.type) {
    case MYREQUEST_FETCH:
      return {
        ...state,
        status: "loading"
      };
    case MYREQUEST_RESOLVE:
      return {
        ...state,
        status: "success",
        myRequest: action.payload
      };
    case MYREQUESTS_RESOLVE:
      return {
        ...state,
        status: "success",
        myRequests: action.payload
      };
    case MYREQUEST_REJECT:
      return {
        ...state,
        status: "failure"
      };
    case MYREQUEST_CANCEL:
      return {
        ...state,
        status: "idle"
      };
    default:
      return state;
  }
};

export default myRequestsReducer;
