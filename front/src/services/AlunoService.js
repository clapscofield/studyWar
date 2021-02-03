import axios from "axios";

class AlunoService {
    async CriarAluno(aluno){
        return await axios.post("http://localhost:7000/estudante/add", {
            nome: aluno.nome,
            dataNascimento: aluno.dataNascimento,
            turma: aluno.turma,
            matricula: aluno.matricula,
            email: aluno.email,
            senha: aluno.senha,
            minutosEstudados: aluno.minutosEstudados,
            idEquipe: aluno.idEquipe,
            idGuerra: aluno.idGuerra,
            idInstituicao: aluno.idInstituicao
        });
    }

    async AdicionarEstudo(matricula, tempo){
        return await axios.post("http://localhost:7000/estudante/add-estudo", {
            matricula: matricula,
            tempo: tempo
        });
    }
}

export default new AlunoService();