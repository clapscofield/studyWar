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
import ReactTimer from "@xendora/react-timer";
import "react-confirm-alert/src/react-confirm-alert.css";

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

  return (
    <>
      <Row className="row-grid justify-content-between align-items-center text-left">
        <Col lg="8" md="6">
          {!comecar && (
            <>
              {" "}
              <h4 className="text-white">
                Quanto tempo quer estudar hoje? <br />
              </h4>
              <Form className="form">
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="tim-icons icon-bank" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    value={tempo}
                    placeholder="Tempo de estudo"
                    type="text"
                    onChange={(e) => setTempo(e.target.value)}
                  />
                </InputGroup>
              </Form>
              <Button
                className="btn-round"
                color="primary"
                size="md"
                onClick={() => setComecar(true)}
              >
                Começar
              </Button>
            </>
          )}
          {comecar && (
            <>
              <h1 className="text-white">
                Bons Estudos! <br />
              </h1>
              <ReactTimer
                interval={1000}
                start={tempo}
                end={(t) => t === 0}
                onTick={(t) => t - 1}
              >
                {(time) => <span>{time}</span>}
              </ReactTimer>
              <Button
                className="btn-round m-4"
                color="primary"
                size="md"
                //TODO : Criar a função de zerar horas de estudo.
                // onClick={(e) => {
                //   if (
                //     window.confirm(
                //       "Deseja mesmo parar o cronômetro de estudo? Atenção, suas horas de estudo até agora serão perdidas!"
                //     )
                //   )
                //     this.deleteItem(e);
                // }}
              >
                Interromper
              </Button>
            </>
          )}
        </Col>
      </Row>
    </>
  );
};
export default LandingEst;
