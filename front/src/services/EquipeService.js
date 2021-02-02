import axios from "axios";

class EquipeService {
    async CriarEquipe(equipe){
        return await axios.post("http://localhost:7000/equipe/add-equipe", {
            idEquipe : equipe.idEquipe,
            usuarioInstituicao: equipe.usuarioInstituicao,
            idGuerra: equipe.idGuerra
        });
    }

    async AtualizarEquipeAluno(equipe, aluno){
        return await axios.post("http://localhost:7000/equipe/add-aluno", {
            idEquipe : equipe,
            idAluno: aluno
        });
    };
}

export default new EquipeService();