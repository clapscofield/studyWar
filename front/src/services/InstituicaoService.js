import axios from "axios";

class InstituicaoService {
    async CadastrarInstituicao(instituicao){
        return await axios.post("http://localhost:7000/instituicao/add", {
            usuario: instituicao.usuario,
            senha: instituicao.senha,
            email: instituicao.email,
            nome: instituicao.nome,
            descricao: instituicao.descricao 
        });
    }
}

export default new InstituicaoService();