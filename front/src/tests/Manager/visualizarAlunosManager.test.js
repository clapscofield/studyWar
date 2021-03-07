
import axios from "axios";
import VisualizarAlunosManager from "../../features/VisualizarAlunos/VisualizarAlunosManager";
jest.mock('axios');

it("visualizar alunos", async () => {
  // setup
  axios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: [{ nome: "aluno1" }]
    })
  );

  // work
  const alunos = await VisualizarAlunosManager.ObterAlunosPorIdInstituicao("2");

  // expect
  expect(alunos).toEqual([{ nome: "aluno1" }]);
  expect(axios.get).toHaveBeenCalledTimes(1);
});