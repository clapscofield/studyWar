import * as types from './types';

export const loginInstituicao = (dadosInstituicao) => ({
  type: types.LOGIN_INSTITUICAO,
  payload: dadosInstituicao
})


export const inserirEquipe = (equipes) => ({
  type: types.INSERIR_EQUIPE,
  payload: equipes
})