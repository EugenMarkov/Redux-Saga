import { combineReducers } from "redux";
import someReducer from "./someReducer";
import putDataReducer from "./putDataReducer";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
  someReducer,
  putDataReducer,
  counterReducer,
});

export default rootReducer;