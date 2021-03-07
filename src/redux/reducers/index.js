import loggainReducer from "./loggain";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  loggaincorrect: loggainReducer,
});

export default allReducers;
