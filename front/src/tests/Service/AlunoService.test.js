import AlunoService from "../../services/AlunoService";
import axios from 'axios';
jest.mock('axios');

describe('Alunos service', () => {
  test('obter aluno com sucesso', async () => {
    // setup
    axios.get.mockImplementationOnce(() =>
        Promise.resolve([{ nome: "aluno1" }])
    );

    // work
    const alunos = await AlunoService.ObterAluno();

    // expect
    expect(alunos).toEqual([{ nome: "aluno1" }]);
    expect(alunos.length).toEqual(1);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('http://localhost:7000/estudante/');
  });

  test('criar aluno com sucesso', async () => {
    const dadosAluno = {
        nome: "nomeAluno", 
        email: "aluno@teste", 
        senha:"1234", 
        matricula: "1234", 
        dataNascimento: "01/01/2000", 
        turma: "2ANO B", 
        idGuerra: "teste", 
        idEquipe: "teste"
    };
    // setup
    axios.post.mockImplementationOnce(() =>
        Promise.resolve({status:"Estudante cadastrado com sucesso!"})
    );

    // work
    const response = await AlunoService.CriarAluno(dadosAluno);
    // expect
    expect(response).toEqual({status:"Estudante cadastrado com sucesso!"});
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith('http://localhost:7000/estudante/add', dadosAluno);
  });

  test('adicionar estudo com sucesso', async () => {
    const matricula =  {matricula: {matricula: "1234", tempo: "5"}};
    const tempo = undefined;
    const dadosEstudo = {
        matricula: "1234",
        tempo: "5"
    };
    // setup
    axios.post.mockImplementationOnce(() =>
        Promise.resolve({status:"Estudos atualizados!"})
    );

    // work
    const response = await AlunoService.AdicionarEstudo(dadosEstudo);
    // expect
    expect(response).toEqual({status:"Estudos atualizados!"});
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith('http://localhost:7000/estudante/add-estudo', matricula);
  });
});