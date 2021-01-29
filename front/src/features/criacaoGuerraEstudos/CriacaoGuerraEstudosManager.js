import GuerraEstudosService from "../../services/GuerraEstudosService";
import EquipeService from "../../services/EquipeService";

class CriacaoGuerraEstudosManager{
    async criarGuerraEstudos(guerraEstudos){
        return await GuerraEstudosService.CriarGuerraEstudos(guerraEstudos).then(
            resposta => resposta && resposta.data
        )
    }

    async criarEquipe(equipe){
        return await EquipeService.CriarEquipe(equipe).then(
            resposta => resposta && resposta.data
        )
    }
}

export default new CriacaoGuerraEstudosManager();