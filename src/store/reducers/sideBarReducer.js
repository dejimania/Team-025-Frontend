import {
  SET_SIDEBAR
} from "../types/sideBarTypes";

const initialState = {
  show: false
};

const sideBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SIDEBAR:
      return {
        ...state,
        show: !state.show
      };
    default:
      return state;
  }
};

export default sideBarReducer;
