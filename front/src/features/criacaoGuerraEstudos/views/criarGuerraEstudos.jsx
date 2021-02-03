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
  const { usuarioInstituicao, inserirEquipe } = props;

  const [redirecionar, setRedirecionar] = useState(null);
  const [botaoHabilitado, setBotaoHabilitado] = useState(true);

  const [idGuerra, setIdGuerra] = useState(null);
  const [dataInicio, setDataInicio] = useState(null);
  const [dataFim, setDataFim] = useState(null);
  const [numeroAlunosPorEquipe, setNumeroAlunosPorEquipe] = useState(null);
  const [nomeEquipes, setNomeEquipes] = useState({ equipes: [] });

  useEffect(() => {
    setBotaoHabilitado(idGuerra && nomeEquipes && numeroAlunosPorEquipe);
  }, [setBotaoHabilitado, idGuerra, nomeEquipes, numeroAlunosPorEquipe]);

  const criarEquipes = async () => {
    await Promise.all(
      nomeEquipes.equipes.map(async (i) => {
        const equipe = {
          idEquipe: i,
          usuarioInstituicao: usuarioInstituicao,
          idGuerra: idGuerra
        };
        return await CriacaoGuerraEstudosManager.criarEquipe(equipe);
      })
    );
  };

  const criarGuerraEstudos = async () => {
    const guerraEstudos = {
      dataInicio: moment(dataInicio).format("DD/MM/YYYY"),
      dataFim: moment(dataFim).format("DD/MM/YYYY"),
      identificador: idGuerra,
      numeroAlunosPorEquipe: numeroAlunosPorEquipe,
      idInstituicao: usuarioInstituicao
    };

    const resultadoEquipes = criarEquipes();

    const resultado = await CriacaoGuerraEstudosManager.criarGuerraEstudos(
      guerraEstudos
    );

    /* Nome equipes salvo no redux */
    nomeEquipes && inserirEquipe(nomeEquipes);

    if (resultado && resultadoEquipes) {
      console.log("Criado com sucesso");
      setRedirecionar(<Redirect to={"/cadastro-aluno"} />);
    }
  };

  function createInputs() {
    return nomeEquipes.equipes.map((el, i) => (
      <div key={i} className="w-100">
        <Col>
          <Input
            value={el || ""}
            placeholder={`Nome da equipe`}
            id={`input-${i}`}
            type="text"
            onChange={handleChange.bind(i)}
          />
        </Col>
        <Col lg={{ size: "auto" }}>
          <Button
            className="btn-icon btn-round"
            color="primary"
            type="button"
            onClick={removeClick.bind(i)}
          >
            <i className="tim-icons icon-simple-remove" />
          </Button>
        </Col>
      </div>
    ));
  }

  function handleChange(event) {
    let vals = [...nomeEquipes.equipes];
    vals[this] = event.target.value;
    setNomeEquipes({ equipes: vals });
  }

  const addClick = () => {
    setNomeEquipes({ equipes: [...nomeEquipes.equipes, ""] });
  };

  const removeClick = () => {
    let vals = [...nomeEquipes.equipes];
    vals.splice(this, 1);
    setNomeEquipes({ equipes: vals });
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
                    <Row>
                      <Col>
                        {createInputs()}{" "}
                        <Button
                          size="sm"
                          className="btn-round mb-4"
                          color="primary"
                          type="button"
                          onClick={addClick}
                        >
                          Nova equipe
                        </Button>
                      </Col>
                    </Row>
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

const mapStateToProps = (state) => {
  return {
    usuarioInstituicao: state.auth && state.auth.user.usuario
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    inserirEquipe: (nomeEquipes) => dispatch(inserirEquipe(nomeEquipes))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CriarGuerraEstudos);
