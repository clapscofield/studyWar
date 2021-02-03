import React, { useEffect } from "react";
import {
  Row,
  Col,
  Button,
  Badge,
  Card,
  CardHeader,
  CardImg,
  CardTitle,
  CardBody,
  Container
} from "reactstrap";
import "react-confirm-alert/src/react-confirm-alert.css";

// core components
import LandingEstNavbar from "components/Navbars/LandingEstNavbar.js";

const PaginaLoja = (props) => {
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
      <div
        className="page-header"
        style={{ height: "1300px", maxHeight: "2000px" }}
      >
        <Container style={{ overflowY: "scroll" }}>
          <Row>
            <Col>
              <h1 className="text-white" style={{ marginTop: "150px" }}>
                Página da Loja
              </h1>
            </Col>
            <Col lg="4">
              <Button color="default" style={{ marginTop: "150px" }}>
                Suas moedas <Badge color="success">$430</Badge>
              </Button>
            </Col>
          </Row>
        </Container>
        <div className="content-center mt-4">
          <section className="section" style={{ marginTop: "150px" }}>
            <Row className="row-grid align-items-center text-left">
              <Col>
                <Card>
                  <CardHeader>
                    <CardImg
                      alt="..."
                      src={require("assets/img/kindle.jpeg").default}
                    />
                    <CardTitle tag="h4">Kindle </CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Button color="primary">Comprar</Button>
                    <Badge color="success">$550</Badge>
                  </CardBody>
                </Card>
              </Col>
              <Col>
                <Card>
                  <CardHeader>
                    <CardImg
                      alt="..."
                      src={require("assets/img/game.jpeg").default}
                    />
                    <CardTitle tag="h4">GameBoy</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Button color="primary">Comprar</Button>
                    <Badge color="success">$670</Badge>
                  </CardBody>
                </Card>
              </Col>
              <div className="w-100" />
              <Col>
                <Card>
                  <CardHeader>
                    <CardImg
                      alt="..."
                      src={require("assets/img/ni.jpeg").default}
                    />
                    <CardTitle tag="h4">Nintendo DS </CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Button color="primary">Comprar</Button>
                    <Badge color="success">$1000</Badge>
                  </CardBody>
                </Card>
              </Col>
              <Col>
                <Card>
                  <CardHeader>
                    <CardImg
                      alt="..."
                      src={require("assets/img/play.jpeg").default}
                    />
                    <CardTitle tag="h4">Switch </CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Button color="primary">Comprar</Button>
                    <Badge color="success">$2000</Badge>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </section>
        </div>
      </div>
    </>
  );
};
export default PaginaLoja;
