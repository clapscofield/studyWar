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
            horasEstudadas: aluno.horasEstudadas,
            idEquipe: aluno.idEquipe,
            idGuerra: aluno.idGuerra,
            idInstituicao: aluno.idInstituicao
        });
    }
}

export default new AlunoService();