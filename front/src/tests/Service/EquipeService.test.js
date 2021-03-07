import EquipeService from "../../services/EquipeService";
import axios from 'axios';
jest.mock('axios');

describe('Equipe service', () => {
  test('criar equipe com sucesso', async () => {
    const dadosEquipe = {
        idEquipe: "idteste",
        usuarioInstituicao: "user@inst",
        idGuerra: "guerraTeste"
    };
    // setup
    axios.post.mockImplementationOnce(() =>
        Promise.resolve({ status: "Equipe criada" })
    );

    // work
    const response = await EquipeService.CriarEquipe(dadosEquipe);

    // expect
    expect(response).toEqual({ status: "Equipe criada" });
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith('http://localhost:7000/equipe/add-equipe', dadosEquipe);
  });
});