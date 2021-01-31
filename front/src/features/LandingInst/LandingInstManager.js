import AlunoService from "../../services/AlunoService";

class LandingInstManager {
    async ObterAlunos(){
        return await AlunoService.ObterAluno().then(
            resposta => resposta && resposta.data
        )
    }
}

export default new LandingInstManager();