import React, { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import { connect } from "react-redux";
import LandingInstManager from "../LandingInstManager";

const TabelaPontosAlunos = (props) => {
  // const { idGuerra, idInstituicao } = props;

  const [alunos, setAlunos] = useState();

  useEffect(() => {
            setAlunos( [
                { _id: 1, nome: 'Cedrico', matricula: 1, minutosEstudados: 180, idEquipe: "Lufa-Lufa" },
                { _id: 2, nome: 'Luna', matricula: 2, minutosEstudados: 90, idEquipe : "Corvinal" },
                { _id: 3, nome: 'Draco', matricula: 3, minutosEstudados: 90, idEquipe : "Sonserina" },
                { _id: 4, nome: 'Harry', matricula: 4, minutosEstudados: 120, idEquipe : "Grifinória" },
                { _id: 5, nome: 'Hermione', matricula: 5, minutosEstudados: 600, idEquipe : "Grifinória" },
                { _id: 6, nome: 'Goyle', matricula: 6, minutosEstudados: 15, idEquipe : "Sonserina" },
          ])
  }, []);



  /*
  useEffect(() => {
    const obterDadosAlunos = async (idInstituicaoBusca) => {
      await LandingInstManager.ObterAlunosPorIdInstituicao(
        idInstituicaoBusca
      ).then(async (response) => {
        console.log(response);
        console.log(idInstituicaoBusca);
        setAlunos(response);
      });
    };
    obterDadosAlunos("clap.inst");
  }, []);*/

  // useEffect(() => {
  //   const obterDadosAlunos = async () => {
  //     await LandingInstManager.ObterAlunos().then(async (response) => {
  //       setAlunos(response);
  //     });
  //   };
  //   obterDadosAlunos();
  // }, []);

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
                <td className="text-center">{aluno.minutosEstudados / 60}</td>
                <td className="text-center">{aluno.minutosEstudados * 23}</td>
                <td />
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default TabelaPontosAlunos;
