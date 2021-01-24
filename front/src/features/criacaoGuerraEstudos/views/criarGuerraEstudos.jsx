import React, { useEffect, useState } from "react";
import { Button, Form, Input, Container, Row, Col } from "reactstrap";
import { Redirect } from "react-router-dom";
import Datetime from "react-datetime";
import moment from "moment";
import Footer from "components/Footer/Footer.js";
import CriacaoGuerraEstudosManager from "../CriacaoGuerraEstudosManager";
import { inserirEquipe } from "../../../redux/actionCreators";
import { connect } from "react-redux";

const CriarGuerraEstudos = (props) => {
  const { inserirEquipe } = props;

  const [redirecionar, setRedirecionar] = useState(null);
  const [botaoHabilitado, setBotaoHabilitado] = useState(true);

  const [idGuerra, setIdGuerra] = useState(null);
  const [dataInicio, setDataInicio] = useState(null);
  const [dataFim, setDataFim] = useState(null);
  const [numeroAlunosPorEquipe, setNumeroAlunosPorEquipe] = useState(null);
  const [nomeEquipes, setNomeEquipes] = useState();
  const [numeroEquipes, setNumeroEquipes] = useState(null);

  useEffect(() => {
    setBotaoHabilitado(
      idGuerra && numeroEquipes && numeroAlunosPorEquipe && nomeEquipes
    );
  }, [
    setBotaoHabilitado,
    idGuerra,
    numeroEquipes,
    numeroAlunosPorEquipe,
    nomeEquipes
  ]);

  const criarGuerraEstudos = async () => {
    const guerraEstudos = {
      dataInicio: moment(dataInicio).format("DD/MM/YYYY"),
      dataFim: moment(dataFim).format("DD/MM/YYYY"),
      identificador: idGuerra,
      numeroTotalEquipes: numeroEquipes,
      numeroAlunosPorEquipe: numeroAlunosPorEquipe
    };

    const resultado = await CriacaoGuerraEstudosManager.criarGuerraEstudos(
      guerraEstudos
    );

    /* Nome equipes salvo no redux */
    nomeEquipes && inserirEquipe(nomeEquipes);

    if (resultado) {
      console.log("Criado com sucesso");
      setRedirecionar(
        <Redirect to={"/pagina-inicial"} />
      ); /*TODO trocar para redirecionar para a continuacao -> PARA CADA EQUIPE INSERIR ALUNOS */
    }
  };

  const handleChangeNomeEquipes = (nome, i) => {
    let nomes = [...nomeEquipes];
    let novoNome = nome;
    nomes[i] = novoNome;
    setNomeEquipes({ nomes });
  };

  const geraCamposNomeEquipe = (numeroEquipes) => {
    const inputs = [];
    for (let i = 1; i <= numeroEquipes; i++) {
      inputs.push(
        <Input
          value={nomeEquipes[i]}
          placeholder={`Nome da equipe ${i}`}
          id={`input-${i}`}
          type="text"
          onChange={(e) => handleChangeNomeEquipes(e.event.value, i)}
          className={"mb-4"}
        />
      );
    }
    return inputs;
  };

  const validaData = (currentDate) => {
    var hoje = moment(new Date());
    var maxDate = moment("2022-01-01");
    return (
      currentDate.isBefore(moment(maxDate)) && currentDate.isAfter(moment(hoje))
    );
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
                  <h1 className="title">Novo StudyWar</h1>
                  <Form className="form">
                    <Row>
                      <Col>
                        <Input
                          value={idGuerra}
                          placeholder="Crie um identificador para este SW"
                          type="text"
                          onChange={(e) => setIdGuerra(e.target.value)}
                          className={"mb-4"}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col className={"mb-4"}>
                        <Datetime
                          value={dataInicio}
                          timeFormat={false}
                          inputProps={{ placeholder: "Data de início" }}
                          dateFormat={"DD/MM/YYYY"}
                          onChange={(e) => setDataInicio(e)}
                          isValidDate={validaData}
                        />
                      </Col>
                      <Col>
                        <Datetime
                          value={dataFim}
                          timeFormat={false}
                          inputProps={{ placeholder: "Data de fim" }}
                          dateFormat={"DD/MM/YYYY"}
                          onChange={(e) => setDataFim(e)}
                          isValidDate={validaData}
                        />
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3 className="title">
                    Criar equipes para a guerra de estudos
                  </h3>
                  <Form className="form">
                    <Row>
                      <Col>
                        <Input
                          value={numeroEquipes}
                          placeholder="Número total de equipes"
                          type="number"
                          onChange={(e) => setNumeroEquipes(e.target.value)}
                          className={"mb-4"}
                        />
                      </Col>
                      <Col>
                        <Input
                          value={numeroAlunosPorEquipe}
                          placeholder="Número de alunos por equipe"
                          type="number"
                          onChange={(e) =>
                            setNumeroAlunosPorEquipe(e.target.value)
                          }
                          className={"mb-4"}
                        />
                      </Col>
                    </Row>
                    {geraCamposNomeEquipe(numeroEquipes)}
                  </Form>
                  <Button
                    className="btn-round"
                    color="primary"
                    size="lg"
                    disabled={!botaoHabilitado}
                    onClick={() => criarGuerraEstudos()}
                  >
                    Continuar
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

const mapDispatchToProps = (dispatch) => {
  return {
    inserirEquipe: (nomeEquipes) => dispatch(inserirEquipe(nomeEquipes))
  };
};

export default connect(null, mapDispatchToProps)(CriarGuerraEstudos);
