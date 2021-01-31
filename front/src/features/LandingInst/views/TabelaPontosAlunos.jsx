import React, { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import { connect } from "react-redux";
import LandingInstManager from "../LandingInstManager";

const TabelaPontosAlunos = (props) => {
  const { idGuerra, idInstituicao } = props;

  const [alunos, setAlunos] = useState();

  useEffect(() => {
    const obterDadosAlunos = async () => {
      await LandingInstManager.ObterAlunos().then(async (response) => {
        setAlunos(response);
      });
    };
    obterDadosAlunos();
  }, []);

  return (
    <>
      <Table responsive>
        <thead>
          <tr>
            <th className="text-center">Matrícula</th>
            <th>Nome</th>
            <th>Equipe</th>
            <th className="text-center">Horas estudadas</th>
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
                <td className="text-center">{aluno.horasEstudadas}</td>
                <td className="text-center">{aluno.horasEstudadas * 23}</td>
                <td />
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default TabelaPontosAlunos;
