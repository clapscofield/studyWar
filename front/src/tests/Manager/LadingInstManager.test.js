
import axios from "axios";
import LandingInstManager from "../../features/LandingInst/LandingInstManager";
jest.mock('axios');

it("obter alunos", async () => {
  const resp = [{ nome: "aluno1" }, { nome: "aluno2" }, { nome: "aluno3" }];
  // setup
  axios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: resp
    })
  );

  // work
  const alunos = await LandingInstManager.ObterAlunos();

  // expect
  expect(alunos).toEqual(resp);
  expect(axios.get).toHaveBeenCalledTimes(1);
});