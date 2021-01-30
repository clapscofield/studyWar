import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  Input,
  Container,
  Row,
  Col,
  FormGroup,
  Label,
  UncontrolledAlert,
  Alert
} from "reactstrap";
import Datetime from "react-datetime";
import Footer from "components/Footer/Footer.js";
import { connect } from "react-redux";
import CadastroAlunoManager from "../CadastroAlunoManager";
import { setMessage } from "../../../redux/actionCreators";
import { clearMessage } from "../../../redux/actionCreators";

const CadastroAluno = (props) => {
  const {
    equipes,
    idGuerra,
    idInstituicao,
    message,
    setMessageRedux,
    clearMessageRedux
  } = props;

  const [botaoHabilitado, setBotaoHabilitado] = useState(true);
  const [botaoHabilitadoDashboard, setBotaoHabilitadoDashboard] = useState(
    false
  );

  const [nome, setNome] = useState(null);
  const [matricula, setMatricula] = useState(null);
  const [dataNascimento, setDataNascimento] = useState(null);
  const [turma, setTurma] = useState(null);
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState(null);
  const [equipe, setEquipe] = useState("Clacla");

  const [sucesso, setSucesso] = useState(false);
  const [alertaAberto, setAlertaAberto] = useState(false);

  useEffect(() => {
    setBotaoHabilitado(
      nome && matricula && dataNascimento && turma && email && senha
    );
  }, [
    setBotaoHabilitado,
    nome,
    matricula,
    dataNascimento,
    turma,
    email,
    senha
  ]);

  useEffect(() => {
    setAlertaAberto(message && message.message);
  }, [message]);

  const cadastrarAluno = async () => {
    let mensagem = "";
    const aluno = {
      nome: nome,
      dataNascimento: dataNascimento,
      turma: turma,
      matricula: matricula,
      email: email,
      senha: senha,
      horasEstudadas: 0,
      idEquipe: equipe,
      idGuerra: idGuerra,
      idInstituicao: idInstituicao
    };
    await CadastroAlunoManager.criarAluno(aluno).then(
      async (response) => {
        atualizarEquipe();
        setBotaoHabilitadoDashboard(true);
        setSucesso(true);
        limparEstados();
        mensagem = response && response.status;
      },
      async (error) => {
        const erro =
          (error.response &&
            error.response.data &&
            error.response.data.status) ||
          error.status ||
          error.toString();
        setSucesso(false);
        mensagem = erro;
      }
    );
    await setMessageRedux(mensagem);
  };

  const limparEstados = () => {
    setNome(null);
    setDataNascimento(null);
    setEmail(null);
    setMatricula(null);
    setSenha(null);
    setTurma(null);
    setEquipe(null);
    document.getElementById("cadastro-aluno-form").reset();
  };

  const atualizarEquipe = async () => {
    const idEquipe = equipe;
    const idAluno = matricula;

    const resultado = await CadastroAlunoManager.atualizarEquipeAluno(
      idEquipe,
      idAluno
    );
    return resultado;
  };

  return (
    <>
      <div className="wrapper">
        <div className="page-header">
          <div className="page-header-image" />
          <div className="content">
            <Container>
              <Row>
                <Col>
                  <h1 className="title">Cadastrar Novo Estudante</h1>
                  <Form className="form" id="cadastro-aluno-form">
                    <Row>
                      <Col>
                        <Input
                          value={nome}
                          placeholder="Nome completo"
                          type="text"
                          onChange={(e) => setNome(e.target.value)}
                          className={"mb-4"}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col className={"mb-4"}>
                        <Datetime
                          value={dataNascimento}
                          timeFormat={false}
                          inputProps={{ placeholder: "Data de nascimento" }}
                          dateFormat={"DD/MM/YYYY"}
                          onChange={(e) => setDataNascimento(e)}
                        />
                      </Col>
                      <Col>
                        <Input
                          value={turma}
                          placeholder="Turma"
                          type="text"
                          onChange={(e) => setTurma(e.target.value)}
                          className={"mb-4"}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Input
                          value={matricula}
                          placeholder="Matrícula"
                          type="text"
                          onChange={(e) => setMatricula(e.target.value)}
                          className={"mb-4"}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Input
                          value={email}
                          placeholder="Email"
                          type="text"
                          onChange={(e) => setEmail(e.target.value)}
                          className={"mb-4"}
                        />
                      </Col>
                      <Col>
                        <Input
                          value={senha}
                          placeholder="Senha"
                          type="text"
                          onChange={(e) => setSenha(e.target.value)}
                          className={"mb-4"}
                        />
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h1 className="title"> Selecionar Equipe </h1>
                  <Form className="form">
                    <FormGroup>
                      <Label for="exampleSelect1">Selecione a equipe</Label>
                      <Input
                        value={equipe}
                        type="select"
                        name="select"
                        onChange={(e) => {
                          setEquipe(e.target.value);
                        }}
                      >
                        {equipes &&
                          equipes.map((eq) => {
                            return <option value={eq}> {eq} </option>;
                          })}
                      </Input>
                    </FormGroup>
                  </Form>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button
                    className="btn-round"
                    color="primary"
                    size="lg"
                    disabled={!botaoHabilitado}
                    onClick={() => cadastrarAluno()}
                  >
                    Cadastrar aluno
                  </Button>
                </Col>
                <Col>
                  <Button
                    className="btn-round"
                    color="success"
                    size="lg"
                    disabled={!botaoHabilitadoDashboard}
                    href="/landing-inst"
                    onClick={async () => {
                      await clearMessageRedux();
                    }}
                  >
                    Ir para dashboard
                  </Button>
                </Col>
              </Row>
              {alertaAberto && (
                <Alert color={sucesso ? "success" : "danger"}>
                  {message && message.message}
                </Alert>
              )}
              <div className="register-bg" />
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    equipes: state.equipe && state.equipe.equipes.equipes,
    idGuerra: state.idGuerra,
    idInstituicao: state.auth && state.auth.user.usuario,
    message: state.message
  };
};

const mapDispatchToProps = (dispatch) => ({
  setMessageRedux: (message) => dispatch(setMessage(message)),
  clearMessageRedux: () => dispatch(clearMessage())
});

export default connect(mapStateToProps, mapDispatchToProps)(CadastroAluno);
