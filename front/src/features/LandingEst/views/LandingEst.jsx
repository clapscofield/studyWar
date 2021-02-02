import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "react-confirm-alert/src/react-confirm-alert.css";
import { connect } from "react-redux";

// core components
import LandingEstNavbar from "components/Navbars/LandingEstNavbar.js";
import Footer from "components/Footer/Footer.js";
import TimerEst from "../../TimerEst";

const LandingEst = (props) => {
  const { aluno } = props;
  useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);

  return (
    <>
      <LandingEstNavbar />
      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="path"
            src={require("assets/img/blob.png").default}
          />
          <Container style={{ marginTop: "150px" }}>
            <Row className="text-left">
              <Col>
                <h1 className="text-white">Bem vindo {aluno && aluno.nome}</h1>
              </Col>
            </Row>
          </Container>
          <div className="content-center">
            <TimerEst matricula={aluno && aluno.matricula} />
          </div>
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

function mapStateToProps(state) {
  return {
    aluno: state.authEstudante && state.authEstudante.user
  };
}

export default connect(mapStateToProps)(LandingEst);
