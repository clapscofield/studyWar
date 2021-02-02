import React, { useEffect, useState, Component } from "react";
import {
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Button
} from "reactstrap";
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
          <div className="content-center">
            <Row className="row-grid align-items-center text-left">
              <Col lg="8" md="6">
                <h1 className="text-white">Bem vindo {aluno && aluno.nome}</h1>
                <TimerEst />
              </Col>
            </Row>
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
