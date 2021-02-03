import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Button,
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input
} from "reactstrap";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import ModalCancelamento from "./ModalCancelamento";
import TimerEstudanteManager from "../TimerEstudanteManager";

const minuteSeconds = 60;
const hourSeconds = 3600 * 2;

const TimerEst = (props) => {
  const { matricula } = props;
  useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);

  // Avisar que se sair da página as horas de estudo serão perdidas - detalhe, não tem como personalizar a mensagem, infelizmente

  // useEffect(() => {
  //   window.addEventListener("beforeunload", alertUser);
  //   return () => {
  //     window.removeEventListener("beforeunload", alertUser);
  //   };
  // }, []);
  // const alertUser = (e) => {
  //   e.preventDefault();
  //   e.returnValue = "";
  // };

  const [tempo, setTempo] = useState("");
  const [comecar, setComecar] = useState(false);
  const [botaoDesabilitado, setBotaoDesabilitado] = useState(true);
  const [componenteTempo, setComponenteTempo] = useState(null);
  const [modalAberto, setModalAberto] = useState(false);
  const [terminou, setTerminou] = useState(false);

  const validarTempo = (tempoVal) => {
    if (tempoVal > 120 || tempoVal === 0) {
      setBotaoDesabilitado(true);
    } else {
      setBotaoDesabilitado(false);
    }
    return tempoVal;
  };

  const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;

  const renderTime = (dimension, time) => {
    return (
      <div style={{ justifyContent: "center" }}>
        <div className="time">{time}</div>
        <div>{dimension}</div>
      </div>
    );
  };

  useEffect(() => {
    const timerProps = {
      isPlaying: true,
      size: 240,
      strokeWidth: 10
    };

    const aoTerminar = async () => {
      setComecar(false);
      setTerminou(true);
      await TimerEstudanteManager.adicionarEstudo(matricula, tempo);
      setTimeout(function () {
        setTerminou(false);
      }, 3000);
    };

    const ComponenteTimer = (remainingTime) => {
      return (
        <CountdownCircleTimer
          {...timerProps}
          colors={[["#00F2C3"]]}
          duration={hourSeconds}
          initialRemainingTime={remainingTime % hourSeconds}
          // onComplete={(totalTime) => aoTerminar()}
        >
          {({ elapsedTime }) =>
            renderTime("minutos", getTimeMinutes(hourSeconds - elapsedTime))
          }
        </CountdownCircleTimer>
      );
    };

    if (tempo && tempo > 0) {
      const startTime = Date.now() / 1000; // use UNIX timestamp in seconds
      const endTime = startTime + tempo * 60; // use UNIX timestamp in seconds
      const remainingTime = endTime - startTime;
      console.log(endTime);
      console.log(endTime - startTime);
      setComponenteTempo(ComponenteTimer(remainingTime));
      if (remainingTime === 0) {
        aoTerminar();
      }
    }
  }, [tempo, matricula]);

  return (
    <>
      {!comecar && !terminou && (
        <>
          <Row className="row-grid justify-content-between align-items-center text-left">
            <Col lg="12" md="6">
              <h3 className="text-white mb-1">
                Quanto tempo quer estudar hoje?
              </h3>
              <p className="text-white">
                Coloque seu tempo de estudos em minutos. Você pode estudar até
                120 minutos por vez. Você pode reiniciar se acabar o seu tempo,
                mas lembre sempre de ter um tempo de descanso entre os estudos.
              </p>
              <Form className="form mb-4 mt-4">
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="tim-icons icon-time-alarm" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    value={tempo}
                    placeholder="Tempo de estudo em minutos"
                    type="text"
                    maxLength={3}
                    onChange={(e) => setTempo(validarTempo(e.target.value))}
                  />
                </InputGroup>
              </Form>
              <Button
                className="btn-round"
                color="success"
                size="md"
                onClick={() => setComecar(true)}
                disabled={botaoDesabilitado}
              >
                Começar
              </Button>
            </Col>
          </Row>
        </>
      )}
      {comecar && (
        <>
          <Row className="row-grid justify-content-between align-items-center text-center">
            <Col>
              <h1 className="text-white">
                Bons Estudos! <br />
              </h1>
              <div
                style={{
                  justifyContent: "center",
                  marginLeft: "300px",
                  marginBottom: "50px",
                  marginTop: "50px"
                }}
              >
                {componenteTempo}
              </div>
              <Button
                className="btn-round m-4"
                color="warning"
                size="md"
                onClick={(e) => {
                  setModalAberto(true);
                }}
              >
                Interromper
              </Button>
              <ModalCancelamento
                modalAberto={modalAberto}
                setModalAberto={setModalAberto}
                acaoSair={setComecar}
              />
            </Col>
          </Row>
        </>
      )}
      {terminou && (
        <Row className="row-grid justify-content-between align-items-center text-center">
          <Col>
            <h1 className="text-white">
              Parabéns! Você terminou seu tempo de estudos! <br />
            </h1>
          </Col>
        </Row>
      )}
    </>
  );
};
export default TimerEst;
