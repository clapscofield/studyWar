import { combineReducers } from 'redux';

import equipeReducer from '../redux/equipesReducer';

const rootReducer = combineReducers({
  equipe: equipeReducer
})

export default rootReducer;