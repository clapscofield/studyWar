import * as types from './types';

export const loginInstituicao = (dadosInstituicao) => ({
  type: types.LOGIN_INSTITUICAO,
  payload: dadosInstituicao
})