import React, { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import { connect } from "react-redux";
import LandingInstManager from "../LandingInstManager";

const TabelaPontosAlunos = (props) => {
  // const { idGuerra, idInstituicao } = props;

  const [alunos, setAlunos] = useState();

  useEffect(() => {
            setAlunos( [
                { _id: 1, nome: 'Dany', matricula: 1, minutosEstudados: 25, idEquipe: "House Targaryen" },
                { _id: 2, nome: 'Arya', matricula: 2, minutosEstudados: 60, idEquipe : "House Stark" },
                { _id: 3, nome: 'Tyrion', matricula: 3, minutosEstudados: 50, idEquipe : "House Lannister" },
                { _id: 4, nome: 'Yara', matricula: 4, minutosEstudados: 77, idEquipe : "House Greyjoy" },
                { _id: 5, nome: 'Loras', matricula: 5, minutosEstudados: 46, idEquipe : "House Tyrell" },
                { _id: 6, nome: 'Robert', matricula: 6, minutosEstudados: 90, idEquipe : "House Baratheon" },
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
            <th className="text-center">Minutos Estudados</th>
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
                <td className="text-center">{aluno.minutosEstudados * 10}</td>
                <td />
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default TabelaPontosAlunos;
