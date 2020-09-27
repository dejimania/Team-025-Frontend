import { combineReducers } from "redux";
import authReducer from "./authReducer";
import appointmentsReducer from "./appointmentsReducer";
import notificationReducer from "./notificationReducer";
import sideBarReducer from "./sideBarReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  appointments: appointmentsReducer,
  notification: notificationReducer,
  sidebar: sideBarReducer
});

export default rootReducer;
