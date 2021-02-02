import * as types from './types';
import AuthService from "../services/AuthService";
import AuthServiceEstudante from 'services/AuthServiceEstudante';

export const loginInstituicao = (dadosInstituicao) => ({
  type: types.LOGIN_INSTITUICAO,
  payload: dadosInstituicao
})


export const inserirEquipe = (equipes) => ({
  type: types.INSERIR_EQUIPE,
  payload: equipes
})


/* MESSAGE ACTIONS */

export const setMessage = (message) => ({
  type: types.SET_MESSAGE,
  payload: message,
});

export const clearMessage = () => ({
  type: types.CLEAR_MESSAGE,
});



/* LOGIN ACTIONS */ 
export const register = (instituicao) => (dispatch) => {
  return AuthService.register(instituicao).then(
    (response) => {
      dispatch({
        type: types.REGISTER_SUCCESS,
      });

      dispatch({
        type: types.SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: types.REGISTER_FAIL,
      });

      dispatch({
        type: types.SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const login = (username, password) => (dispatch) => {
  return AuthService.login(username, password).then(
    (data) => {
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: { user: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: types.LOGIN_FAIL,
      });

      dispatch({
        type: types.SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: types.LOGOUT,
  });
};


/* LOGIN ACTIONS ESTUDANTES */
export const loginEstudante = (username, password) => (dispatch) => {
  return AuthServiceEstudante.login(username, password).then(
    (data) => {
      dispatch({
        type: types.LOGIN_SUCCESS_ESTUDANTE,
        payload: { user: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: types.LOGIN_FAIL_ESTUDANTE,
      });

      dispatch({
        type: types.SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const logoutEstudante = () => (dispatch) => {
  AuthServiceEstudante.logout();

  dispatch({
    type: types.LOGOUT_ESTUDANTE,
  });
}; 