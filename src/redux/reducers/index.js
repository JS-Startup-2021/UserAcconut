import userReducer from "./user";
import loggainReducer from "./loggain";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  user: userReducer,
  loggaincorrect: loggainReducer,
});

export default allReducers;
