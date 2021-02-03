import AlunoService from "../../services/AlunoService";

class TimerEstudanteManager{
    async adicionarEstudo(matricula, tempo){
        return await AlunoService.AdicionarEstudo(matricula, tempo).then(
            resposta => resposta && resposta.data
        )
    }
}

export default new TimerEstudanteManager();