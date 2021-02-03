import AlunoService from "../../services/AlunoService";

class VisualizarAlunosManager {
    async ObterAlunosPorIdInstituicao(idInstituicao){
        return await AlunoService.ObterAlunosPorIdInstituicao(idInstituicao).then(
            resposta => resposta && resposta.data
        )
    }
}

export default new VisualizarAlunosManager();