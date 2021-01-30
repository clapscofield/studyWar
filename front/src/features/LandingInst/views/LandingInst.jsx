import React, { useEffect } from "react";
import { Row, Col } from "reactstrap";

// core components
import LandingInstNavbar from "components/Navbars/LandingInstNavbar.js";
import Footer from "components/Footer/Footer.js";

const LandingInst = (props) => {
  useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);

  class Table extends React.Component {
    constructor(props) {
       super(props)
       this.state = {
          students: [
             { id: 1, name: 'ana', age: 18, email: 'ana@email.com' },
             { id: 2, name: 'bruno', age: 19, email: 'bruno@email.com' },
             { id: 3, name: 'carlos', age: 16, email: 'carlos@email.com' },
             { id: 4, name: 'daniela', age: 17, email: 'daniela@email.com' }
          ]
       }
    }

    render() {
      return (
        <div className="container">
            <h1>Tabela estática de estudantes</h1>
            <table>
                <thead>
                <tr>
                    <th>nome</th>
                    <th>idade</th>
                    <th>email</th>
                </tr>
                </thead>
                <tbody>
                    {
                        this.state.students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.email}</td>
                                <td/>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
  }
}


  return (
    <>
      <LandingInstNavbar />
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
                  Dashboard da Instituição <br />
                </h1>
                <Table/>
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

export default LandingInst;
