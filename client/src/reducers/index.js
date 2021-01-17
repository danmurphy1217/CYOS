import { combineReducers } from "redux";
import userAuthReducer from "./userAuthReducer"

export const appReducer = combineReducers({
    userAuth: userAuthReducer,
  });
  
  export default appReducer;