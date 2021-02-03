import AlunoService from "../../services/AlunoService";

class LandingInstManager {
    async ObterAlunos(){
        return await AlunoService.ObterAluno().then(
            resposta => resposta && resposta.data
        )
    }
    
    async ObterAlunosPorIdInstituicao(idInstituicao){
        return await AlunoService.ObterAlunosPorIdInstituicao(idInstituicao).then(
            resposta => resposta && resposta.data
        )
    }
}

export default new LandingInstManager();