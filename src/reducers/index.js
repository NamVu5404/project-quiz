import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import answerReducer from "./answerReducer";

const allReducers = combineReducers({
  loginReducer,
  answerReducer,
})

export default allReducers;