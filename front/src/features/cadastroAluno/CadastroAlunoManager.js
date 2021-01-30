import EquipeService from "services/EquipeService";
import AlunoService from "../../services/AlunoService";

class CadastroAlunoManager{
    async criarAluno(aluno){
        return await AlunoService.CriarAluno(aluno).then(
            resposta => resposta && resposta.data
        )
    }

    async atualizarEquipeAluno(idEquipe, idAluno){
        return await EquipeService.AtualizarEquipeAluno(idEquipe, idAluno).then(
            resposta => resposta && resposta.data
        )
    }
}

export default new CadastroAlunoManager();