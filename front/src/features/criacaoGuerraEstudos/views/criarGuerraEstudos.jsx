import React, { useEffect, useState } from "react";
import { Button, Form, Input, Container, Row, Col } from "reactstrap";
import { Redirect } from "react-router-dom";
import Datetime from "react-datetime";
import moment from "moment";
import Footer from "components/Footer/Footer.js";

const CriarGuerraEstudos = (props) => {
  const [redirecionar, setRedirecionar] = useState(null);
  const [botaoHabilitado, setBotaoHabilitado] = useState(true);

  const [idGuerra, setIdGuerra] = useState(null);
  const [dataInicio, setDataInicio] = useState(null);
  const [dataFim, setDataFim] = useState(null);
  const [numeroAlunosPorEquipe, setNumeroAlunosPorEquipe] = useState(null);
  const [nomeEquipes, setNomeEquipes] = useState([]);
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

  //   const cadastrarInstituicao = async () => {
  //     const instituicao = {
  //       usuario: login,
  //       nome: nomeInstituicao,
  //       senha: senha,
  //       descricao: descricao,
  //       email: email
  //     };

  //     const resultadoInstituicao = await CadastroInstituicaoManager.cadastrarInstituicao(
  //       instituicao
  //     );
  //     if (resultadoInstituicao) {
  //       console.log("Criado com sucesso");
  //       setRedirecionar(
  //         <Redirect to={"/pagina-inicial"} />
  //       ); /*TODO trocar para redirecionar para pagina de login*/
  //     }
  //   };

  const geraCamposNomeEquipe = (numeroTotalEquipes) => {
    const inputs = [];

    for (let i = 1; i <= numeroTotalEquipes; i++) {
      inputs.push(
        <Input
          value={nomeEquipes[i]}
          placeholder={`Nome da equipe ${i}`}
          id={`input-${i}`}
          type="text"
          onChange={(e) => setNomeEquipes([...nomeEquipes, nomeEquipes[i]])}
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
                          onChange={(e) => setDataInicio(e.target)}
                          isValidDate={validaData}
                        />
                      </Col>
                      <Col>
                        <Datetime
                          value={dataFim}
                          timeFormat={false}
                          inputProps={{ placeholder: "Data de fim" }}
                          dateFormat={"DD/MM/YYYY"}
                          onChange={(e) => setDataFim(e.target)}
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
                    onClick={console.log("oi")}
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

export default CriarGuerraEstudos;
