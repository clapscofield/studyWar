import LOGIN_INSTITUICAO from "./types";

// Initial (starting) state
export const initialState = {
    instituicao: null
  };
  
  // Our root reducer starts with the initial state
  // and must return a representation of the next state
  export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_INSTITUICAO:
        return { ...state, instituicao: action.payload };
      default:
        return state;
    }
  };