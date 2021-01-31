import React, { useEffect } from "react";
import { Row, Col, Container } from "reactstrap";
import { connect } from "react-redux";

// core components
import LandingInstNavbar from "components/Navbars/LandingInstNavbar.js";
import Footer from "components/Footer/Footer.js";
import TabelaPontosAlunos from "./TabelaPontosAlunos";

const LandingInst = (props) => {
  const { instituicao } = props;
  useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="path"
            src={require("assets/img/blob.png").default}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path2.png").default}
          />
          <img
            alt="..."
            className="shapes triangle"
            src={require("assets/img/triunghiuri.png").default}
          />
          <img
            alt="..."
            className="shapes wave"
            src={require("assets/img/waves.png").default}
          />
          <img
            alt="..."
            className="shapes squares"
            src={require("assets/img/patrat.png").default}
          />
          <img
            alt="..."
            className="shapes circle"
            src={require("assets/img/cercuri.png").default}
          />
          <Container className="align-items-center justify-content-left">
            <LandingInstNavbar />
            <Row>
              <Col>
                <h1 className="text-white mt-10" style={{ marginTop: "100px" }}>
                  Dashboard {instituicao && instituicao.nome} <br />
                </h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3 className="text-white">
                  Tabela de acompanhamento dos alunos <br />
                </h3>
                <TabelaPontosAlunos />
              </Col>
            </Row>
          </Container>
        </div>
        <section className="section section-lg">
          <section className="section">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png").default}
            />
          </section>
        </section>
      </div>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    instituicao: state.auth && state.auth.user
  };
};

export default connect(mapStateToProps)(LandingInst);
