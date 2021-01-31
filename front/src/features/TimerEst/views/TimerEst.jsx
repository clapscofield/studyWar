import React, { useEffect, useState, Component } from "react";
import {
  Row,
  Col,
  Button
} from "reactstrap";
import ReactTimer from "@xendora/react-timer";
import 'react-confirm-alert/src/react-confirm-alert.css'; 

import { CountdownCircleTimer } from 'react-countdown-circle-timer'

// core components
import LandingEstNavbar from "components/Navbars/LandingEstNavbar.js";
import Footer from "components/Footer/Footer.js";

const LandingEst = (props) => {
  useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };

  }, []);

// Avisar que se sair da página as horas de estudo serão perdidas - detalhe, não tem como personalizar a mensagem, infelizmente

   useEffect(() => {
    window.addEventListener('beforeunload', alertUser)
    return () => {
      window.removeEventListener('beforeunload', alertUser)
    }
  }, [])
  const alertUser = e => {
    e.preventDefault()
    e.returnValue = ''
  }
   
   
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
          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="8" md="6">
                <h1 className="text-white">
                  Bons Estudos! <br />
                </h1>

<ReactTimer

    interval={1000}
    start={100}
    end={t => t === 0}
    onTick={t => t - 1}
>
    {time => <span>{time}</span>}
    
</ReactTimer>
<br></br>
<br></br>
                      <Button
                        className="btn-round"
                        color="primary"
                        size="md"
                        //TODO : Criar a função de zerar horas de estudo.
                        onClick={(e) => { if (window.confirm('Deseja mesmo parar o cronômetro de estudo? Atenção, suas horas de estudo até agora serão perdidas!')) this.deleteItem(e) } }
                      >
                        Interromper
                      </Button>

                      
              </Col>
              {}
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
export default LandingEst;