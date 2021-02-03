// import React from 'react';
import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { Button, Row, Col } from "reactstrap";
import { connect } from "react-redux";

// core components
import VisualizarAlunosNavbar from "components/Navbars/VisualizarAlunosNavbar";
import VisualizarAlunosManager from "../VisualizarAlunosManager";

const VisualizarAlunos = (props) => {
  const { idInstituicao } = props;
  useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);

  const [alunos, setAlunos] = useState();

  useEffect(() => {
    const obterDadosAlunos = async (idInstituicaoBusca) => {
      await VisualizarAlunosManager.ObterAlunosPorIdInstituicao(
        idInstituicaoBusca
      ).then((response) => {
        setAlunos(response);
      });
    };
    obterDadosAlunos("clap.inst");
  }, []);

  return (
    <>
      <VisualizarAlunosNavbar />
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
          <Table responsive>
            <thead>
              <tr>
                <th className="text-center">Matrícula</th>
                <th>Nome</th>
                <th>Equipe</th>
                <th className="text-center">Minutos estudados</th>
                <th className="text-right">Pontos totais</th>
              </tr>
            </thead>
            <tbody>
              {alunos &&
                alunos.map((aluno) => (
                  <tr key={aluno._id}>
                    <td>{aluno.matricula}</td>
                    <td>{aluno.nome}</td>
                    <td>{aluno.idEquipe}</td>
                    <td className="text-center">{aluno.minutosEstudados}</td>
                    <td className="text-center">
                      {aluno.minutosEstudados * 23}
                    </td>
                    <td />
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    idInstituicao: state.auth && state.auth.user && state.auth.user.usuario
  };
};

export default connect(mapStateToProps)(VisualizarAlunos);
