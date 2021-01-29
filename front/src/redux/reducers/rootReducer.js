import { combineReducers } from 'redux';

import equipeReducer from './equipesReducer';
import authReducer from "./authReducer";
import messageReducer from "./messageReducer";

const rootReducer = combineReducers({
  equipe: equipeReducer,
  auth: authReducer,
  message: messageReducer
})

export default rootReducer;