import { combineReducers } from 'redux';

import equipeReducer from './equipesReducer';
import authReducer from "./authReducer";
import messageReducer from "./messageReducer";
import authEstudanteReducer from "./authEstudanteReducer";

const rootReducer = combineReducers({
  equipe: equipeReducer,
  auth: authReducer,
  authEstudante: authEstudanteReducer,
  message: messageReducer
})

export default rootReducer;