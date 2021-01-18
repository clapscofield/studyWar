import axios from "axios";

class GuerraEstudosServices {
    async CriarGuerraEstudos(guerraEstudos){
        return await axios.post("http://localhost:7000/guerraEstudos/add", {
            dataInicio: guerraEstudos.dataInicio,
            dataFim: guerraEstudos.dataFim,
            identificador: guerraEstudos.identificador,
            numeroTotalEquipes: guerraEstudos.numeroTotalEquipes,
            numeroAlunosPorEquipe: guerraEstudos.numeroAlunosPorEquipe,
            idInstituicao: guerraEstudos.idInstituicao 
        });
    }
}

export default new GuerraEstudosServices();