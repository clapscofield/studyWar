import GuerraEstudosService from "../../services/GuerraEstudosService";

class CriacaoGuerraEstudosManager{
    async criarGuerraEstudos(guerraEstudos){
        return await GuerraEstudosService.CriarGuerraEstudos(guerraEstudos).then(
            resposta => resposta && resposta.data
        )
    }
}

export default new CriacaoGuerraEstudosManager();