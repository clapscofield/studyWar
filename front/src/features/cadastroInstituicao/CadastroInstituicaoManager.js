import InstituicaoService from "../../services/InstituicaoService";

class CadastroInstituicaoManager{
    async cadastrarInstituicao(instituicao){
        return await InstituicaoService.CadastrarInstituicao(instituicao).then(
            resposta => resposta && resposta.data
        )
    }
}

export default new CadastroInstituicaoManager();