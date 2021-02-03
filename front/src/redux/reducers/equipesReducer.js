import { INSERIR_EQUIPE } from '../types';

  export const initialState = {
    equipes: []
  }
  
  export default function equipesReducer(state = initialState, action) {
    switch (action.type) {
      case INSERIR_EQUIPE: {
        return {
          ...state,
          equipes: action.payload,
        }
      }
      default:
        return state
    }
  }
  