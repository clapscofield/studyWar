import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  Input,
  Container,
  Row,
  Col,
  FormGroup,
  Label
} from "reactstrap";
import { Redirect } from "react-router-dom";
import Datetime from "react-datetime";
import Footer from "components/Footer/Footer.js";
import { connect } from "react-redux";

const CadastroAluno = (props) => {
  const { equipes } = props;

  const [redirecionar, setRedirecionar] = useState(null);
  const [botaoHabilitado, setBotaoHabilitado] = useState(true);

  const [nome, setNome] = useState(null);
  const [matricula, setMatricula] = useState(null);
  const [dataNascimento, setDataNascimento] = useState(null);
  const [turma, setTurma] = useState(null);
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState(null);
  const [equipe, setEquipe] = useState(null);

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

  const cadastrarAluno = async () => {
    // const aluno = {
    //   dataInicio: moment(dataInicio).format("DD/MM/YYYY"),
    //   dataFim: moment(dataFim).format("DD/MM/YYYY"),
    //   identificador: idGuerra,
    //   numeroTotalEquipes: numeroEquipes,
    //   numeroAlunosPorEquipe: numeroAlunosPorEquipe
    // };
    // const resultado = await CriacaoGuerraEstudosManager.criarGuerraEstudos(
    //   guerraEstudos
    // );
    // /* Nome equipes salvo no redux */
    // nomeEquipes && inserirEquipe(nomeEquipes);
    // if (resultado) {
    //   console.log("Criado com sucesso");
    //   setRedirecionar(
    //     <Redirect to={"/pagina-inicial"} />
    //   ); /*TODO trocar para redirecionar para a continuacao -> PARA CADA EQUIPE INSERIR ALUNOS */
    // }
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
                  <Form className="form">
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
                        onChange={(e) => setEquipe(e.target.value)}
                      >
                        equipes.forEach(eq => {<option> eq </option>});
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
                    onClick={() => console.log("oi")}
                  >
                    Cadastrar aluno
                  </Button>
                </Col>
              </Row>
              <div className="register-bg" />
            </Container>
          </div>
        </div>
        <Footer />
        {redirecionar}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    equipes: state.equipes
  };
};

export default connect(mapStateToProps)(CadastroAluno);
