import React, { useEffect } from "react";
import { Container, Row, Col, Progress, Table } from "reactstrap";
import "react-confirm-alert/src/react-confirm-alert.css";
import { connect } from "react-redux";


// core components
import LandingEstNavbar from "components/Navbars/LandingEstNavbar.js";
import Footer from "components/Footer/Footer.js";
import TimerEst from "../../TimerEst";

const VisualizarGuerra = (props) => {
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
      <div className="page-header" style={{ height: "1300px" }}>
          <img
            alt="..."
            className="path"
            src={require("assets/img/blob.png").default}
          />
          <Container style={{ marginTop: "150px" }}>
            <Row className="text-left">
              <Col>
                <h1 className="text-white"> Guerra de Estudos atual {aluno && aluno.nome}</h1>
              </Col>
            </Row>
          </Container>
          <div className="content-center" style={{ marginTop: "0px" }}>
            
          <div className="progress-container">
          <span className="progress-badge">House Targaryen</span>
          <Progress max="100" value="25">
            <span className="progress-value">250 pts</span>
          </Progress>
        </div>
        <div className="progress-container progress-primary">
          <span className="progress-badge">House Stark</span>
          <Progress max="100" value="60" barClassName="progress-bar-primary">
            <span className="progress-value">600 pts</span>
          </Progress>
        </div>
        <div className="progress-container progress-danger">
          <span className="progress-badge">House Lannister</span>
          <Progress max="100" value="50" barClassName="progress-bar-danger">
            <span className="progress-value">500 pts</span>
          </Progress>
        </div>
        <div className="progress-container progress-warning">
          <span className="progress-badge">House Greyjoy</span>
          <Progress max="100" value="77" barClassName="progress-bar-warning">
            <span className="progress-value">770 pts</span>
          </Progress>
        </div>
        <div className="progress-container progress-success">
          <span className="progress-badge">House Tyrell </span>
          <Progress max="100" value="46" barClassName="progress-bar-success">
            <span className="progress-value">460 pts</span>
          </Progress>
        </div>
        <div className="progress-container progress-info">
          <span className="progress-badge">House Baratheon</span>
          <Progress max="100" value="90" barClassName="progress-bar-info">
            <span className="progress-value">900 pts</span>
          </Progress>
        </div>

        <Table responsive style={{ marginTop: "50px", height:"150px" }}>
    <thead>
        <tr>
            <th className="text-center">#</th>
            <th>Nome</th>
            <th>Instituição</th>
            <th className="text-center">Posição geral</th>
            <th className="text-right">Pontos acumulados</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td className="text-center">1</td>
            <td>Andrew Mike</td>
            <td>DCC-UFMG</td>
            <td className="text-center">1</td>
            <td className="text-right"> 9225</td>
            <td className="text-right">
                
            </td>
        </tr>
        <tr>
            <td className="text-center">2</td>
            <td>Manuel Rico</td>
            <td>EEFTO-UFMG</td>
            <td className="text-center">2</td>
            <td className="text-right"> 9201</td>
            <td className="text-right">
                
            </td>
        </tr>
        <tr>
            <td className="text-center">3</td>
            <td>Alex Mike</td>
            <td>FFLCH-USP</td>
            <td className="text-center">3</td>
            <td className="text-right"> 8870</td>
            <td className="text-right">
                
            </td>
        </tr>
    </tbody>
</Table>








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

export default VisualizarGuerra;
